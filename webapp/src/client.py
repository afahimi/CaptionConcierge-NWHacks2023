# import requests

# url = 'http://localhost:5000/captions'
# response = requests.get(url)

# print(response.status_code)
# print(response.text)

import requests
import json

url = 'http://localhost:5000/captions'
data = {"video_id": "mc979OhitAg"}
headers = {'Content-type': 'application/json'}
response = requests.post(url, data=json.dumps(data), headers=headers)

print(response.status_code)
print(response.text)

