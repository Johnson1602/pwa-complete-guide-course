if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function () {
    console.log('=== Service worker registered!')
  })
}

// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log('=== Promise resolved!')
//     resolve('success')
//   }, 1000)
// })

// promise.then((result) => {
//   console.log('=== result: ', result)
// })

// fetch('https://httpbin.org/uuid')
//   .then((res) => {
//     console.log('=== res: ', res)
//     return res.json()
//   })
//   .then((data) => {
//     console.log('=== data: ', data)
//   })

// fetch('https://httpbin.org/put', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ person: { name: 'John Doe', age: 30 } }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log('=== data: ', data))
