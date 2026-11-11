const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),C=require('./dist/core.js');
const context={window:{}};vm.createContext(context);
vm.runInContext(fs.readFileSync('dist/bank.js','utf8'),context);
vm.runInContext(fs.readFileSync('dist/road-analysis.js','utf8'),context);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
context.C=C;context.esc=esc;
const app=fs.readFileSync('dist/app.js','utf8');vm.runInContext(app.slice(app.indexOf('function detailedRoadAnalysis('),app.indexOf('function roadExplanationTabs(')),context);
const permutations=a=>a.length?a.flatMap((x,i)=>permutations(a.filter((_,j)=>j!==i)).map(p=>[x,...p])):[[]];let checked=0;
const questions=context.window.BANK.filter(q=>q.group==='B');assert.equal(questions.length,66);
for(const q of questions){
 const analysis=context.window.ROAD_ANALYSIS[q.id];assert.ok(analysis.scene&&analysis.rule&&analysis.memory);assert.ok(analysis.steps.length>=3);assert.equal(analysis.reasons.length,4);assert.ok(analysis.reasons.every(s=>typeof s==='string'&&s.length>25));
 for(const order of permutations([0,1,2,3]))for(let answer=0;answer<4;answer++){
  const html=context.detailedRoadAnalysis(q,answer,order);
  assert.ok(html.includes('You chose '+C.letter(order.indexOf(answer))+':'));
  assert.ok(html.includes(esc(C.choiceText(q,answer,order))));
  assert.ok(html.includes(esc(analysis.reasons[answer])));
  assert.equal(html.includes('Read “incorrect” first.'),/incorrect/i.test(q.stem));
  assert.ok(!html.includes('undefined'));checked++;
 }
}
console.log(`PASS: 66 detailed explanations, 264 choice rationales, ${checked} personalized shuffled-answer renders, polarity and missing-content checks.`);
