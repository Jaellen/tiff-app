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
      title: undefined
    });

    TiffAPI.getFeaturedMovie()
      .then((title) => {
        this.setState({
          isLoading: false,
          title: title
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
    var {isLoading, title, errorMessage} = this.state;
    
    function renderMovie () {
      if (isLoading) {
        return <h3>Loading...</h3>
      }
      else {
        return <h3>{title}</h3> 
      }
    }
    
    function renderError () {
      if (typeof errorMessage === 'string') {
        return <h3>Error: {errorMessage}</h3>
      }
    }

    return (
      <div className="featured">
        {renderMovie()}
        {renderError()}
        <h1>Mission to Mars</h1>
        <p> A movie about travelling to mars and discovering human will and perseverence...</p>
        <button className="button">+</button>
      </div> 
    );
  }
});

module.exports = Featured;
