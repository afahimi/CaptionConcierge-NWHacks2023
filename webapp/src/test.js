// const { getSubtitles } = require('youtube-captions-scraper');

// // getSubtitles({
// //   videoID: 'onZkjV9Epg8 ', // youtube video id
// //   lang: 'en' // default: `en`
// // }).then(captions => {
// //   //console.log(captions);
// //   for(var i=0;i<captions.length;i++){
// //     console.log(captions[i].text);
// //   }
// // });


// const getAndPrintCaptions = async (videoId, language) => {
//     getSubtitles({
//       videoID: videoId, // youtube video id
//       lang: language, // default: `en`
//     }).then((captions) => {
//       captions.forEach((caption) => console.log(caption.text));
//     });
//   };


// getAndPrintCaptions('onZkjV9Epg8', 'en');

const postCaptions = async (videoId) => {
    const url = 'http://127.0.0.1:5000/captions';
    const payload = {video_id: videoId};

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json',
        }
    })
    const data = await response.json()
    console.log(data)
}

postCaptions("mc979OhitAg");