from pyyoutube import Api
import json

api = Api(api_key="AIzaSyDfyD9RK453J5d9F7Mi3VWNAZnpFrsda34")

channel_by_id = api.get_channel_info(channel_id="UC_x5XG1OV2P6uZZ5FSM9Ttw")

diction = channel_by_id.items[0].to_dict()

description = diction['snippet']['description']
print(description)
