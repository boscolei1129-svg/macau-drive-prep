(function(root){
  const shuffle=(items,rng=Math.random)=>{const a=[...items];for(let i=a.length-1;i>0;i--){let j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const letter=i=>'ABCD'[i];
  function choiceText(q,original,order){
    let s=q.choices[original];
    // Remap only choices entirely made of choice references, never vehicle/figure labels.
    if(/^(?:Answers?\s+)?[A-D](?:(?:\s*,\s*|\s+and\s+|\s+or\s+)[A-D])+\.?$/i.test(s))
      s=s.replace(/\b[A-D]\b/g,c=>letter(order.indexOf('ABCD'.indexOf(c))));
    return s;
  }
  function score(items,answers,byId){return items.reduce((n,id)=>n+(answers[id]===byId[id].correct?1:0),0);}
  function record(state,q,answer,mode,sessionId,time=Date.now()){
    state.attempts.push({id:q.id,answer,correct:answer===q.correct,mode,sessionId,time});
  }
  function metrics(state,bank){
    const latest={};for(const a of state.attempts)latest[a.id]=a;
    return {latest,seen:Object.keys(latest).length,correct:state.attempts.filter(a=>a.correct).length,total:state.attempts.length,mastered:Object.values(latest).filter(a=>a.correct).length,mistakes:Object.values(latest).filter(a=>!a.correct).map(a=>a.id)};
  }
  const api={shuffle,letter,choiceText,score,record,metrics};
  if(typeof module!=='undefined')module.exports=api;else root.DriveCore=api;
})(typeof window!=='undefined'?window:globalThis);
