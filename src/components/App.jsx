
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      autoplay: false,
      videoPage: 0,
      pageRender: exampleVideoData
    };
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.search = this.search.bind(this);
    this.autoButtonClick = this.autoButtonClick.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.search('react tutorials');
  }

  search(query) {
    var options = {
      query: query,
      max: 20
    };
    this.props.searchYouTube(options, (incoming) => (
      this.setState( {
        videos: incoming,
        currentVideo: incoming[0],
        pageRender: incoming.slice(0, 5),
        videoPage: 0
      })
    ));
  }

  handlePageChange(event) {
    this.setState(
      {videoPage: event.target.value},
      () => { 
        this.setState({
          pageRender: this.state.videos.slice(this.state.videoPage * 5, (this.state.videoPage * 5) + 5)
        });
      });
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
            <div>
              Toggle AutoPlay
              <AutoPlay autoButtonClick={this.autoButtonClick} /> 
            </div>
            <div>
              <VideoList 
                videos={this.state.pageRender}
                handleTitleClick={this.handleTitleClick}/>
            </div>
            <select value={this.state.videoPage} onChange={this.handlePageChange}>
              <option value="0">Page 1</option>
              <option value="1">Page 2</option>
              <option value="2">Page 3</option>
              <option value="3">Page 4</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
