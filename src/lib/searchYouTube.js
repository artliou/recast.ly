var searchYouTube = ( {key = YOUTUBE_API_KEY, query = '', max = 5}, callback) => { 
  var debouncedFunc = _.debounce( () => {
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
  }, 500, true);
  debouncedFunc();
};

window.searchYouTube = searchYouTube;


// onCHange to Options (value in form)
// Create func to update this.state.videopage. Func will have. one param that will help mathematiclaly slice
// From function, mathematically slice from this.state.videos (maybe keep this in this.state)
// Pass that slice into videolist