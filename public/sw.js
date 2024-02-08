/**
 * cspell:ignore precaching
 */

const STATIC_CACHE_NAME = 'static-v2'
const DYNAMIC_CACHE_NAME = 'dynamic-v2'

self.addEventListener('install', (e) => {
  // console.log('=== Service worker installed!', e)
  e.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      // console.log('=== precaching...')
      cache.addAll([
        '/',
        '/index.html',
        '/src/js/app.js',
        '/src/js/feed.js',
        '/src/js/promise.js',
        '/src/js/fetch.js',
        '/src/js/material.min.js',
        '/src/css/app.css',
        '/src/css/feed.css',
        '/src/images/main-image.jpg',
        'https://fonts.googleapis.com/css?family=Roboto:400,700',
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css',
      ])
    })
  )
})

self.addEventListener('activate', (e) => {
  // console.log('=== Service worker activated!', e)
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== STATIC_CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
            // console.log('=== deleting key: ', key)
            return caches.delete(key)
          }
        })
      )
    })
  )

  return self.clients.claim()
})

self.addEventListener('fetch', (e) => {
  // console.log('=== Service worker Fetching something!', e.request.url)
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) return res

      return fetch(e.request).then((res) => {
        return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
          cache.put(e.request.url, res.clone())
          return res
        })
      })
    })
  )
})
