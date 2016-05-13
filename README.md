# Jumpstart: Frontend

Jumpstart your frontend development. Less is more.

## Start

```
$ npm install
$ npm start
```

Open [http://localhost:8080/](http://localhost:8080/) in your browser.

## Build

```
$ npm install
$ npm run build
```

Builds production ready files to `./dist`.

You can then manually verify if the build is working with `npm run serve:build` and opening [http://localhost:8080/](http://localhost:8080/).

## Modules

**[html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)**

Creates a basic `index.html` and includes all bundles automatically. It also includes a hash in the filename, for cache busting in production.

## FAQ

**Why not [html-webpack-template](https://github.com/jaketrent/html-webpack-template)?**

Because `index.html` needs to be modified on a per-project basis. E.g. for Google Analytics, Webfonts, API endpoints, meta description etc.

**Why use file hashes (for cache busting) through Webpack and not through html-webpack-template?**

Because according to [Steve Souders](http://www.stevesouders.com/blog/2008/08/23/revving-filenames-dont-use-querystring/), using hashes with filenames is more performant than using a query string as html-webpack-template does.

**Why use clean-webpack-plugin instead of rimraf?**

Because it is only needed while building with Webpack and thus better handled in-place.
