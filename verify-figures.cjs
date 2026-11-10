const assert=require('node:assert/strict');
const {createFigureCache}=require('./dist/figure-cache.js');
(async()=>{
 let calls=[],active=0,max=0,decodeCount=0,failedOnce=false;const revoked=[];
 const cache=createFigureCache({
  fetchImage:async path=>{calls.push(path);active++;max=Math.max(max,active);await new Promise(r=>setTimeout(r,3));active--;if(path==='retry'&&!failedOnce){failedOnce=true;throw Error('Network unavailable');}return path;},
  makeURL:path=>'blob:'+path,decode:async()=>{decodeCount++;},revokeURL:url=>revoked.push(url),concurrency:4
 });
 await cache.prepare(['a','a','b','c','d','e']);
 assert.equal(max,4);assert.equal(calls.length,5);assert.equal(decodeCount,5);
 assert.equal(cache.source('a'),'blob:a');assert.equal(cache.source('unloaded'),'unloaded');
 await Promise.all([cache.load('a'),cache.load('a'),cache.prepare(['b','c'])]);
 assert.equal(calls.length,5,'Navigating to loaded figures must not request them again');
 await Promise.all([cache.load('shared'),cache.load('shared')]);assert.equal(calls.filter(p=>p==='shared').length,1);
 await assert.rejects(cache.prepare(['retry']));await cache.prepare(['retry']);assert.equal(cache.source('retry'),'blob:retry');
 const bad=createFigureCache({fetchImage:async()=>0,makeURL:()=> 'blob:bad',decode:async()=>{throw Error('bad image');},revokeURL:url=>revoked.push(url)});
 await assert.rejects(bad.load('bad'));assert.deepEqual(revoked,['blob:bad']);
 console.log('PASS: session preloading, four-request concurrency limit, decode before ready, zero repeat requests, request deduplication, failure retry, failed-URL cleanup.');
})();
