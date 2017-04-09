var React = require('react');
var MovieBrief = require('MovieBrief');

var MovieCard = React.createClass({
  propTypes: {
    setMovieBrief: React.PropTypes.func.isRequired,
    isMovieBriefActive: React.PropTypes.bool.isRequired,
  },
  handleClick: function (id) {
    this.props.setMovieBrief(id);
  },
  render: function () {
    var {movie, isMovieBriefActive} = this.props;
    var backgroundStyle = {
      background: `url(${movie.imgUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    if (isMovieBriefActive) {
      return (
        <div>
          <div className="movie-card" style={backgroundStyle}>
            <h4><span className="text-block">{movie.title}</span></h4>
            <button className="button" onClick={this.handleClick}>V</button>
          </div>
          <MovieBrief movie={movie}/>
        </div> 
        )  
      }
      else {
        return (
          <div className="movie-card" style={backgroundStyle}>
            <h4><span className="text-block">{movie.title}</span></h4>
            <button className="button" onClick={this.handleClick}>V</button>
          </div>
        )
      }
  }
});

module.exports = MovieCard;
