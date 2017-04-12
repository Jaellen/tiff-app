var React = require('react');
var MovieBrief = require('MovieBrief');

var MovieCard = React.createClass({
  propTypes: {
    setMovieBrief: React.PropTypes.func.isRequired,
    isMovieBriefActive: React.PropTypes.bool.isRequired,
  },
  handleClick: function () {
    this.props.setMovieBrief(this.props.category, this.props.movie);
  },
  render: function () {
    var {movie, isMovieBriefActive} = this.props;
    var backgroundStyle = {
      background: `url(${movie.imgUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    return (
      <div>
        <div className="movie-card" style={backgroundStyle}>
          <h4><span className="text-block">{movie.title}</span></h4>
          <div className="expand" onClick={this.handleClick}>
            <span className="expand-arrow">
              <img src={'https://s3.ca-central-1.amazonaws.com/tiff-app/arrow-down.png'} 
                alt={'v'} width='20px' ></img>
            </span>
          </div>
        </div>
      </div> 
    )     
  }
});

module.exports = MovieCard;
