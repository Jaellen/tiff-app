var React = require('react');

var MovieCard = require('MovieCard'); 

var Category = React.createClass({
  render: function () {
    return (
      <div className="category">
        <h3>CATEGORY NAME</h3>
        <div className="row expanded">
          <div className="small-2 column">
            <MovieCard/>
          </div>
          <div className="small-2 column">
            <MovieCard/>
          </div>
          <div className="small-2 column">
            <MovieCard/>
          </div>
          <div className="small-2 column">
            <MovieCard/>
          </div>
          <div className="small-2 column end">
            <MovieCard/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Category;
