var React = require('react');
var TiffAPI = require('TiffAPI');

var Featured = React.createClass({
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
      imgUrl: undefined
    });

    TiffAPI.getFeaturedMovie()
      .then((info) => {
        this.setState({
          isLoading: false,
          title: info.title,
          caption: info.caption,
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
      imgUrl, 
      errorMessage
    } = this.state;
    
    function renderMovie () {
      if (isLoading) {
        return <h3>Loading...</h3>
      }
      else {
        var backgroundStyle = {
          background: `url(${imgUrl})`,
          backgroundPosition: '0 40%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '450px' 
        };
        return (
          <div style={backgroundStyle}> 
            <h1><span className="text-block">{title}</span></h1>
            <h3><span className="text-block">{caption}</span></h3>
            <button className="button">+ MY LIST</button>
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
      <div className="featured">
        {renderMovie()}
        {renderError()}
      </div> 
    );
  }
});

module.exports = Featured;
