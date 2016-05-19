var url = require('url');

function domainCheck(domain, host, wild) {
  if (domain === host) {
    return true;
  }

  if (wild && host) {
    var last = host.lastIndexOf(domain);
    return (last >= 0 && ((last + domain.length) == host.length));
  }

  return false;
}

function pathCheck(pathprefix, pathname) {
  return pathname.indexOf(pathprefix) == 0;
}

/*
 wild domain
 -----------
 * - any domain
 *.domain.com
 *.sub.domain.com

 with path
 ---------
 *(slash)pathprefix
 *.domain.com/pathprefix

 specific domain
 ---------------
 domain.com
 sub.domain.com

 with path
 ---------
 domain.com/pathprefix
 sub.domain.com/pathprefix
 */
function domainMatch(pattern, siteUrl) {
  if (pattern === '*') {
    return true;
  }

  var wild = ((pattern.indexOf('*.') === 0) || (pattern.indexOf('*/') === 0));

  var slashed = pattern.split('/');
  var domain = slashed.shift();
  var pathprefix = '/' + slashed.join('/');

  if (wild) {
    domain = domain.substr(2);
  }

  var urlObj = url.parse(siteUrl, false, false);
  return (domainCheck(domain, urlObj.host, wild) && pathCheck(pathprefix, urlObj.pathname));
}

module.exports = domainMatch;
