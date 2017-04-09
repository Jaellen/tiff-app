var React = require('react');

var MovieBrief = React.createClass({ 
  render: function () { 
    var { movie } = this.props;
    var backgroundStyle = {
      background: `url(${movie.imgUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundSize: 'contain',
      height: '500px' 
    }
    
    return (
      <div className="movie-brief">
        <div className="row"> 
          <div className="small-5 column">
            <h1><span className="text-block">{movie.title}</span></h1>
            <h4><span className="text-block">{movie.year} | {movie.rating} | {movie.runtime}min</span></h4>
            <br></br>
            <h5><span className="text-block">{movie.caption}</span></h5>
            <br></br>
            <h5><span className="text-block">This movie has: {movie.contentTags}</span></h5>
            <br></br>
            <button className="button">MORE INFO</button>
            <button className="button">+ MY LIST</button>
          </div>
          
          <div style={backgroundStyle}></div>
        </div>
      </div>
    );
  }
});

module.exports = MovieBrief;
