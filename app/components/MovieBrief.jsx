var React = require('react');

var MovieBrief = React.createClass({
  render: function () {
    return (
      <div className="movie-brief">
        <h2>The Arrival</h2>
        <h4>2016</h4>
        <h4>2:19 hr</h4>
        <h4>PG14</h4>
        <h4>Director: Denis Villeneuve</h4>
      </div>
    );
  }
});

module.exports = MovieBrief;
