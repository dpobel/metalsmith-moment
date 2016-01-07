var moment = require('moment');

module.exports = function (opts) {
    return function (files, metalsmith, done) {
        Object.keys(files).forEach(function (filePath) {
            var file = files[filePath];

            opts.forEach(function (property) {
                if ( file[property] ) {
                    file[property] = moment(file[property]);
                }
            });
        });
        done();
    };
};
