var expect = require('chai').expect;
var dm = require('../index');

describe("Wild Domain", function() {
  before(function() {
  });

  after(function() {
  });

  describe("Absolute", function() {
    it("Domain", function() {
      expect(dm('*', 'http://abc.com')).to.equal(true);
    });

    it("Domain/", function() {
      expect(dm('*', 'http://abc.com/')).to.equal(true);
    });

    it("Domain/path", function() {
      expect(dm('*', 'http://abc.com/def/ghi')).to.equal(true);
    });

    it("path", function() {
      expect(dm('*', '/def/ghi')).to.equal(true);
    });
  });

  describe('Prefix', function() {
    it("Domain", function() {
      expect(dm('*.abc.com', 'http://abc.com')).to.equal(true);
    });

    it("Domain/", function() {
      expect(dm('*.abc.com', 'http://abc.com/')).to.equal(true);
    });

    it("Domain/path", function() {
      expect(dm('*.abc.com', 'http://abc.com/def/ghi')).to.equal(true);
    });

    it("path - (fail)", function() {
      expect(dm('*.abc.com', '/def/ghi')).to.equal(false);
    });
  });


  describe('Prefix - subdomain', function() {
    it("Domain", function() {
      expect(dm('*.abc.com', 'http://www.abc.com')).to.equal(true);
    });

    it("Domain/", function() {
      expect(dm('*.abc.com', 'http://www.abc.com/')).to.equal(true);
    });

    it("Domain/path", function() {
      expect(dm('*.abc.com', 'http://www.abc.com/def/ghi')).to.equal(true);
    });

    it("sub Subdomain", function() {
      expect(dm('*.abc.com', 'http://w3.www.abc.com')).to.equal(true);
    });
  });

  describe('Prefix - mismatch', function() {
    it("Invalid Prefix - (fail)", function() {
      expect(dm('*abc', 'http://abc.com')).to.equal(false);
    });

    it("Domain", function() {
      expect(dm('*.abc.com', 'http://cba.com')).to.equal(false);
    });

    it("Domain/path", function() {
      expect(dm('*.abc.com', 'http://cba.com/def/ghi')).to.equal(false);
    });
  });

});