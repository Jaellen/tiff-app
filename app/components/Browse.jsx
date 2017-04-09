var React = require('react');
var Category = require('Category');
var MovieBrief = require('MovieBrief');

var Browse = React.createClass({
  getInitialState: function () {
    return {
      isMovieBriefActive: false,
      movieBriefId: undefined
    };
  },
  setMovieBrief: function (movieId) {
    if (this.state.isMovieBriefActive) {
      this.setState({
        isMovieBriefActive: false,
        movieBriefId: undefined 
      });
    }
    else if (!this.state.isMovieBriefActive) {
      this.setState({
        isMovieBriefActive: true,
        movieBriefId: movieId
      });
    } 
  },
  render: function () {
    
    return (
      <div className="browse">
        <Category category="Science Fiction" 
                  setMovieBrief={this.setMovieBrief} 
                  isMovieBriefActive={this.state.isMovieBriefActive}/>
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
