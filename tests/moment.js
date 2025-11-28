const { describe, it } = require("node:test");
const msMoment = require("../moment");
const moment = require("moment");
const assert = require("assert");
const metalsmith = false;

describe("Metalsmith date", () => {
  const properties = ["created", "updated"];
  const created = "2012-01-05";
  const updated = "2013-01-05";

  it("should create moment.js objects", () => {
    const files = {
      file1: {
        created: created,
        updated: updated,
      },
      file2: {
        created: created,
        updated: updated,
      },
    };

    msMoment(properties)(files, metalsmith, () => {
      assert.ok(files.file1.created.isSame(moment(created)));
      assert.ok(files.file1.updated.isSame(moment(updated)));

      assert.ok(files.file2.created.isSame(moment(created)));
      assert.ok(files.file2.updated.isSame(moment(updated)));
    });
  });

  it("should handle missing field", () => {
    const file3 = {};
    const files = {
      file1: {
        created: created,
      },
      file2: {
        updated: updated,
      },
      file3: file3,
    };

    msMoment(properties)(files, metalsmith, () => {
      assert.ok(files.file1.created.isSame(moment(created)));

      assert.ok(files.file2.updated.isSame(moment(updated)));

      assert.equal(0, Object.keys(files.file3).length);
      assert.strictEqual(file3, files.file3);
    });
  });
});
