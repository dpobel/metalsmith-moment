const moment = require("moment");

module.exports = function (opts) {
  return function (files, metalsmith, done) {
    Object.keys(files).forEach(function (filePath) {
      const file = files[filePath];

      opts.forEach(function (property) {
        if (file[property]) {
          file[property] = moment(file[property]);
        }
      });
    });
    done();
  };
};
