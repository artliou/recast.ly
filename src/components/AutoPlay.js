
var AutoPlay = ({autoButtonClick}) => (
  <button className="autoplay-button" onClick={autoButtonClick}></button>
);

AutoPlay.propTypes = {
  autoButtonClick: React.PropTypes.func.isRequired
};

window.AutoPlay = AutoPlay;
