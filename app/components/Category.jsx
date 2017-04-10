var React = require('react');
var TiffAPI = require('TiffAPI');
var MovieCard = require('MovieCard'); 

var Category = React.createClass({ 
  propTypes: {
    setMovieBrief: React.PropTypes.func.isRequired,
    isMovieBriefActive: React.PropTypes.bool.isRequired
  },
  getInitialState: function () {
    return {
      isMoviesLoading: true,
      errorMessage: undefined
    }
  },
  getMoviesArray: function(category) {
    this.setState({
      isMoviesLoading: true,
      errorMessage: undefined,
      moviesArray: undefined
    });
    
    TiffAPI.getMoviesArray(category)
      .then((moviesArray) => {
        this.setState({
          isMoviesLoading: false,
          moviesArray: moviesArray,
        });
      }, (err) => {
        this.setState({
          isMoviesLoading: false,
          errorMessage: err.message
        });
      });
  },
  componentDidMount: function () {
    this.getMoviesArray(this.props.category);
  },
  render: function () {
    var { 
      category,
      setMovieBrief,
      isMovieBriefActive,
    } = this.props;

    var { 
      isMoviesLoading,
      moviesArray,
      errorMessage
    } = this.state;

    if (errorMessage) {
      console.log("Error: ", errorMessage);
      <div className="category">
        <div>Oops! Something went wrong, we're looking into it...</div>
      </div>
    }
    else if (isMoviesLoading) {
      return (
        <div className="category">
          <div>Loading...</div>
        </div>
      )
    }
    else if (!isMoviesLoading) {
      return (
        <div className="category">
          <div className="category-title">{category}</div> 
          <div className="row expanded">
            <div className="small-2 column">
              <MovieCard movie={moviesArray[0]} 
                         category={category}
                         setMovieBrief={setMovieBrief}
                         isMovieBriefActive={isMovieBriefActive}/>
            </div>
            <div className="small-2 column">
              <MovieCard movie={moviesArray[1]} 
                         category={category}
                         setMovieBrief={setMovieBrief}
                         isMovieBriefActive={isMovieBriefActive}/>
            </div>
            <div className="small-2 column">
              <MovieCard movie={moviesArray[2]} 
                         category={category}
                         setMovieBrief={setMovieBrief}
                         isMovieBriefActive={isMovieBriefActive}/>
            </div>
            <div className="small-2 column">
              <MovieCard movie={moviesArray[3]} 
                         category={category}
                         setMovieBrief={setMovieBrief}
                         isMovieBriefActive={isMovieBriefActive}/>
            </div>
            <div className="small-2 column end">
              <MovieCard movie={moviesArray[4]} 
                         category={category}
                         setMovieBrief={setMovieBrief}
                         isMovieBriefActive={isMovieBriefActive}/>
            </div>
          </div>
        </div>
      );
    }
  }
});

module.exports = Category;
