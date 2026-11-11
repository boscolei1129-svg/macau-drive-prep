/* Study notes derived only from the supplied booklets and study manual, pp. 5–7.
   These notes do not add or replace any question, choice, figure, or keyed answer. */
(function(){
 const orders={11:[['C','B'],'D','A'],12:['B','D','C','A'],13:['D','A','B','C'],14:['B','C','D','A'],15:['C','D','A','B'],17:['A'],18:['C','A','B'],19:['C','B','A'],20:[['A','B'],'C'],21:['A','B','C'],22:['B','C','A'],24:[['C','A'],'B'],25:[['A','B'],'C'],30:['B','C','A'],31:['A','B','C'],32:[['B','C'],'A'],33:['C','A','B']};
 const notes={
 1:['Neither vehicle may overtake in Figure 3. The junction ahead is the decisive feature: counting how many vehicles would be passed does not make the manoeuvre permissible.','Compare Q2 for the same scene: the statement allowing vehicle B to overtake is the incorrect statement.'],
 2:['The question asks for the incorrect statement. “Vehicle B may overtake” is the statement to reject, not advice to follow. Both vehicles are approaching an intersection.','Passing only one vehicle does not remove the restriction shown in this scene. Q1 confirms that neither vehicle may overtake.'],
 3:['Trace both labelled courses in Figure 4 against the mandatory-direction sign. The source key accepts both courses, rather than just one exit path.','The letters A and B identify courses in the picture; they are not the shuffled answer letters.'],
 4:['Use the blue mandatory-direction sign at the island to distinguish the two drawn paths. In this figure, the keyed right-turn path is course B.','Do not carry that answer over to Figure 8: its signs and permitted approach are different.'],
 5:['Figure 8 includes a one-way arrow and a no-entry sign. Read them together before following the right-turn paths; the source key selects course A.','Compare Figure 6, where the mandatory-direction sign makes course B the keyed path.'],
 6:['The scene is downhill. The keyed answer identifies truck A because its front wheels are turned against the pavement.','Compare the wheel orientation, not just the direction the trucks face. Figure 39 is a separate uphill-parking question.'],
 7:['Read the one-way direction shown in Figure 10. The keyed prohibited manoeuvre is a U-turn.','The question asks what is prohibited, rather than which way the vehicle is currently facing.'],
 11:['The source gives vehicle B priority because it is on the left side of the road turning left. Follow its drawn turn, rather than treating all turning vehicles alike.','Q10 gives the complete order for this same figure: B, then D, then C, then A.'],
 16:['The source explicitly bases the first and last vehicles on the traffic signs: C goes first and B goes last.','Check the STOP/give-way signs before comparing the positions of the vehicles.'],
 17:['“Vehicle A turns right” is the incorrect statement to reject. The source identifies A and D as going straight, while B and C turn right.','Trace A’s actual arrow. Do not confuse a vehicle label in the diagram with a shuffled answer letter.'],
 18:['Trace the four movement arrows separately: A and D go straight; B and C turn right.','This is a question about the vehicles’ movements, not a request for their priority sequence.'],
 19:['The keyed endpoints of the sequence are A first and D last. Identify those two positions before comparing the choices.','This question asks only for first and last; the supplied manual does not provide a full sequence for this figure.'],
 23:['The source distinguishes the movements: vehicle C goes straight and vehicle B turns right.','Do not substitute the sequence answer for the movement answer. Q22 asks for the order in this same figure.'],
 27:['Vehicle A has priority because there is no traffic approaching from its left, as the source answer states.','Apply the supplied rule to this diagram: yield to vehicles approaching from the left. The complete keyed order is A, then B, then C.'],
 29:['Vehicle B has priority because there is no traffic approaching from its left, as the source answer states.','Apply the supplied rule to this diagram: yield to vehicles approaching from the left. The complete keyed order is B, then C, then A.'],
 30:['The source identifies vehicle A as the vehicle violating the regulations in Figure 23. Inspect A’s drawn manoeuvre against the signs and markings.','The supplied key names A but does not give a written reason for this item. This note preserves that limit instead of adding an unsupported explanation.'],
 33:['The decisive reason is included in the source answer: vehicle A has priority because it approaches from the left.','The supplied regulations booklet uses priority from the left. Use the approaching vehicles’ relative positions, not the left/right position of an answer on the screen.'],
 34:['This is an “incorrect” question: “Vehicle B is wrong” is the false statement to select. It does not mean B actually drives incorrectly.','Q35 checks the same figure positively and confirms that vehicle B drives correctly.'],
 35:['Vehicle B is the vehicle the source identifies as driving correctly.','Q34 asks for the incorrect statement in the same scene; its keyed phrase “Vehicle B is wrong” is false. Read the question’s polarity before matching that phrase.'],
 36:['The source allows A and B to proceed simultaneously in this diagram. A choice naming only one of them leaves out the other permitted vehicle.','“A and B” here refers to the labelled vehicles in the picture, not the answer positions.'],
 37:['The solid line is the limit to watch: the source permits overtaking only without crossing that line.','An answer allowing overtaking without that condition is incomplete. Compare Figure 36, where the line involved is broken.'],
 46:['In Figure 34, vehicle A may U-turn; vehicle B is restricted by the sign.','Q47 explains the distinction: A is outside the sign’s regulatory area. Distance from a sign alone is not the test.'],
 47:['The false statement is that B may U-turn merely because it is far from the sign. B remains subject to the prohibition in this diagram.','A is outside the sign’s regulatory area. Q46 confirms that A may U-turn.'],
 48:['Both pictures show a U-turn at an intersection, so the source answer prohibits the manoeuvre in both A and B.','The absence of a “No U-turn” sign in picture B does not by itself make the manoeuvre permissible.'],
 49:['“There is no No U-turn sign” is the misleading reason in picture B. The question asks you to select this incorrect claim.','The source identifies the intersection as the restriction in both pictures, even where the explicit sign is absent.'],
 50:['The marking in Figure 36 is broken. The source allows vehicle A to overtake and drive on that broken line.','Contrast this with Figure 29: overtaking there is permitted only without crossing the solid line.'],
 51:['Vehicle C is approaching from the opposite direction, so the source requires A to give up overtaking.','Accelerating, using high beams, or stopping immediately are not the keyed responses to this developing conflict.'],
 52:['Distinguish stopping from parking. In Figure 38, stopping is allowed in picture B, which has the broken yellow edge marking.','Picture A’s solid yellow edge marking prohibits stopping and parking. Picture B still prohibits parking.'],
 53:['Parking is prohibited in both pictures A and B. The difference between the markings concerns stopping, not permission to park.','Q52 confirms that stopping is allowed in picture B. That does not make parking permissible there.'],
 54:['The incorrect statement is that picture B prohibits both parking and stopping. In B, parking is prohibited but stopping is allowed.','Picture A prohibits both. Keep the two manoeuvres separate when reading each choice.'],
 55:['This scene is uphill. The source key identifies vehicle B’s wheel position as correct.','Compare B’s wheel orientation with A’s; do not reuse the truck-A answer from Figure 9, which is explicitly a downhill scene.'],
 56:['Stopping is mandatory in picture B. The source contrasts that unconditional requirement with picture A.','An empty intersection does not remove picture B’s requirement to stop.'],
 57:['The statement allowing both vehicles to proceed without stopping when the intersection is empty is incorrect. Picture B still requires a stop.','Q58 confirms the rule for B: stop under all circumstances.'],
 58:['Picture B requires a stop under all circumstances, not only when another vehicle is approaching.','Merely reducing speed is not the keyed action. Q56 and Q57 establish the same mandatory-stop distinction.'],
 59:['Read the numbered positions in Figure 41: 1 is red, 2 is amber, and 3 is green.','The numbers identify lights in the figure and stay fixed when answer choices shuffle.'],
 60:['Light 1 is red. The keyed stopping position is in front of the stopping line.','“At the intersection” or “at the pedestrian crossing” does not specify the source’s required stopping position.'],
 61:['The question says flashing amber while turning left. The source requires reducing speed and turning carefully.','Do not treat flashing amber as an instruction to wait for green or as permission to continue straight ahead.'],
 62:['Light 1 is the red light, meaning stop and no passage.','Use the numbered-light mapping from Q59: 1 red, 2 amber, 3 green.'],
 63:['The statement saying light 3 prohibits passage under all circumstances is incorrect: light 3 is green.','Q59 gives the colour mapping. Read this question as a search for the false statement, rather than a stop instruction.'],
 64:['In picture B, the pedestrian signal is allowing pedestrians to cross. Vehicles must stop for them.','Following another vehicle through does not replace the requirement stated in the source answer.'],
 65:['Two actions are required: reduce speed, then stop and give way to pedestrians crossing.','Maintaining speed misses the first action; merely proceeding carefully misses the stop-and-give-way requirement. “All of the above” is therefore not the keyed answer.'],
 66:['The false statement applies one “slow and proceed” rule to both pictures. The source distinguishes an uncontrolled crossing in A from a signal-controlled crossing in B.','For A, the source says pedestrians have priority and vehicles must stop for them. For B, pedestrians obey the signals; Q64 requires vehicles to stop when the pedestrian crossing signal is on.']
 };
 const result={};
 for(const q of window.BANK.filter(q=>q.group==='B')){
  let text=notes[q.number];
  if(!text&&orders[q.figure]){
   const stages=orders[q.figure];
   const sequence=stages.map(stage=>Array.isArray(stage)?stage.join(' and '):stage).join(' → ');
   text=[`The supplied study manual gives this order for Figure ${q.figure}: ${sequence}. Read each arrow as “then”; vehicles joined by “and” belong to the same stage.`,`Match the first and last stages to what this question asks. The vehicle letters belong to the diagram and do not change when the answer choices shuffle.`];
  }
  if(!text)throw Error('Missing road explanation '+q.id);
  result[q.id]={paragraphs:text,manualPages:[5,6,7]};
 }
 window.ROAD_EXPLANATIONS=result;
})();
