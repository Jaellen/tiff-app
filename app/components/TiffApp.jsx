var React = require('react');

var Nav = require('Nav');
var Featured = require('Featured');
var Browse = require('Browse');

var TiffApp = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <Featured/>
        <Browse/>
      </div>
    );
  }
});

module.exports = TiffApp;
