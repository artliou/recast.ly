
var VideoDetails = (props) => (
  <div className="video-player-details2">
      <div>Published At: {props.video.snippet.publishedAt}</div>
      <div>Channel:  {props.video.snippet.channelTitle}</div>
  </div>
);

VideoDetails.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetails = VideoDetails;
  
// <div>{props.video.snippet.channelId}</div>