# from youtube_transcript_api import YouTubeTranscriptApi
  
# # assigning srt variable with the list
# # of dictionaries obtained by the get_transcript() function
# srt = YouTubeTranscriptApi.get_transcript("mc979OhitAg")
  
# # prints the result
# #iterate through the list of dictionaries and concatenate the text of each dictionary, finally print the result

# text = ""
# for i in srt:
#     text += i["text"] + " "

# print(text)


from flask import Flask, jsonify, request
from youtube_transcript_api import YouTubeTranscriptApi
from flask_cors import CORS
from urllib.parse import urlparse, parse_qs
import json


app = Flask(__name__)
CORS(app)

@app.route("/captions", methods=["POST"])
def get_captions():

    video_id = request.json.get("video_id")

    parsed_url = urlparse(video_id)
    video_id = parse_qs(parsed_url.query)['v'][0]
    
    srt = YouTubeTranscriptApi.get_transcript(video_id)

    text = ""
    list = []
    count = 0
    for i in srt:
        text += i["text"] + " "
        if count == 100:
            list.append(text)
            text = ""
            count = 0
        count += 1
    list.append(text)
    
    return jsonify(list)

if __name__ == "__main__":
    app.run(port=5000)


   
