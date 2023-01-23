import requests
import json

url = f"https://maps.googleapis.com/maps/api/directions/json?origin=Новоселиця&destination=Чернівці=imperial&key=AIzaSyBziNeIwTqLw89CLI6yTz066I4tOVpLN60"
payload = {}
headers = {}
response = requests.request("GET", url, headers=headers, data=payload)

jsonData = json.loads(response.text)

place = []
coordinate_dict=[]
start_location_list=[]

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

