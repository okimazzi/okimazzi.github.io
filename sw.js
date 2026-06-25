// Service worker — offline support for the roadmap (cache-first with network update)
const CACHE='roadmap-v1';
const ASSETS=['./','./index.html','./style.css','./data.js','./app.js','./projects.js','./final.js','./manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      const net=fetch(e.request).then(resp=>{
        if(resp&&resp.status===200&&resp.type==='basic'){const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}
        return resp;
      }).catch(()=>cached);
      return cached||net;
    })
  );
});
