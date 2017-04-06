var React = require('react');
var TiffAPI = require('TiffAPI');

var MovieBrief = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  getMovieInfo: function () {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      title: undefined,
      caption: undefined,
      year: undefined,
      rating: undefined,
      runtime: undefined,
      contentTags: undefined,
      notes: undefined,
      imgUrl: undefined
    });

    TiffAPI.getMovieBrief()
      .then((info) => {
        this.setState({
          isLoading: false,
          title: info.title,
          caption: info.caption,
          year: info.year,
          rating: info.rating,
          runtime: info.runtime,
          contentTags: info.contentTags,
          notes: info.notes,
          imgUrl: info.imgUrl 
        });
      }, (err) => {
        this.setState({
          isLoading: false,
          errorMessage: err.message
        });
      });
  },
  componentDidMount: function () {
    this.getMovieInfo();
  },
  render: function () { 
    var {
      isLoading, 
      title, 
      caption,
      year,
      rating,
      runtime,
      contentTags,
      notes,
      imgUrl, 
      errorMessage
    } = this.state;
    
    function renderMovieBrief () {
      if (isLoading) {
        return <h3>Loading...</h3>
      }
      else {
        var backgroundStyle = {
          background: `url('http://${imgUrl}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          backgroundSize: 'contain',
          height: '500px' 
        };
        return (
          <div className="row"> 
            <div className="small-5 column">
              <h1><span className="text-block">{title}</span></h1>
              <h4><span className="text-block">{year} | {rating} | {runtime}min</span></h4>
              <br></br>
              <h5><span className="text-block">{caption}</span></h5>
              <br></br>
              <h5><span className="text-block">This movie has: {contentTags}</span></h5>
              <br></br>
              <button className="button">+ MY LIST</button>
            </div>
          
            <div style={backgroundStyle}></div>
          </div>
        )
      }
    }
    
    function renderError () {
      if (typeof errorMessage === 'string') {
        console.log("Error: " + errorMessage);
        return <h3>Oops! Something went wrong, we're working on it ;)</h3>
      }
    }
    
    return (
      <div className="movie-brief">
        {renderMovieBrief()}
        {renderError()}
      </div>
    );
  }
});

module.exports = MovieBrief;
