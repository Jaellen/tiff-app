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
          const ImgId = res.data.items[0].fields.banner.sys.id; 
          const imgUrl = res.data.includes.Asset
                          .filter((el) => { return el.sys.id === ImgId})[0]
                          .fields.file.url.slice(2);
          return {
            title: res.data.items[0].fields.title,
            caption: res.data.items[0].fields.pitch,
            imgUrl: imgUrl
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
            caption: res.data.items[1].fields.pitch,
            year: res.data.items[1].fields.year,
            rating: res.data.items[1].fields.rating,
            runtime: res.data.items[1].fields.runtime.toString(),
            contentTags: res.data.items[1].fields.contentTags.join(" + "),
            notes: res.data.items[1].fields.notes,
            imgUrl: imgUrl        
          }
        }
      }, (res) => {
        throw new Error(res.data.message);
      });
  },
  getMovieCard: function () {
    var requestUrl = TIFF_URL;
    
    return axios.get(requestUrl)
      .then((res) => {
        if (res.data.sys.type === "Error" && res.data.message) {
          throw new Error(res.data.message); 
        }
        else {
          const ImgId = res.data.items[5].fields.banner.sys.id; 
          const imgUrl = res.data.includes.Asset
                          .filter((el) => { return el.sys.id === ImgId})[0]
                          .fields.file.url.slice(2);
          return {
            title: res.data.items[5].fields.title,
            imgUrl: imgUrl
          }        
        }
      }, (res) => {
        throw new Error(res.data.message);
      });
  },
  getMovieArray: function (category) {
    var requestUrl = TIFF_URL;
    
    return axios.get(requestUrl)
      .then((res) => {
        if (res.data.sys.type === "Error" && res.data.message) {
          throw new Error(res.data.message);
        }
        else {
          return res.data.items
            .filter((el) => { return el.fields.contentTags }) //check for existence of contentTags
            .filter((el) => { return el.fields.contentTags.includes(category) })
            .filter((el) => { return el.fields.event === false })
            .map((el, index) => {
              const ImgId = res.data.items[index].fields.banner.sys.id; 
              const imgUrl = res.data.includes.Asset
                .filter((el) => { return el.sys.id === ImgId })[0]
                .fields.file.url.slice(2);
              return {
                title: el.fields.title,
                caption: el.fields.pitch,
                year: el.fields.year,
                rating: el.fields.rating,
                runtime: el.fields.runtime.toString(),
                contentTags: el.fields.contentTags.join(" + "),
                notes: el.fields.notes,
                imgUrl: imgUrl        
              }
            });
        }
      }, (res) => {
        throw new Error(res.data.message);
      });
  }
}
