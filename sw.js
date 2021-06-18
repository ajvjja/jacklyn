self.addEventListener("install", e => { 
    e.waitUntil(
      caches.open("offlineFiles").then(cache => {
         return cache.addAll([
             "./",
             "./src/index.js",
             "./src/styles.css",
             "./images/192.png",
             "./images/512.png",
             "./images/twelve.jpg",
             "./images/one.jpg",
             "./images/two.jpg",
             "./images/threee.jpg",
             "./images/four.jpg",
             "./images/five.jpg",
             "./images/six.jpg",
             "./images/adrift.png",
             "./images/oywd.jpg",
             "./images/tlr.png",
             "./images/tfios.jpg",
             "./images/lilim.jpg",
             "./images/lany.jpg",
             "./images/os.jpg",
             "./images/ben.jpg",
             "./images/html.jpg",
             "./images/python.png",
             "./images/csharp.png",
             "./images/facebook.png",
             "./images/instagram.png",
             "./images/twitter.png"
         ]);
      })
    );
});

self.addEventListener("fetch", e => {
   console.log("Intercepting request :"+ e.request.url);
   e.respondWith(
       caches.match(e.request).then(response => {
            return response || fetch(e.request);
       })
   );
});