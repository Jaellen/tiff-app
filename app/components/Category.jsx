var React = require('react');
var TiffAPI = require('TiffAPI');

var MovieCard = require('MovieCard'); 

var Category = React.createClass({ 
  getInitialState: function () {
    return {
      isLoading: false 
    }
  },
  getMovieArray: function(category) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      title: undefined,
      imageUrl: undefined
    });
    
    TiffAPI.getMovieArray(category)
      .then((moviesArray) => {
        this.setState({
          title: moviesArray[0].title,
          imgUrl: moviesArray[0].imgUrl,
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
    var {category} = this.props;
    var {
      isLoading, 
      title,
      imgUrl,
      errorMessage
    } = this.state;

    function renderMovieCard () {
      if (isLoading) {
        return <h5>Loading...</h5>
      }
      else if (title && imgUrl) {
        return <MovieCard title={title} imgUrl={imgUrl}/>
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
        <div className="row expanded">
          <div className="small-2 column">
            {renderMovieCard()}
            {renderError()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Category;
