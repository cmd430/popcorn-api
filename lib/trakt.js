const Q = require("q"),
  config = require("../config"),
  colors = require("colors/safe");

const BASE_URL = "https://api-v2launch.trakt.tv/";
let request = require("request");
request = request.defaults({
  "headers": {
    "Content-Type": "application/json",
    "trakt-api-version": 2,
    "trakt-api-key": config.traktKey
  },
  "baseUrl": BASE_URL,
  "timeout": config.webRequestTimeout * 1000
});

module.exports = {

  /* Get a single show. */
  getShow: (slug) => {
    const defer = Q.defer();
    request("shows/" + slug + "?extended=full,images", (err, res, body) => {
      if (err) {
        defer.reject(err + " with link: 'shows/" + (config.colorOutput ? colors.cyan(slug) : slug) + "?extended=full,images'");
      } else if (!body || res.statusCode >= 400) {
        defer.reject("Trakt: Could not find info on show: '" + (config.colorOutput ? colors.cyan(slug) : slug) + "'");
      } else {
        defer.resolve(JSON.parse(body));
      }
    });
    return defer.promise;
  },

  /* Get a single season of a show. */
  getSeason: (slug, season) => {
    const defer = Q.defer();
    request("shows/" + slug + "/seasons/" + season + "/?extended=full,images", (err, res, body) => {
      if (err) {
        defer.reject(err + " with link: 'shows/" + (config.colorOutput ? colors.cyan(slug) : slug) + "/seasons/" + (config.colorOutput ? colors.cyan(season) : season) + "/?extended=full,images'");
      } else if (!body || res.statusCode >= 400) {
        defer.reject("Trakt: Could not find info on show: '" + (config.colorOutput ? colors.cyan(slug) : slug) + "', season: '" + (config.colorOutput ? colors.cyan(season) : season) + "'");
      } else {
        defer.resolve(JSON.parse(body));
      }
    });
    return defer.promise;
  },

  /* Get people watching a given show. */
  getShowWatching: (slug) => {
    const defer = Q.defer();
    request("shows/" + slug + "/watching", (err, res, body) => {
      if (err) {
        defer.reject(err + " with link: 'shows/" + (config.colorOutput ? colors.cyan(slug) : slug) + "/watching'");
      } else if (!body || res.statusCode >= 400) {
        defer.reject("Trakt: Could not find watching info on: '" + (config.colorOutput ? colors.cyan(slug) : slug) + "'");
      } else {
        defer.resolve(JSON.parse(body));
      }
    });
    return defer.promise;
  }

};
