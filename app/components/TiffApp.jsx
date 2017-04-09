var React = require('react');

var Nav = require('Nav');
var Featured = require('Featured');
var Browse = require('Browse');

var TiffApp = React.createClass({
  render: function () {
    return (
      <div className="tiff-app">
        <Nav/>
        <Browse/>
      </div>
    );
  }
});

module.exports = TiffApp;

/* <Featured/> */
