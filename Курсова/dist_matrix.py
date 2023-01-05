
import requests
import json
import numpy as np
from python_tsp.exact import  solve_tsp_dynamic_programming


def get_distance_matrix():

    input_origin = 'Новоселиця'
    input_data_destinations = ['Чернівці','Сторожинець','Хотин','Кіцмань']
    all_adr = [input_origin]+input_data_destinations
    print('Input array of cities')
    print(all_adr)
    print('')
    city_distance(all_adr)

def city_distance(arr):

    matrix = []

    for i in arr:
        origin = i
        new_arr = arr

        url = f"https://maps.googleapis.com/maps/api/distancematrix/json?origins={origin}&destinations={'|'.join(new_arr)}=imperial&key=AIzaSyBziNeIwTqLw89CLI6yTz066I4tOVpLN60"

        payload={}
        headers = {}
        response = requests.request("GET", url, headers=headers, data=payload)

        jsonData = json.loads(response.text)



        # for i in jsonData['destination_addresses']:
        #     print(i)

        list_of_city = jsonData["destination_addresses"]




        for value in jsonData["rows"]:
            row_of_matrix = []
            for i in range(len(value['elements'])):
                # print(value['elements'][i]['distance']['text'])

                result = float(value['elements'][i]['distance']['text'].translate(str.maketrans('', '', ' km')))

                print(f'Відстань між {origin} & {new_arr[i]}')
                print(result)
                row_of_matrix.append(result)


            matrix.append(row_of_matrix)
            print(" ")
    print('Матриця відстаней')
    for i in matrix:
        print(i)



    distance_matrix = np.array(matrix)
    path, distance = solve_tsp_dynamic_programming(distance_matrix)
    print('')
    print('Найкоротший шлях та довжина')
    print(path, distance)

    creating_way(arr,path)

def creating_way(all_adr,path):
    i=1
    while i<len(path):
        origin=all_adr[i-1]
        destination = all_adr[i]
        i+=1
        # print('origin',origin)
        # print('destination',destination)

        url = f"https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={destination}=imperial&key=AIzaSyBziNeIwTqLw89CLI6yTz066I4tOVpLN60"
        payload = {}
        headers = {}
        response = requests.request("GET", url, headers=headers, data=payload)

        jsonData = json.loads(response.text)

        place = []
        coordinate_dict = []
        start_location_list = []

        print(f'Way beetwen {origin} and {destination}')

        for data in jsonData['routes']:
            print(data['legs'])
            for leg in data['legs']:
                print(leg['steps'])
                for coordinate in leg['steps']:
                    start_location_list.append(coordinate['start_location']['lat'])
                    start_location_list.append(coordinate['start_location']['lng'])
                    coordinate_dict.append(start_location_list)
                    start_location_list = []
                    print(coordinate['distance'])
                    print(coordinate['duration'])
                    print(coordinate['start_location'])
                    print(coordinate['end_location'])

                    print('-------------------------------------')
                    place.append({'distantion': coordinate['distance'],
                                  'duration': coordinate['duration'],
                                  'start_location': coordinate['start_location'],
                                  'end_location': coordinate['end_location']
                                  })
            print(place)
            print(coordinate_dict)









if __name__ == "__main__":
    get_distance_matrix()



