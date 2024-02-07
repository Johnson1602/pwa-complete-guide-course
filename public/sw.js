self.addEventListener('install', (e) => {
  console.log('=== Service worker installed!', e)
})

self.addEventListener('activate', (e) => {
  console.log('=== Service worker activated!', e)
  self.clients.claim()
})

self.addEventListener('fetch', (e) => {
  // console.log('=== Service worker Fetching something!', e.request.url)
  e.respondWith(fetch(e.request))
})
