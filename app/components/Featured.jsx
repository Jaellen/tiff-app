var React = require('react');

var Featured = React.createClass({
  render: function () {
    return (
      <div className="featured">
        <h1>Mission to Mars</h1>
        <p> A movie about travelling to mars and discovering human will and perseverence...</p>
        <button className="button">+</button>
      </div> 
    );
  }
});

module.exports = Featured;
