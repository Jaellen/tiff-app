var React = require('react');
var TiffAPI = require('TiffAPI');

var Featured = React.createClass({
  propTypes: {
    isLoadingFeatured: React.PropTypes.bool.isRequired
  },
  render: function () {
    var {
      isLoadingFeatured,
      featuredMovie,
      errorMessage,
    } = this.props;
    
    if (typeof errorMessage === 'string') {
      console.log("Error: " + errorMessage);
      return (
        <div className="featured">
          <h3>Oops! Something went wrong, we're working on it</h3>
        </div>
      ) 
    }
    else if (isLoadingFeatured) {
      return (
        <div className="featured">
          <h3>Loading...</h3>
        </div>
      )
    }
    else {
      var backgroundStyle = {
        background: `url(${featuredMovie.imgUrl})`,
        backgroundPosition: '0 40%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '450px' 
      };
      return (
        <div className="featured">
          <div style={backgroundStyle}> 
            <h1><span className="text-block">{featuredMovie.title}</span></h1>
            <h3><span className="text-block">{featuredMovie.caption}</span></h3>
            <button className="button">+ MY LIST</button>
          </div>
        </div>
      )  
    } 
  }
});

module.exports = Featured;
