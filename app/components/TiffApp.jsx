var React = require('react');
var Nav = require('Nav');
var Featured = require('Featured');
var Browse = require('Browse');
var TiffAPI = require('TiffAPI');

var TiffApp = React.createClass({
  getInitialState: function () {
    return {
      isLoadingFeatured: true,
      isMovieBriefActive: false,
      movieBriefCategory: undefined,
      movieBrief: undefined,
      categoryArray: [
        "Science Fiction",
        "Documentary",
        "History",
        "Drama",
        "Crime",
        "Female Experience"
      ]
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
  setMovieBrief: function (category, movie) {
    if (this.state.isMovieBriefActive) {
      this.setState({
        isMovieBriefActive: false,
        movieBriefCategory: undefined,
        movieBrief: undefined
      });
    }
    else if (!this.state.isMovieBriefActive) {
      this.setState({
        isMovieBriefActive: true,
        movieBriefCategory: category,
        movieBrief: movie
      });
    } 
  },
  componentDidMount: function () {
    this.getFeaturedMovie();
  },
  render: function () {
    var {
      isLoadingFeatured,
      featuredMovie,
      isMovieBriefActive,
      movieBriefCategory,
      movieBrief,
      categoryArray
    } = this.state;

    return (
      <div className="tiff-app">
        <Nav/>
        <Featured featuredMovie={featuredMovie} 
                  isLoadingFeatured={isLoadingFeatured}/>
                
        <Browse   setMovieBrief={this.setMovieBrief} 
                  isMovieBriefActive={isMovieBriefActive}
                  movieBriefCategory={movieBriefCategory}
                  categoryArray={categoryArray}
                  movieBrief={movieBrief}/>
      </div>
    );
  }
});

module.exports = TiffApp;
