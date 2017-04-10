var axios = require('axios');

const TIFF_URL = 'http://cdn.contentful.com/spaces/22n7d68fswlw/entries?access_token=e12c44b6ab40cf8ac74b544a662664b1b3ca3da7f73db41507102a95ff47f050&content_type=object&fields.seasonId%5Bin%5D=Year-round%20Programming%202016&limit=10.json';

const TIFF_URL2 = 'http://cdn.contentful.com/spaces/22n7d68fswlw/entries?access_token=e12c44b6ab40cf8ac74b544a662664b1b3ca3da7f73db41507102a95ff47f050&content_type=object&fields.seasonId%5Bin%5D=Year-round%20Programming%202016&limit=100.json';

module.exports = {
  getFeaturedMovie: function () {
    var requestUrl = TIFF_URL;
    
    return axios.get(requestUrl)
      .then((res) => {
        if (res.data.sys.type === "Error" && res.data.message) {
          throw new Error(res.data.message); 
        }
        else {
          const ImgId = res.data.items[91].fields.banner.sys.id; 
          const imgUrl = res.data.includes.Asset
                          .filter((el) => { return el.sys.id === ImgId})[0]
                          .fields.file.url.slice(2);
          return {
            title: res.data.items[91].fields.title,
            caption: res.data.items[91].fields.pitch
                      .replace("</em>", "").replace("<em>", "")
                      .replace("</p>", "").replace("<p>", "") 
                      .replace("</strong>", "").replace("<strong>", ""),
            imgUrl: `http://${imgUrl}`,
            movieId: res.data.items[91].sys.id
          }        
        }
      }, (res) => {
        throw new Error(res.data.message);
      });
  },
  getMovieBrief: function () {
    var requestUrl = TIFF_URL;
    
    return axios.get(requestUrl)
      .then((res) => {
        if (res.data.sys.type === "Error" && res.data.message) {
          throw new Error(res.data.message); 
        }
        else { 
          const ImgId = res.data.items[1].fields.banner.sys.id; 
          const imgUrl = res.data.includes.Asset
                          .filter((el) => { return el.sys.id === ImgId})[0]
                          .fields.file.url.slice(2);
          return {
            title: res.data.items[1].fields.title,
            caption: res.data.items[1].fields.pitch
                      .replace("</em>", "").replace("<em>", "")
                      .replace("</p>", "").replace("<p>", "") 
                      .replace("</strong>", "").replace("<strong>", ""),
            year: res.data.items[1].fields.year,
            rating: res.data.items[1].fields.rating,
            runtime: res.data.items[1].fields.runtime.toString(),
            contentTags: res.data.items[1].fields.contentTags.join(" + "),
            notes: res.data.items[1].fields.notes
                      .replace("</em>", "").replace("<em>", "")
                      .replace("</p>", "").replace("<p>", "") 
                      .replace("</strong>", "").replace("<strong>", ""),
            imgUrl: `http://${imgUrl}`,
            movieId: res.data.items[1].sys.id
          }
        }
      }, (res) => {
        throw new Error(res.data.message);
      });
  },
  getMoviesArray: function (category) {
    var requestUrl = TIFF_URL2;
    
    return axios.get(requestUrl)
      .then((res) => {
        if (res.data.sys.type === "Error" && res.data.message) {
          throw new Error(res.data.message);
        }
        else {
          return res.data.items
            .filter((el) => { return el.fields.contentTags }) //check for existence of contentTags
            .filter((el) => { return el.fields.event === false }) //remove events
            .filter((el) => { return el.fields.contentTags.includes(category) })
            .map((el, index) => {
              const ImgId = el.fields.banner.sys.id; 
              const imgUrl = res.data.includes.Asset
                .filter((el) => { return el.sys.id === ImgId })[0]
                .fields.file.url.slice(2);
              return {
                title: el.fields.title,
                caption: el.fields.pitch
                      .replace("</em>", "").replace("<em>", "")
                      .replace("</p>", "").replace("<p>", "") 
                      .replace("</strong>", "").replace("<strong>", ""),
                year: el.fields.year,
                rating: el.fields.rating,
                runtime: el.fields.runtime.toString(),
                contentTags: el.fields.contentTags.join(" + "),
                notes: el.fields.notes
                      .replace("</em>", "").replace("<em>", "")
                      .replace("</p>", "").replace("<p>", "") 
                      .replace("</strong>", "").replace("<strong>", ""),
                imgUrl: `http://${imgUrl}`,        
                movieId: el.sys.id
              }
            });
        }
      }, (res) => {
        throw new Error(res.data.message);
      });
  }
}
