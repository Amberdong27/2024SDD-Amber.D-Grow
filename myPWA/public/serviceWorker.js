if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then((registration) => {
        registration.addEventListener("updatefound", () => {
          // If updatefound is fired, it means that there's
          // a new service worker being installed.
          const installingWorker = registration.installing;
          console.log(
            "A new service worker is being installed:",
            installingWorker,
          );
  
          // You can listen for changes to the installing service worker's
          // state via installingWorker.onstatechange
        });
      })
      .catch((error) => {
        console.error(`Service worker registration failed: ${error}`);
      });
  } else {
    console.error("Service workers are not supported.");
  }

  const CATALOGUE_ASSETS = "catalogue-assets"; 

self.addEventListener("install", (installEvt) => { 
  installEvt.waitUntil( 
    caches 
      .open(CATALOGUE_ASSETS) 
      .then((cache) => { 
        console.log(cache) 
        cache.addAll(assets); 
      }) 
      .then(self.skipWaiting()) 
      .catch((e) => { 
        console.log(e); 
      }) 
  ); 
}); 


self.addEventListener("activate", function (evt) { 
  evt.waitUntil( 
    caches 
      .keys() 
      .then((keyList) => { 
        return Promise.all( 
          keyList.map((key) => { 
            if (key === CATALOGUE_ASSETS) { 
              console.log("Removed old cache from", key); 
              return caches.delete(key); 
            } 
          }) 
        ); 
      }) 
      .then(() => self.clients.claim()) 
  ); 
}); 


self.addEventListener("fetch", function (evt) { 
  evt.respondWith( 
    fetch(evt.request).catch(() => { 
      return caches.open(CATALOGUE_ASSETS).then((cache) => { 
        return cache.match(evt.request); 
      }); 
    }) 
  ); 
}) 