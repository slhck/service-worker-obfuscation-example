(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/serviceWorker.js").then((e=>{console.log("Service worker registered:",e)})).catch((e=>{console.error("Error registering service worker:",e)}));const e=document.getElementById("my-image"),r="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/BillieEilishO2160622_%2844_of_45%29_%2852152978743%29_%28cropped%29.jpg/346px-BillieEilishO2160622_%2844_of_45%29_%2852152978743%29_%28cropped%29.jpg";e.addEventListener("click",(()=>{fetch(r).then((e=>{e.ok?console.log("Image fetched from network:",r):console.log("Image fetch failed:",r)})).catch((e=>{console.error("Image fetch error:",e)}))}))})();