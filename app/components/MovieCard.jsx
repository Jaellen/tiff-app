var React = require('react');

var MovieCard = React.createClass({
  render: function () {
    var {movie} = this.props;
    var backgroundStyle = {
      background: `url(${movie.imgUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    return (
      <div className="movie-card" style={backgroundStyle}>
        <h4><span className="text-block">{movie.title}</span></h4>
      </div>
    );
  }
});

module.exports = MovieCard;
