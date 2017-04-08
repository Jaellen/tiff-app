var React = require('react');
var TiffAPI = require('TiffAPI');

var MovieCard = require('MovieCard'); 

var Category = React.createClass({ 
  getInitialState: function () {
    return {
      isLoading: true
    };
  },
  getMovieArray: function(category) {
    TiffAPI.getMovieArray(category)
      .then((moviesArray) => {
        this.setState({
          isLoading: false,
          movie1: moviesArray[0],
          movie2: moviesArray[1],
          movie3: moviesArray[2],
          movie4: moviesArray[3],
          movie5: moviesArray[4]
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
    var {category} = this.props;
    var {
      isLoading,
      movie1,
      movie2,
      movie3,
      movie4,
      movie5
    } = this.state;
    
    function renderError () {
      if (typeof errorMessage === 'string') {
        console.log("Error: " + errorMessage);
        return <h3>Oops! Something went wrong, we're working on it ;)</h3>
      }
    }

    return (
      <div className="category">
        <div className="category-title">{category}</div>
        <div className="row expanded">
          <div className="small-2 column">
            <MovieCard movieInfo={movie1}/>
          </div>
        </div>
      </div>
    );
  }
});

/*
          <div className="small-2 column">
            <MovieCard movieInfo={movie2}/>
          </div>
          <div className="small-2 column">
            <MovieCard movieInfo={movie3}/>
          </div>
          <div className="small-2 column">
            <MovieCard movieInfo={movie4}/>
          </div>
          <div className="small-2 column end">
            <MovieCard movieInfo={movie5}/>
          </div>
*/

module.exports = Category;
