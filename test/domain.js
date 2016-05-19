var expect = require('chai').expect;
var dm = require('../index');

describe("Exact Domain", function() {
  before(function() {
  });

  after(function() {
  });

  describe("TLD", function() {
    it("Domain", function() {
      expect(dm('abc.com', 'http://abc.com')).to.equal(true);
    });

    it("Domain/", function() {
      expect(dm('abc.com', 'http://abc.com/')).to.equal(true);
    });

    it("Domain/path", function() {
      expect(dm('abc.com', 'http://abc.com/def/ghi')).to.equal(true);
    });

    it("path", function() {
      expect(dm('abc.com', '/def/ghi')).to.equal(false);
    });
  });


  describe('Subdomain', function() {
    it("Domain", function() {
      expect(dm('www.abc.com', 'http://www.abc.com')).to.equal(true);
    });

    it("Domain/", function() {
      expect(dm('www.abc.com', 'http://www.abc.com/')).to.equal(true);
    });

    it("Domain/path", function() {
      expect(dm('www.abc.com', 'http://www.abc.com/def/ghi')).to.equal(true);
    });
  });

  describe('Subdomain - mismatch', function() {
    it("Domain", function() {
      expect(dm('w3.abc.com', 'http://www.abc.com')).to.equal(false);
    });

    it("Domain/", function() {
      expect(dm('w3.abc.com', 'http://www.abc.com/')).to.equal(false);
    });

    it("Domain/path", function() {
      expect(dm('w3.abc.com', 'http://www.abc.com/def/ghi')).to.equal(false);
    });

    it("Sub-Subdomain", function() {
      expect(dm('www.abc.com', 'http://w3.www.abc.com')).to.equal(false);
    });
  });

});