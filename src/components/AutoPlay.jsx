
var AutoPlay = ({autoButtonClick}) => (
  <input type="checkbox" className="autoplay-button" onClick={autoButtonClick}></input>
);

AutoPlay.propTypes = {
  autoButtonClick: React.PropTypes.func.isRequired
};

window.AutoPlay = AutoPlay;
