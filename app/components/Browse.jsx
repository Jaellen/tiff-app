var React = require('react');

var Category = require('Category');
var MovieBrief = require('MovieBrief');

var Browse = React.createClass({
  render: function () {
    
    return (
      <div className="browse">
        <Category category="Science Fiction"/>
        <MovieBrief/>
      </div>
    )
  }
});

module.exports = Browse;

/*  
        <Category category="Documentary"/>
        <Category category="History"/>
        <Category category="Drama"/>

*/
