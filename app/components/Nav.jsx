var React = require('react');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="nav row">

        <div className="small-3 columns">
          <img src={'https://s3.ca-central-1.amazonaws.com/tiff-app/tiff-movies-white.png'} 
               alt={'TIFF'} height={'65px'} width={'65px'} />
        </div>
        <div className="small-3 columns">
          <img src={'https://s3.ca-central-1.amazonaws.com/tiff-app/tiff-events-white.png'} 
               alt={'TIFF'} height={'65px'} width={'65px'} />
        </div>
      </div>
    );
  }
});

module.exports = Nav;
