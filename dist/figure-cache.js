(function(root){
  function createFigureCache({fetchImage,makeURL,decode,revokeURL,concurrency=4}){
    const ready=new Map(),pending=new Map();
    function load(path){
      if(ready.has(path))return Promise.resolve(ready.get(path));
      if(pending.has(path))return pending.get(path);
      const promise=Promise.resolve().then(async()=>{
        let url;
        try{url=makeURL(await fetchImage(path));await decode(url);ready.set(path,url);return url;}
        catch(error){if(url)revokeURL(url);throw error;}
        finally{pending.delete(path);}
      });
      pending.set(path,promise);return promise;
    }
    async function prepare(paths,onProgress=()=>{}){
      const unique=[...new Set(paths.filter(Boolean))];let next=0,done=0;
      onProgress(done,unique.length);
      await Promise.all(Array.from({length:Math.min(concurrency,unique.length)},async()=>{
        while(next<unique.length){const path=unique[next++];await load(path);onProgress(++done,unique.length);}
      }));
    }
    return {load,prepare,source:path=>ready.get(path)||path};
  }
  if(typeof module!=='undefined')module.exports={createFigureCache};
  else root.createFigureCache=createFigureCache;
})(typeof window!=='undefined'?window:globalThis);
