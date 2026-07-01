// Service worker — offline support for the roadmap (cache-first with background network update)
const CACHE='roadmap-v9';
const ASSETS=['./','./index.html','./style.css','./data.js','./app.js','./projects.js','./final.js','./manifest.json'];
// Tolerant precache: a single failing asset must not abort the whole install (was: addAll, atomic).
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      const net=fetch(e.request).then(resp=>{
        if(resp&&resp.status===200&&resp.type==='basic'){const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{})}
        return resp;
      }).catch(()=>cached||(e.request.mode==='navigate'?caches.match('./index.html'):Response.error()));
      return cached||net;
    })
  );
});
