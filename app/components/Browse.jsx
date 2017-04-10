var React = require('react');
var Category = require('Category');
var MovieBrief = require('MovieBrief');

var Browse = React.createClass({
  render: function () {
    var {
      categoryArray,
      setMovieBrief, 
      isMovieBriefActive,
      movieBriefCategory,
      movieBrief
    } = this.props;

    if(!isMovieBriefActive) {
      return (
        <div className="browse">
          <Category category={categoryArray[0]}
            setMovieBrief={setMovieBrief} 
            isMovieBriefActive={isMovieBriefActive}/>        
        </div>
      )
    }
    else if(isMovieBriefActive) {
      return (
        <div className="browse">
          <Category category={categoryArray[0]}
            setMovieBrief={setMovieBrief} 
            isMovieBriefActive={isMovieBriefActive}
            movieBrief={movieBrief}/>        
          <MovieBrief movie={movieBrief}/>
        </div>
      )
    }
  }
});

module.exports = Browse;
