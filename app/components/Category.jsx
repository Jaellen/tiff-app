var React = require('react');

var MovieCard = require('MovieCard'); 

var Category = React.createClass({
  render: function () {
    return (
      <div>
        Category Name
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
      </div>
    );
  }
});

module.exports = Category;
