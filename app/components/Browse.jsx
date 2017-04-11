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


    function renderMovieBrief (category) {
      if (isMovieBriefActive && (category === movieBriefCategory)) {
        return (
          <MovieBrief movie={movieBrief}/>
        )
      }
    }

    return (
      <div className="browse">
        <Category category={categoryArray[0]}
          setMovieBrief={setMovieBrief} 
          isMovieBriefActive={isMovieBriefActive}/>
          { renderMovieBrief(categoryArray[0]) }
          
        <Category category={categoryArray[1]}
          setMovieBrief={setMovieBrief} 
          isMovieBriefActive={isMovieBriefActive}/>        
          { renderMovieBrief(categoryArray[1]) }

        <Category category={categoryArray[2]}
          setMovieBrief={setMovieBrief} 
          isMovieBriefActive={isMovieBriefActive}/>        
          { renderMovieBrief(categoryArray[2]) }

        <Category category={categoryArray[3]}
          setMovieBrief={setMovieBrief} 
          isMovieBriefActive={isMovieBriefActive}/>        
          { renderMovieBrief(categoryArray[3]) }
          
      <Category category={categoryArray[4]}
          setMovieBrief={setMovieBrief} 
          isMovieBriefActive={isMovieBriefActive}/>        
          { renderMovieBrief(categoryArray[4]) }
  
      <Category category={categoryArray[5]}
          setMovieBrief={setMovieBrief} 
          isMovieBriefActive={isMovieBriefActive}/>        
          { renderMovieBrief(categoryArray[5]) }
      
      </div>
    )
  }
});

module.exports = Browse;
