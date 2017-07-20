var searchYouTube = ( {key = YOUTUBE_API_KEY, query, max = 5 }, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query, 
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true',
  }).done((data) => {
    if (callback) {
      callback(data.items);
    }
  }).fail((err) => {
    console.log('GET failed', err);
  });
};

window.searchYouTube = searchYouTube;
