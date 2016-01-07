/* global describe, it */
var msMoment = require('../moment'),
    moment = require('moment'),
    assert = require('assert'),
    metalsmith = false;

describe('Metalsmith date', function () {
    var properties = ['created', 'updated'],
        created = '2012-01-05',
        updated = '2013-01-05';

    it('should create moment.js objects', function () {
        var files = {
                "file1": {
                    "created": created,
                    "updated": updated,
                },
                "file2": {
                    "created": created,
                    "updated": updated,
                },
            };

        msMoment(properties)(files, metalsmith, function () {
            assert.ok(files.file1.created.isSame(moment(created)));
            assert.ok(files.file1.updated.isSame(moment(updated)));

            assert.ok(files.file2.created.isSame(moment(created)));
            assert.ok(files.file2.updated.isSame(moment(updated)));
        });
    });

    it('should handle missing field', function () {
        var file3 = {},
            files = {
                "file1": {
                    "created": created,
                },
                "file2": {
                    "updated": updated,
                },
                "file3": file3,
            };

        msMoment(properties)(files, metalsmith, function () {
            assert.ok(files.file1.created.isSame(moment(created)));

            assert.ok(files.file2.updated.isSame(moment(updated)));

            assert.equal(0, Object.keys(files.file3).length);
            assert.strictEqual(file3, files.file3);
        });
    });
});
