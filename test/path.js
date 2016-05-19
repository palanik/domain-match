var expect = require('chai').expect;
var dm = require('../index');

describe("Path", function() {
  before(function() {
  });

  after(function() {
  });

  describe('Prefix', function() {
    it("Exact", function() {
      expect(dm('*.abc.com/prefix/path', 'http://abc.com/prefix/path')).to.equal(true);
    });

    it("Partial Match", function() {
      expect(dm('*.abc.com/prefix/path', 'http://abc.com/prefix/path/filename.ext')).to.equal(true);
    });

  });

  describe('Prefix - Fail', function() {
    it("Path Mismatch", function() {
      expect(dm('*.abc.com/prefix/path', 'http://abc.com/abc/def')).to.equal(false);
    });

    it("domain mismatch", function() {
      expect(dm('*.abc.com/prefix/path', 'http://cba.com/prefix/path')).to.equal(false);
    });

    it("no path", function() {
      expect(dm('*.abc.com/prefix/path', 'http://abc.com')).to.equal(false);
    });

    it("slash only", function() {
      expect(dm('*.abc.com/prefix/path', 'http://abc.com/')).to.equal(false);
    });

    it("partial path", function() {
      expect(dm('*.abc.com/prefix/path', 'http://abc.com/prefix')).to.equal(false);
    });
  });

  describe('Star domain', function() {
    it("Exact", function() {
      expect(dm('*/prefix/path', 'http://abc.com/prefix/path')).to.equal(true);
    });

    it("Partial Match", function() {
      expect(dm('*/prefix/path', 'http://abc.com/prefix/path/filename.ext')).to.equal(true);
    });

    it("Path Mismatch", function() {
      expect(dm('*/prefix/path', 'http://abc.com/abc/def')).to.equal(false);
    });
  });

});