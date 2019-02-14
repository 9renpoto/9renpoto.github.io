self.__precacheManifest = [
  {
    "url": "/_next/static/runtime/webpack-2ef50c24cc8d478adafc.js"
  },
  {
    "url": "/_next/static/runtime/main-a222a89d595ea2da719d.js"
  },
  {
    "url": "/_next/static/qXFEq4paCQRkrRtWPa2lT/pages/post.js"
  },
  {
    "url": "/_next/static/qXFEq4paCQRkrRtWPa2lT/pages/index.js"
  },
  {
    "url": "/_next/static/qXFEq4paCQRkrRtWPa2lT/pages/_error.js"
  },
  {
    "url": "/_next/static/qXFEq4paCQRkrRtWPa2lT/pages/_app.js"
  },
  {
    "url": "/_next/static/chunks/commons.d3491128fa1d8aaf4618.js"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/_rjyhayX.jpg",
    "revision": "6763e9271bee91a9a88521952409b9fe"
  },
  {
    "url": "static/bundle.css",
    "revision": "c14b0a317c2671d43759c55c39335b1e"
  },
  {
    "url": "static/contributions-calendar.png",
    "revision": "e69dc176ef2dd4ea115cee21f6fa6d62"
  },
  {
    "url": "static/favicon.ico",
    "revision": "2b1ed374ef4c7867e64907e57e32dcea"
  },
  {
    "url": "static/google-optimize-logo.jpg",
    "revision": "1c013041a033f14d5cfc319e0e3ca013"
  },
  {
    "url": "static/IMG_1099.JPG",
    "revision": "dd3add38c8cbda36f3a68dff575b9425"
  },
  {
    "url": "static/IMG_1101.JPG",
    "revision": "3b1543608e3e6031178d49c243d31a8f"
  },
  {
    "url": "static/IMG_1102.JPG",
    "revision": "d37ea745fe919a4baaf5ca0ca9a76f16"
  },
  {
    "url": "static/ps4-CUH-1200AB01.png",
    "revision": "e633f75276ad5bd582dab120bb613607"
  },
  {
    "url": "static/robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  },
  {
    "url": "static/slack-channel-active-reminder.png",
    "revision": "2bbabeba5876cd6c9cf48065b2e2b531"
  },
  {
    "url": "static/toa.png",
    "revision": "ee30657bfaf082fd51c1a7c512735b05"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET');
