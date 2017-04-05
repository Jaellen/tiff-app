var React = require('react');

var Category = require('Category');
var MovieBrief = require('MovieBrief');

var Browse = React.createClass({
  render: function () {
    return (
      <div className="browse">
        Browse Section
        <Category/>
        <Category/>
        <Category/>
        <MovieBrief/>
      </div>
    )
  }
});

module.exports = Browse;
