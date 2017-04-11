var React = require('react');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="nav row">
        
        <div className="small-2 small-offset-4 column">
          <div className="logo-movies">
            <img src={'https://s3.ca-central-1.amazonaws.com/tiff-app/tiff-movies-white.png'} 
                 alt={'TIFF Movies'} height="65px" width="65px"/>
          </div>
        
          <div className="line-break">
            <span>|</span>
          </div>
        
          <div className="logo-events">
            <img src={'https://s3.ca-central-1.amazonaws.com/tiff-app/tiff-events-white.png'} 
                 alt={'TIFF Events'}/>
          </div>
        </div>

        <div className="nav-icons">
          <span className="glyphicon glyphicon-user"></span>
        </div>

        <div className="nav-icons">
          <span className="glyphicon glyphicon-bookmark"></span>
        </div>
      
        <div className="nav-icons user">
          <span className="glyphicon glyphicon-search"></span>
        </div>
     
      </div>
    );
  }
});

module.exports = Nav;
