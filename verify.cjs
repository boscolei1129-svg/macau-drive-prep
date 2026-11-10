const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),C=require('./dist/core.js');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync('dist/bank.js','utf8'),ctx);
const bank=JSON.parse(JSON.stringify(ctx.window.BANK)),byId=Object.fromEntries(bank.map(q=>[q.id,q]));
assert.equal(bank.length,647);assert.equal(new Set(bank.map(q=>q.id)).size,647);
assert.deepEqual('ABCDE'.split('').map(g=>bank.filter(q=>q.group===g).length),[176,66,150,139,116]);
const perms=a=>a.length?a.flatMap((x,i)=>perms(a.filter((_,j)=>j!==i)).map(p=>[x,...p])):[[]];
let cases=0,refs=0;
for(const q of bank){
 assert.equal(q.choices.length,4);assert.ok(q.choices.every(t=>typeof t==='string'&&t.length>0));assert.ok(q.stem.length>10);assert.ok(q.correct>=0&&q.correct<4);assert.ok(q.page<q.keyPage);assert.ok(!q.choices.some(t=>/SOLUTIONS|Question\s+\d+/.test(t)));
 if(q.group==='A'||q.group==='B'){assert.ok(q.figure);assert.ok(fs.existsSync('dist/'+q.image));}
 for(const order of perms([0,1,2,3])){
  const index=order.indexOf(q.correct),answer=order[index];assert.equal(C.score([q.id],{[q.id]:answer},byId),1);
  for(let original=0;original<4;original++){
   const text=C.choiceText(q,original,order),s=q.choices[original];
   if(/^(?:Answers?\s+)?[A-D](?:(?:\s*,\s*|\s+and\s+|\s+or\s+)[A-D])+\.?$/i.test(s)){
    assert.deepEqual([...text.matchAll(/\b[A-D]\b/g)].map(m=>order['ABCD'.indexOf(m[0])]),[...s.matchAll(/\b[A-D]\b/g)].map(m=>'ABCD'.indexOf(m[0])));refs++;
   }else assert.equal(text,s);
  }
  cases++;
 }
}
const s={attempts:[]};C.record(s,bank[0],1,'practice','s',1);assert.deepEqual(C.metrics(s,bank).mistakes,['A001']);C.record(s,bank[0],0,'practice','s2',2);assert.deepEqual(C.metrics(s,bank).mistakes,[]);assert.equal(C.metrics(s,bank).seen,1);assert.equal(C.metrics(s,bank).total,2);
assert.equal(C.score(['A001','A002'],{A001:0},byId),1); // Unanswered exam items cannot earn marks.
const original=[0,1,2,3];assert.deepEqual([...C.shuffle(original,()=>0)].sort(),original);assert.deepEqual(original,[0,1,2,3]);
assert.equal(ctx.window.SOURCES.length,7);for(const s of ctx.window.SOURCES)assert.ok(fs.existsSync('dist/assets/'+s.file));
console.log(`PASS: ${bank.length} source questions, ${cases} scoring permutations, ${refs} reference permutations, 7 source PDFs, figure assets, latest-mistake and unique-coverage tracking.`);
