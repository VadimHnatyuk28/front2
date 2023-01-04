import requests
import json
import numpy as np
from python_tsp.exact import  solve_tsp_dynamic_programming

url = f"https://maps.googleapis.com/maps/api/directions/json?origin=Новоселиця&destination=Чернівці=imperial&key=AIzaSyBziNeIwTqLw89CLI6yTz066I4tOVpLN60"
payload = {}
headers = {}
response = requests.request("GET", url, headers=headers, data=payload)

jsonData = json.loads(response.text)

arr = []
for i in jsonData['routes']:
    print(i['legs'])
    for j in i['legs']:
        print(j['steps'])

        for o in j['steps']:
            print(o['distance'])
            print(o['duration'])
            print(o['end_location'])
            print(o['start_location'])
            arr.append(o['distance'])

            print('-------------------------------------')
print(arr)



# print(response.text)