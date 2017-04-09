var React = require('react');

var MovieCard = React.createClass({
  render: function () {
    var {title, imgUrl} = this.props;
    var backgroundStyle = {
      background: `url(${imgUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }

    return (
      <div className="movie-card" style={backgroundStyle}>
        <h4><span className="text-block">{title}</span></h4>
      </div>
    );
  }
});

module.exports = MovieCard;
