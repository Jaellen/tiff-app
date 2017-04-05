var axios = require('axios');

const TIFF_URL = 'http://cdn.contentful.com/spaces/22n7d68fswlw/entries?access_token=e12c44b6ab40cf8ac74b544a662664b1b3ca3da7f73db41507102a95ff47f050&content_type=object&fields.seasonId%5Bin%5D=Year-round%20Programming%202016&limit=10.json';

module.exports = {
  getFeaturedMovie: function () {
    var requestUrl = TIFF_URL;
    
    return axios.get(requestUrl)
      .then((res) => {
        if (res.data.sys.type === "Error" && res.data.message) {
          throw new Error(res.data.message); 
        }
        else {
          return res.data.items[0].fields.title;
        }
      }, (res) => {
        throw new Error(res.data.message);
      });
  }
}
