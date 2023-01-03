
import requests
import json
import numpy as np
from python_tsp.exact import  solve_tsp_dynamic_programming


def basic_distance():

    input_origin = 'Новоселиця'
    input_data_destinations = ['Чернівці','Сторожинець','Хотин','Кіцмань']
    all_adr = [input_origin]+input_data_destinations

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

                print(f'Відстань між {origin} & {list_of_city[i]}')
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





basic_distance()

