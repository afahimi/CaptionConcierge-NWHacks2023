const { getSubtitles } = require('youtube-captions-scraper');

// getSubtitles({
//   videoID: 'onZkjV9Epg8 ', // youtube video id
//   lang: 'en' // default: `en`
// }).then(captions => {
//   //console.log(captions);
//   for(var i=0;i<captions.length;i++){
//     console.log(captions[i].text);
//   }
// });


const getAndPrintCaptions = async (videoId, language) => {
    getSubtitles({
      videoID: videoId, // youtube video id
      lang: language, // default: `en`
    }).then((captions) => {
      captions.forEach((caption) => console.log(caption.text));
    });
  };


getAndPrintCaptions('onZkjV9Epg8', 'en');