# domain-match

  Check if a given url matches against simple domain name patterns.

## Installation

Install via [npm](https://www.npmjs.org/package/domain-match)

```
$ npm install domain-match
```

## Description

Use this function to test a URL matches a domain name pattern.

The domain name patterns can optionally followed by path prefix.

| wild card | Matching URLs | Non-matching URLs |
| :---: | :--- | :--- |
|  *    |http://abc.com/           |                          |
|       |http://abc.def.com        |                          |
|       |http://abc.com/path/file  |                          |

| wild card TLDs | Matching URLs | Non-matching URLs |
| :---: | :--- | :--- |
|  *.domain.com |http://domain.com/           | http://niamod.com/ |
|               |http://sub.domain.com |  |
|               |http://domain.com/path/file  |                    |

| wild card subdomains | Matching URLs | Non-matching URLs |
| :---: | :--- | :--- |
|  *.sub.domain.com |http://sub.domain.com/           | http://domain.com/ |
|                   |http://sub.sub.domain.com/ | http://bus.domain.com/ |
|                   |http://sub.domain.com/path/file  |                          |


| specific TLDs | Matching URLs | Non-matching URLs |
| :---: | :--- | :--- |
|  domain.com | http://domain.com/           | http://niamod.com/ |
|             | http://domain.com/path/file  | http://sub.domain.com |


| specific subdomains | Matching URLs | Non-matching URLs |
| :---: | :--- | :--- |
|  sub.domain.com | http://sub.domain.com/           | http://sub.niamod.com/ |
|             | http://sub.domain.com/path/file  | http://abc.domain.com |


## Usage

```
var domainMatch = require('domain-match'); 
var matched = domainMatch('*.abc.com/prefix/path', 'http://www.abc.com/prefix/path/filename.ext');
// matched == true
```


## License

  [MIT](LICENSE)
