var React = require('react');
var Category = require('Category');
var MovieBrief = require('MovieBrief');

var Browse = React.createClass({
  render: function () {
    var {
      setMovieBrief, 
      isMovieBriefActive,
      movieBriefId
    } = this.props;

    return (
      <div className="browse">
        <Category category="Science Fiction" 
                  setMovieBrief={setMovieBrief} 
                  isMovieBriefActive={isMovieBriefActive}
                  movieBriefId={movieBriefId}/>
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
