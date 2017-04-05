var React = require('react');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="nav row">

        <div className="small-7 columns">
          <img alt={'TIFF'} height={'50px'} width={'50px'} />
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

/* "https://www.thestar.com/content/dam/thestar/entertainment/movies/2009/08/21/new_logo_reflects_a_film_fest_thats_going_back_to_the_people/tifflogo.jpeg" */
