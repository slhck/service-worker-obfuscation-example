# Service Worker Test

Requirements: Node.js 16 (not working with 18!)

Installation:

```
yarn install
```

Running:

```
yarn dev
```

For prod:

```
yarn prod
```

Open `localhost:8001` and check console:

```
Service worker registered: ServiceWorkerRegistration
serviceWorker.js:2 self.Window is not available
serviceWorker.js:2 Uncaught ReferenceError: window is not defined
    at serviceWorker.js:2:107544
serviceWorker.js:2 Cache opened
```

Click the image to check if the worker is doing its job. It should print:

```
Image fetched from network: https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BillieEilishO2160622_%2844_of_45%29_%2852152978743%29_%28cropped%29.jpg/346px-BillieEilishO2160622_%2844_of_45%29_%2852152978743%29_%28cropped%29.jpg
```
