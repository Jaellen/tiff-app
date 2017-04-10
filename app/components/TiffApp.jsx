var React = require('react');
var Nav = require('Nav');
var Featured = require('Featured');
var Browse = require('Browse');
var TiffAPI = require('TiffAPI');

var TiffApp = React.createClass({
  getInitialState: function () {
    return {
      isLoadingFeatured: true,
      isLoadingBrowse: false,
      isMovieBriefActive: false,
      movieBriefId: undefined
    }
  },
  getFeaturedMovie: function () {
    this.setState({
      errorMessage: undefined,
      featuredMovie: undefined
    });

    TiffAPI.getFeaturedMovie()
      .then((movie) => {
        this.setState({
          isLoadingFeatured: false,
          featuredMovie: movie
        });
      }, (err) => {
        this.setState({
          isLoadingFeatured: false,
          errorMessage: err.message
        });
      });
  },
  componentDidMount: function () {
    this.getFeaturedMovie();
  },
  setMovieBrief: function (movieId) {
    if (this.state.isMovieBriefActive) {
      this.setState({
        isMovieBriefActive: false,
        movieBriefId: undefined 
      });
    }
    else if (!this.state.isMovieBriefActive) {
      this.setState({
        isMovieBriefActive: true,
        movieBriefId: movieId
      });
    } 
  },
  render: function () {
    var {
      isLoadingFeatured,
      featuredMovie,
      isMovieBriefActive,
      movieBriefId
    } = this.state;

    return (
      <div className="tiff-app">
        <Nav/>
        <Featured featuredMovie={featuredMovie} 
                  isLoadingFeatured={isLoadingFeatured}/>
                
        <Browse   setMovieBrief={this.setMovieBrief} 
                  isMovieBriefActive={isMovieBriefActive}
                  movieBriefId={movieBriefId}/>
      </div>
    );
  }
});

module.exports = TiffApp;

