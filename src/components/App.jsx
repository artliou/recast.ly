
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      autoplay: false
    };
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.search = this.search.bind(this);
    this.autoButtonClick = this.autoButtonClick.bind(this);

  }

  componentDidMount() {
    this.search('react tutorial');
  }

  search(query) {
    var options = {
      query: query,
    };
    this.props.searchYouTube(options, (incoming) => (
      this.setState( {
        videos: incoming,
        currentVideo: incoming[0]
      })
    ));
  }

  autoButtonClick() {
    this.setState({autoplay: !this.state.autoplay});
  }
  
  handleTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.search}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
             <div><VideoPlayer video={this.state.currentVideo} autoplay={this.state.autoplay}/></div>
          </div>
          <div className="col-md-5">
            <AutoPlay autoButtonClick={this.autoButtonClick} />
            <div>
              <VideoList 
                videos={this.state.videos}
                handleTitleClick={this.handleTitleClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
