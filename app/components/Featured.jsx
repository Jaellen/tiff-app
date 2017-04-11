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
        backgroundPosition: '0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '550px' 
      };
      return (
        <div className="featured">
          <div style={backgroundStyle}> 
            <h1>
              <span className="text-block tiff text-block-title">
                TIFF Movie of the Month:
              </span>
            </h1>
            <br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br>
            
            <button className="button">
              <span className="glyphicon glyphicon-plus"></span><span> </span>
              MY LIST
            </button>
            
            <h1><span className="text-block text-block-title">{featuredMovie.title}</span></h1>
            <h3><span className="text-block">{featuredMovie.caption}</span></h3>
          </div>
        </div>
      )  
    } 
  }
});

module.exports = Featured;
