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
      isLoading: false 
    }
  },
  getMovieArray: function(category) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      movie1: undefined,
      movie2: undefined,
      movie3: undefined,
      movie4: undefined,
      movie5: undefined,
    });
    
    TiffAPI.getMovieArray(category)
      .then((moviesArray) => {
        this.setState({
          movie1: moviesArray[0],
          movie2: moviesArray[1],
          movie3: moviesArray[2],
          movie4: moviesArray[3],
          movie5: moviesArray[4],
          isLoading: false
        });
      }, (err) => {
        this.setState({
          isLoading: false,
          errorMessage: err.message
        });
      });
  },
  componentDidMount: function () {
    this.getMovieArray(this.props.category);
  },
  render: function () {
    var {
      category, 
      setMovieBrief,
      isMovieBriefActive
    } = this.props;
    
    var {
      isLoading, 
      movie1,
      movie2,
      movie3,
      movie4,
      movie5,
      errorMessage
    } = this.state;

    function renderMovieCard () {
      if (isLoading) {
        return <h5>Loading...</h5>
      }
      else if (movie1) {
        return (
          <div className="row expanded">
            <div className="small-2 column">
              <MovieCard movie={movie1} 
                         setMovieBrief={setMovieBrief}
                         isMovieBriefActive={isMovieBriefActive} />
            </div>
          </div>
        )      
      }
    }
    
    function renderError () {
      if (typeof errorMessage === 'string') { 
        console.log("Error: ", errorMessage);
        return (
          <h5>Oops! Something went wrong, we're working on it</h5>
        )
      }
    }

    return (
      <div className="category">
        <div className="category-title">{category}</div> 
          {renderMovieCard()}
          {renderError()}
      </div>
    );
  }
});

module.exports = Category;

/* 

            <div className="small-2 column">
              <MovieCard title={movie2.title} imgUrl={movie2.imgUrl}/>
            </div>
            <div className="small-2 column">
              <MovieCard title={movie3.title} imgUrl={movie3.imgUrl}/>
            </div>
            <div className="small-2 column">
              <MovieCard title={movie4.title} imgUrl={movie4.imgUrl}/>
            </div>
            <div className="small-2 column end">
              <MovieCard title={movie5.title} imgUrl={movie5.imgUrl}/>
            </div>
          </div>
*/
