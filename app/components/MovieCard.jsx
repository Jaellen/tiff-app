var React = require('react');

var MovieCard = React.createClass({
  render: function () {
    var {title, imgUrl} = this.props;
    var backgroundStyle = {
      background: `url('http://${imgUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    }

    return (
      <div className="movie-card" style={backgroundStyle}>
        <h4>{title}</h4>
      </div>
    );
  }
});

module.exports = MovieCard;
