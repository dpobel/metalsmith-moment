# metalsmith-moment

A Metalsmith plugin to convert a set of file metadata to
[moment.js](http://momentjs.com) objects.

![Build status](https://github.com/dpobel/metalsmith-moment/actions/workflows/main.yml/badge.svg)

## Installation

    $ npm install metalsmith-moment

## JavaScript usage

```js
var msMoment = require('metalsmith-moment');

metalsmith.use(msMoment(['published', 'modified']));
```

This will convert the `published` and `modified` properties to moment.js objects
by applying [moment.js parsing rules](http://momentjs.com/docs/#/parsing/). Any
*falsy* property is just ignored.

## CLI usage

```json
{
  "plugins": {
    "metalsmith-moment": ["published", "modified"]
  }
}
```

## License

MIT
