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

app = Flask(__name__)
CORS(app)

@app.route("/captions", methods=["POST"])
def get_captions():
    video_id = request.json.get("video_id")
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
    print(list)

    return jsonify(list)

if __name__ == "__main__":
    app.run(port=5000)


   
