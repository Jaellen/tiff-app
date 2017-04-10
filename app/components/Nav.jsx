var React = require('react');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="nav row">

        <div className="small-7 columns">
          <img src={'https://s3.ca-central-1.amazonaws.com/tiff-app/tiff.jpeg'} 
               alt={'TIFF'} height={'80px'} width={'80px'} />
        </div>

        <div className="small-2 columns">
          <button className="button">Watch Later</button>
        </div>

        <div className="small-3 columns search-field">
          <imput type="search" placeholder="Search Movies and Events"/>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
