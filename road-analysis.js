/* Assistant-authored analysis of the supplied figures and keyed answers. Not official commentary. */
window.ROAD_ANALYSIS={
  "B001": {
    "scene": "Three vehicles are approaching a junction; A and B are each considering overtaking.",
    "rule": "A clear-looking gap does not remove a junction-related overtaking restriction.",
    "steps": [
      "Find the junction at the left of the picture before looking at the cars.",
      "Both proposed overtaking paths run toward that junction, so neither A nor B may start the manoeuvre.",
      "Counting one car versus two cars is a distraction: B is not exempt just because it would pass only one vehicle."
    ],
    "memory": "Check the road ahead before counting the cars.",
    "reasons": [
      "A is also approaching the junction, so selecting A alone allows a prohibited overtake.",
      "B is not exempt from the junction restriction just because it would pass fewer cars.",
      "Both proposed overtakes are ruled out by the junction ahead.",
      "This permits both manoeuvres even though the junction restricts both."
    ]
  },
  "B002": {
    "scene": "Three vehicles are approaching a junction; A and B are each considering overtaking.",
    "rule": "A clear-looking gap does not remove a junction-related overtaking restriction.",
    "steps": [
      "Find the junction at the left of the picture before looking at the cars.",
      "Both proposed overtaking paths run toward that junction, so neither A nor B may start the manoeuvre.",
      "Counting one car versus two cars is a distraction: B is not exempt just because it would pass only one vehicle."
    ],
    "memory": "Check the road ahead before counting the cars.",
    "reasons": [
      "This is a true restriction in the scene, so it is not the false statement requested.",
      "This is the false claim: passing only one vehicle does not make B’s overtake permissible.",
      "This identifies the junction restriction correctly; the question wants the incorrect claim.",
      "This is a precaution about simultaneous overtaking, not the false permission given to B."
    ]
  },
  "B003": {
    "scene": "A vehicle approaches the circular island; A and B label two possible routes.",
    "rule": "Follow the mandatory circulation shown by the blue sign; an exit choice is different from the direction of circulation.",
    "steps": [
      "Locate the blue circular direction sign on the island.",
      "Trace each route from the approaching vehicle, rather than reading the arrowheads in isolation.",
      "The source accepts both labelled routes. Do not treat “A” and “B” as two answer positions: they are route labels."
    ],
    "memory": "Follow the circle first; choose the exit second.",
    "reasons": [
      "A is accepted, but selecting A alone leaves out the other accepted route.",
      "B is accepted, but selecting B alone leaves out the other accepted route.",
      "The key accepts both labelled courses in this roundabout scene.",
      "This rejects two routes that the source accepts."
    ]
  },
  "B004": {
    "scene": "The blue sign on the island directs traffic around a specified side of the obstruction.",
    "rule": "A mandatory direction sign controls which side of an island a driver must pass.",
    "steps": [
      "Find the blue arrow at the tip of the island.",
      "Course A cuts across the side excluded by that direction; course B follows the permitted side before completing the turn.",
      "The correct course is B even if A looks like the shorter route."
    ],
    "memory": "The shortest path is not always the permitted path.",
    "reasons": [
      "A does not follow the side of the island required by the blue sign.",
      "B is the path consistent with the mandatory sign and the source key.",
      "This wrongly includes A as well as the permitted course.",
      "The sign does leave a permitted route: B."
    ]
  },
  "B005": {
    "scene": "The road has a one-way arrow to the right and a no-entry sign beside route A.",
    "rule": "Read a sign from the approach it controls: the reverse face or opposing approach is not a ban on every nearby movement.",
    "steps": [
      "Use the one-way arrow to establish the approach direction.",
      "Trace the vehicle along course A around the junction; compare it with B’s path across the opposing side.",
      "The source selects A here. Figure 6 has a different sign arrangement, so its answer must not be copied."
    ],
    "memory": "Same island shape, different signs, different route.",
    "reasons": [
      "A is the permitted path in this sign arrangement.",
      "B is the tempting carry-over from Figure 6, but the approach signs have changed.",
      "The key permits A, not both paths.",
      "This rejects A even though it is the keyed permitted route."
    ]
  },
  "B006": {
    "scene": "Both trucks face downhill, but their front wheels are angled differently.",
    "rule": "For the supplied downhill parking scene, turn the front wheels toward the pavement/kerb.",
    "steps": [
      "Identify the downhill direction first.",
      "Compare only the front-wheel angles, rather than the size or position of the trucks.",
      "Truck A’s wheels point toward the pavement. If the vehicle moves downhill, that orientation helps direct it toward the kerb rather than freely into the road."
    ],
    "memory": "Downhill: wheels toward the kerb.",
    "reasons": [
      "This correctly links truck A’s wheel angle to the downhill kerb-side position.",
      "This selects the opposite wheel orientation from the keyed downhill arrangement.",
      "The two wheel angles are not equally correct for the same downhill situation.",
      "This wrongly rejects truck A’s correctly positioned wheels."
    ]
  },
  "B007": {
    "scene": "A left-pointing one-way arrow and a no-entry sign control this road.",
    "rule": "A U-turn reverses the direction of travel; it is incompatible with the one-way direction in this scene.",
    "steps": [
      "Find the one-way arrow before deciding what manoeuvre is asked about.",
      "Imagine the vehicle after a U-turn: it would face the opposite direction.",
      "The question asks for the prohibited manoeuvre, not for a list of everything a driver might do on this road."
    ],
    "memory": "A U-turn would undo the one-way direction.",
    "reasons": [
      "Parking is not the manoeuvre the pictured direction signs prohibit in this question.",
      "Overtaking is not the specific prohibition tested by this one-way scene.",
      "A U-turn reverses the required direction of travel.",
      "Stopping is not the manoeuvre identified by these direction signs."
    ]
  },
  "B008": {
    "scene": "A has a give-way sign; C turns left, B continues straight, and D crosses toward the lower road.",
    "rule": "Signs settle priority before the ordinary comparison of conflicting movements.",
    "steps": [
      "Put A behind the traffic to which its give-way sign applies.",
      "C and B form the first permitted stage in the source sequence; their drawn paths can be used without treating either as waiting behind D.",
      "D follows that first stage. A is last. Read the source’s “C and B–D–A” as two vehicles, then D, then A."
    ],
    "memory": "“And” means a shared stage; a dash means next.",
    "reasons": [
      "The first mismatch is stage 1: this choice puts B and D there, but the diagram’s keyed order requires C and B. The complete order is C and B → D → A.",
      "The first mismatch is stage 1: this choice puts C and D there, but the diagram’s keyed order requires C and B. The complete order is C and B → D → A.",
      "This preserves the complete staged order: C and B → D → A.",
      "The first mismatch is stage 1: this choice puts A and B there, but the diagram’s keyed order requires C and B. The complete order is C and B → D → A."
    ]
  },
  "B009": {
    "scene": "A has a give-way sign; C turns left, B continues straight, and D crosses toward the lower road.",
    "rule": "Signs settle priority before the ordinary comparison of conflicting movements.",
    "steps": [
      "Put A behind the traffic to which its give-way sign applies.",
      "C and B form the first permitted stage in the source sequence; their drawn paths can be used without treating either as waiting behind D.",
      "D follows that first stage. A is last. Read the source’s “C and B–D–A” as two vehicles, then D, then A."
    ],
    "memory": "“And” means a shared stage; a dash means next.",
    "reasons": [
      "C and B are the first stage in this diagram.",
      "D must follow the first-stage vehicles, so it cannot replace B in that pair.",
      "A has a give-way sign; putting it in the first pair ignores that sign.",
      "A has to give way and is last, not the priority vehicle."
    ]
  },
  "B010": {
    "scene": "B is at the head of the left approach and turns left; A is behind it. C and D approach on other arms.",
    "rule": "Trace the actual turn and lane position; “turning” is not a single priority category.",
    "steps": [
      "B makes the short left turn from its left-side position; Q11 specifically gives that as its priority reason.",
      "The full keyed sequence then places D before C.",
      "A is behind B on the same approach and is last in this scene. A clear opposite lane does not let it jump the sequence."
    ],
    "memory": "A left turn’s path matters, not just the word “turn”.",
    "reasons": [
      "This preserves the complete staged order: B → D → C → A.",
      "The first mismatch is stage 1: this choice puts D there, but the diagram’s keyed order requires B. The complete order is B → D → C → A.",
      "The first mismatch is stage 2: this choice puts A there, but the diagram’s keyed order requires D. The complete order is B → D → C → A.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires B. The complete order is B → D → C → A."
    ]
  },
  "B011": {
    "scene": "B is at the head of the left approach and turns left; A is behind it. C and D approach on other arms.",
    "rule": "Trace the actual turn and lane position; “turning” is not a single priority category.",
    "steps": [
      "B makes the short left turn from its left-side position; Q11 specifically gives that as its priority reason.",
      "The full keyed sequence then places D before C.",
      "A is behind B on the same approach and is last in this scene. A clear opposite lane does not let it jump the sequence."
    ],
    "memory": "A left turn’s path matters, not just the word “turn”.",
    "reasons": [
      "This gives D a turn and a priority reason that do not match the keyed movement.",
      "This identifies B’s short left turn and left-side position, the reason given in the source.",
      "Going straight does not put C ahead of B’s permitted first movement in this arrangement.",
      "A is behind B, and the absence of opposing traffic is not its keyed priority reason."
    ]
  },
  "B012": {
    "scene": "C faces a give-way sign, while the permitted movements of B and D are constrained by turn restrictions.",
    "rule": "Work out legal paths and signed priority before comparing vehicle positions.",
    "steps": [
      "Start by putting C behind the vehicles to which it must give way.",
      "Read the turn restrictions before imagining any vehicle taking a different exit.",
      "The source sequence is D, then A, then B, then C. D and B are not listed as a simultaneous first stage."
    ],
    "memory": "Resolve the signs before trying to memorise an order.",
    "reasons": [
      "The first mismatch is stage 2: this choice puts B there, but the diagram’s keyed order requires A. The complete order is D → A → B → C.",
      "This preserves the complete staged order: D → A → B → C.",
      "The first mismatch is stage 1: this choice puts D and B there, but the diagram’s keyed order requires D. The complete order is D → A → B → C.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires D. The complete order is D → A → B → C."
    ]
  },
  "B013": {
    "scene": "B makes a short left turn; C and D continue across the junction; A crosses from the right side of the picture.",
    "rule": "At an unsigned junction, compare approaching traffic from the left together with the paths that conflict.",
    "steps": [
      "Trace B’s short left turn first; this is the first vehicle in the keyed solution.",
      "After B clears, the source order continues C, then D.",
      "A’s crossing movement comes last. If the question asks only “first and last”, keep B and A and do not get distracted by the middle pair."
    ],
    "memory": "For first/last questions, identify the two endpoints.",
    "reasons": [
      "The first mismatch is stage 1: this choice puts C there, but the diagram’s keyed order requires B. The complete order is B → C → D → A.",
      "This preserves the complete staged order: B → C → D → A.",
      "The first mismatch is stage 2: this choice puts A there, but the diagram’s keyed order requires C. The complete order is B → C → D → A.",
      "The first mismatch is stage 2: this choice puts A there, but the diagram’s keyed order requires C. The complete order is B → C → D → A."
    ]
  },
  "B014": {
    "scene": "B makes a short left turn; C and D continue across the junction; A crosses from the right side of the picture.",
    "rule": "At an unsigned junction, compare approaching traffic from the left together with the paths that conflict.",
    "steps": [
      "Trace B’s short left turn first; this is the first vehicle in the keyed solution.",
      "After B clears, the source order continues C, then D.",
      "A’s crossing movement comes last. If the question asks only “first and last”, keep B and A and do not get distracted by the middle pair."
    ],
    "memory": "For first/last questions, identify the two endpoints.",
    "reasons": [
      "This places C first and B last. The diagram requires B first and A last. At least one endpoint is changed.",
      "This places B first and A last. The diagram requires B first and A last. Both endpoints match.",
      "This places B first and C last. The diagram requires B first and A last. At least one endpoint is changed.",
      "This places C first and D last. The diagram requires B first and A last. At least one endpoint is changed."
    ]
  },
  "B015": {
    "scene": "B and A have give-way signs; C travels straight, and D turns into the road across the picture.",
    "rule": "A give-way approach waits for the traffic with priority; travelling straight does not cancel a give-way sign.",
    "steps": [
      "Notice the give-way signs at B and A before comparing their arrows.",
      "C is first and D follows in the source solution.",
      "The remaining order is A, then B. An answer placing A beside C in the first stage ignores A’s sign."
    ],
    "memory": "Straight ahead is not a priority sign.",
    "reasons": [
      "The first mismatch is stage 1: this choice puts B there, but the diagram’s keyed order requires C. The complete order is C → D → A → B.",
      "This preserves the complete staged order: C → D → A → B.",
      "The first mismatch is stage 1: this choice puts A and C there, but the diagram’s keyed order requires C. The complete order is C → D → A → B.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires C. The complete order is C → D → A → B."
    ]
  },
  "B016": {
    "scene": "B and A have give-way signs; C travels straight, and D turns into the road across the picture.",
    "rule": "A give-way approach waits for the traffic with priority; travelling straight does not cancel a give-way sign.",
    "steps": [
      "Notice the give-way signs at B and A before comparing their arrows.",
      "C is first and D follows in the source solution.",
      "The remaining order is A, then B. An answer placing A beside C in the first stage ignores A’s sign."
    ],
    "memory": "Straight ahead is not a priority sign.",
    "reasons": [
      "A has a give-way sign: going straight does not place it beside C in the first stage.",
      "B has a give-way sign and is last; this explanation reverses its role.",
      "C first and B last is the pair established by the signs and the source sequence.",
      "A correct first/last description is present, so none of the above is not appropriate."
    ]
  },
  "B017": {
    "scene": "A and D go straight; B and C turn right. A and C are on give-way approaches.",
    "rule": "Keep two tasks separate: where each vehicle goes and when it may go.",
    "steps": [
      "Trace each arrow: A and D straight, B and C right.",
      "The give-way signs affect sequence, not the shape of A’s arrow.",
      "If asked for the incorrect statement, “A turns right” is the false claim. Selecting it does not mean you should believe it."
    ],
    "memory": "Read the arrow for movement; read the sign for priority.",
    "reasons": [
      "This correctly describes the priority grouping and is not the false movement claim requested.",
      "A’s arrow goes straight: saying it turns right is the false statement to select.",
      "D straight and B right are consistent with the drawn arrows.",
      "This correctly describes all four movement arrows, so it is not the incorrect statement."
    ]
  },
  "B018": {
    "scene": "A and D go straight; B and C turn right. A and C are on give-way approaches.",
    "rule": "Keep two tasks separate: where each vehicle goes and when it may go.",
    "steps": [
      "Trace each arrow: A and D straight, B and C right.",
      "The give-way signs affect sequence, not the shape of A’s arrow.",
      "If asked for the incorrect statement, “A turns right” is the false claim. Selecting it does not mean you should believe it."
    ],
    "memory": "Read the arrow for movement; read the sign for priority.",
    "reasons": [
      "This changes A’s straight movement into a right turn.",
      "This correctly preserves both straight movements and both right turns.",
      "This changes D’s straight movement into a right turn.",
      "This changes B’s right turn into a left turn and incorrectly makes C go straight."
    ]
  },
  "B019": {
    "scene": "A makes a short left turn while D’s turn crosses the central junction.",
    "rule": "A turning vehicle’s actual path matters: a short left turn and a crossing right turn create different conflicts.",
    "steps": [
      "Identify A’s short turn on the left side of its approach.",
      "Identify D’s longer crossing turn rather than assuming every turn is equivalent.",
      "The supplied key asks for endpoints: A first, D last. It does not give a complete middle order for this question."
    ],
    "memory": "Short left turn and crossing right turn are different cases.",
    "reasons": [
      "A first and D last are the keyed endpoints.",
      "This replaces first vehicle A with B; it keeps the last vehicle but not the first.",
      "This keeps A first but wrongly makes C last instead of D.",
      "This changes both endpoints: A is first, not last, and D is last."
    ]
  },
  "B020": {
    "scene": "B has a give-way sign; A’s right turn crosses the path of C, which goes straight.",
    "rule": "A signed give-way obligation and a conflicting turn must both be considered.",
    "steps": [
      "Leave B waiting because of its give-way sign.",
      "C goes straight before A makes the crossing turn.",
      "After C, allow A, then B: C → A → B. C and A are not a simultaneous first stage."
    ],
    "memory": "A turn cannot cut across the first vehicle’s path.",
    "reasons": [
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires C. The complete order is C → A → B.",
      "This preserves the complete staged order: C → A → B.",
      "The first mismatch is stage 1: this choice puts B there, but the diagram’s keyed order requires C. The complete order is C → A → B.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires C. The complete order is C → A → B."
    ]
  },
  "B021": {
    "scene": "B has a give-way sign; A’s right turn crosses the path of C, which goes straight.",
    "rule": "A signed give-way obligation and a conflicting turn must both be considered.",
    "steps": [
      "Leave B waiting because of its give-way sign.",
      "C goes straight before A makes the crossing turn.",
      "After C, allow A, then B: C → A → B. C and A are not a simultaneous first stage."
    ],
    "memory": "A turn cannot cut across the first vehicle’s path.",
    "reasons": [
      "A’s crossing turn must wait for C’s straight movement.",
      "C goes first before A turns across; B waits at its give-way sign.",
      "C and A have conflicting movements and are not the keyed simultaneous pair.",
      "Vehicle C is explicitly offered as a correct answer."
    ]
  },
  "B022": {
    "scene": "A is at a marked give-way approach; C goes straight and B turns right.",
    "rule": "A signed obligation to give way takes precedence over an argument based only on relative position.",
    "steps": [
      "Identify the triangular give-way marking beside A.",
      "Allow C’s straight movement before B’s crossing turn.",
      "A waits until last: C → B → A. A’s arrow also does not become a right turn merely because B is turning."
    ],
    "memory": "Do not swap a movement question for an order question.",
    "reasons": [
      "The first mismatch is stage 2: this choice puts A there, but the diagram’s keyed order requires B. The complete order is C → B → A.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires C. The complete order is C → B → A.",
      "This preserves the complete staged order: C → B → A.",
      "The first mismatch is stage 1: this choice puts B there, but the diagram’s keyed order requires C. The complete order is C → B → A."
    ]
  },
  "B023": {
    "scene": "A is at a marked give-way approach; C goes straight and B turns right.",
    "rule": "A signed obligation to give way takes precedence over an argument based only on relative position.",
    "steps": [
      "Identify the triangular give-way marking beside A.",
      "Allow C’s straight movement before B’s crossing turn.",
      "A waits until last: C → B → A. A’s arrow also does not become a right turn merely because B is turning."
    ],
    "memory": "Do not swap a movement question for an order question.",
    "reasons": [
      "This changes A’s movement into a right turn instead of reading the arrows shown.",
      "C straight and B right is the combination shown and keyed.",
      "This adds a right turn by A which the diagram does not show.",
      "C goes straight, so all three cannot be turning right."
    ]
  },
  "B024": {
    "scene": "A continues straight, B turns left, and C turns across their road.",
    "rule": "Some paths can share a stage; a conflicting crossing movement must wait.",
    "steps": [
      "Trace A’s straight path and B’s short left turn.",
      "The source allows A and B in the first stage.",
      "C follows them: (A and B) → C. Listing only A first misses B’s simultaneous movement."
    ],
    "memory": "One stage can contain two vehicles.",
    "reasons": [
      "This preserves the complete staged order: A and B → C.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires A and B. The complete order is A and B → C.",
      "The first mismatch is stage 1: this choice puts C there, but the diagram’s keyed order requires A and B. The complete order is A and B → C.",
      "The first mismatch is stage 1: this choice puts C there, but the diagram’s keyed order requires A and B. The complete order is A and B → C."
    ]
  },
  "B025": {
    "scene": "A continues straight, B turns left, and C turns across their road.",
    "rule": "Some paths can share a stage; a conflicting crossing movement must wait.",
    "steps": [
      "Trace A’s straight path and B’s short left turn.",
      "The source allows A and B in the first stage.",
      "C follows them: (A and B) → C. Listing only A first misses B’s simultaneous movement."
    ],
    "memory": "One stage can contain two vehicles.",
    "reasons": [
      "B shares the first stage with A; it is not the last vehicle.",
      "This leaves A out of the simultaneous first stage.",
      "A and B share the first stage; C follows them.",
      "C’s crossing movement waits for A and B, so C is not first."
    ]
  },
  "B026": {
    "scene": "A is turning left from the right-hand approach; B and C have other crossing movements.",
    "rule": "The supplied rule is to give way to approaching traffic from the left, not to demand an empty junction everywhere.",
    "steps": [
      "Read the one-way sign to understand which approach directions are possible.",
      "The source gives A priority because no traffic approaches from its left.",
      "B follows A and C is last. The presence of traffic opposite A does not make “no traffic from the opposite direction” a valid extra reason."
    ],
    "memory": "No traffic on the left does not mean no traffic anywhere.",
    "reasons": [
      "This preserves the complete staged order: A → B → C.",
      "The first mismatch is stage 1: this choice puts C there, but the diagram’s keyed order requires A. The complete order is A → B → C.",
      "The first mismatch is stage 1: this choice puts B there, but the diagram’s keyed order requires A. The complete order is A → B → C.",
      "The first mismatch is stage 2: this choice puts C there, but the diagram’s keyed order requires B. The complete order is A → B → C."
    ]
  },
  "B027": {
    "scene": "A is turning left from the right-hand approach; B and C have other crossing movements.",
    "rule": "The supplied rule is to give way to approaching traffic from the left, not to demand an empty junction everywhere.",
    "steps": [
      "Read the one-way sign to understand which approach directions are possible.",
      "The source gives A priority because no traffic approaches from its left.",
      "B follows A and C is last. The presence of traffic opposite A does not make “no traffic from the opposite direction” a valid extra reason."
    ],
    "memory": "No traffic on the left does not mean no traffic anywhere.",
    "reasons": [
      "This names C instead of A and does not identify the relevant left-side priority.",
      "This gives the exact relevant condition: A has no approaching traffic from its left.",
      "This adds an extra claim about no traffic opposite A; B is visibly on the opposite arm.",
      "An absence of prohibitory signs is not a reason to give B and C first place."
    ]
  },
  "B028": {
    "scene": "B approaches from the left of the picture; C travels upward; A turns across the junction.",
    "rule": "Going straight does not automatically override the priority-from-the-left rule.",
    "steps": [
      "The source gives B priority because it has no approaching traffic from its left.",
      "After B, C proceeds.",
      "A is last: B → C → A. Do not give C first place just because its arrow is straight."
    ],
    "memory": "A straight arrow is not an automatic right of way.",
    "reasons": [
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires B. The complete order is B → C → A.",
      "The first mismatch is stage 1: this choice puts C there, but the diagram’s keyed order requires B. The complete order is B → C → A.",
      "This preserves the complete staged order: B → C → A.",
      "The first mismatch is stage 2: this choice puts A there, but the diagram’s keyed order requires C. The complete order is B → C → A."
    ]
  },
  "B029": {
    "scene": "B approaches from the left of the picture; C travels upward; A turns across the junction.",
    "rule": "Going straight does not automatically override the priority-from-the-left rule.",
    "steps": [
      "The source gives B priority because it has no approaching traffic from its left.",
      "After B, C proceeds.",
      "A is last: B → C → A. Do not give C first place just because its arrow is straight."
    ],
    "memory": "A straight arrow is not an automatic right of way.",
    "reasons": [
      "A does not make the short left turn described here; trace its crossing arrow.",
      "C’s straight movement does not override B’s priority in this arrangement.",
      "This names B and the relevant absence of traffic from its left.",
      "B with this priority reason is one of the offered choices."
    ]
  },
  "B030": {
    "scene": "The blue mandatory straight-ahead arrow applies to A, but A’s drawn route bends into the side road.",
    "rule": "A mandatory direction must be followed even if another route looks physically accessible.",
    "steps": [
      "Find the blue circular arrow beside A.",
      "Compare its straight-ahead instruction with A’s curved path toward the side road.",
      "That mismatch identifies A as the violator. This is diagram-based reasoning; the printed key itself only names A."
    ],
    "memory": "Compare the sign’s instruction with the driver’s actual arrow.",
    "reasons": [
      "C is not the vehicle whose drawn path disobeys the mandatory straight-ahead sign.",
      "B is not the vehicle the source identifies as violating the direction sign.",
      "A turns away from the mandatory straight-ahead direction shown by its sign.",
      "A’s drawn manoeuvre does conflict with its blue mandatory-direction sign."
    ]
  },
  "B031": {
    "scene": "A is restricted from turning into the side road; B would cross the path of the first-stage traffic.",
    "rule": "Use the permitted paths, not a route prohibited by a turn sign.",
    "steps": [
      "Read A’s turn restriction before tracing any movement.",
      "The source permits C and A in the same first stage.",
      "B follows after they clear: (C and A) → B. Putting B first reverses the conflict order."
    ],
    "memory": "Prohibited turns are not alternative routes.",
    "reasons": [
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires C and A. The complete order is C and A → B.",
      "The first mismatch is stage 1: this choice puts C there, but the diagram’s keyed order requires C and A. The complete order is C and A → B.",
      "This preserves the complete staged order: C and A → B.",
      "The first mismatch is stage 1: this choice puts B there, but the diagram’s keyed order requires C and A. The complete order is C and A → B."
    ]
  },
  "B032": {
    "scene": "C now has a give-way sign; the general junction shape resembles Figure 24.",
    "rule": "Changing one sign can change the whole priority solution.",
    "steps": [
      "Locate the give-way sign on C’s approach: this is the important difference from Figure 24.",
      "The keyed first stage is A and B together.",
      "C is last. Copying the C-and-A first stage from the previous figure ignores the added sign."
    ],
    "memory": "Lookalike junctions: find the changed sign first.",
    "reasons": [
      "The first mismatch is stage 1: this choice puts B there, but the diagram’s keyed order requires A and B. The complete order is A and B → C.",
      "The first mismatch is stage 1: this choice puts A and C there, but the diagram’s keyed order requires A and B. The complete order is A and B → C.",
      "This preserves the complete staged order: A and B → C.",
      "The first mismatch is stage 1: this choice puts C there, but the diagram’s keyed order requires A and B. The complete order is A and B → C."
    ]
  },
  "B033": {
    "scene": "A and B follow crossing paths around a triangular island.",
    "rule": "In the supplied rules, priority is given to traffic approaching from the left.",
    "steps": [
      "Look from the conflicting approaches, rather than using the screen’s left edge as a shortcut.",
      "The source explicitly identifies A as coming from the left relative to B.",
      "The nearby island is a landmark, not the reason A has priority."
    ],
    "memory": "The reason is the relative approach, not the island.",
    "reasons": [
      "It names A but gives the wrong reason: proximity to the island is not the priority rule.",
      "The diagram does not give B a signed main-road priority over A.",
      "This gives both the correct vehicle and the relevant relative approach from the left.",
      "This gives B priority using an island-based explanation instead of the left-side rule."
    ]
  },
  "B034": {
    "scene": "A and B appear side by side on the upper approach, but this is not the one-way version of the scene.",
    "rule": "A driver must use a lawful approach lane; a green light does not make a wrong-side approach correct.",
    "steps": [
      "Compare A’s position with the no-entry indication on that side of the approach.",
      "B is the vehicle the key recognises as driving correctly; A’s approach is the problem.",
      "For the “incorrect” variation, reject “B is wrong”. For the positive variation, select B."
    ],
    "memory": "Check the lane before you look at the green light.",
    "reasons": [
      "A’s wrong approach is a true statement, so it is not the incorrect statement requested.",
      "B is the correctly driving vehicle; saying B is wrong is the false statement to select.",
      "This correctly distinguishes wrong A from correct B, so it is not the false statement.",
      "These referenced original statements say A is wrong; they are not the false claim about B."
    ]
  },
  "B035": {
    "scene": "A and B appear side by side on the upper approach, but this is not the one-way version of the scene.",
    "rule": "A driver must use a lawful approach lane; a green light does not make a wrong-side approach correct.",
    "steps": [
      "Compare A’s position with the no-entry indication on that side of the approach.",
      "B is the vehicle the key recognises as driving correctly; A’s approach is the problem.",
      "For the “incorrect” variation, reject “B is wrong”. For the positive variation, select B."
    ],
    "memory": "Check the lane before you look at the green light.",
    "reasons": [
      "A’s approach/lane is the problem in the two-way version of this scene.",
      "B is the correctly driving vehicle in the source key.",
      "This incorrectly includes A along with correct B.",
      "This statement is not the keyed identification of the correctly driving vehicle."
    ]
  },
  "B036": {
    "scene": "The downward one-way arrow is the key change from Figure 27.",
    "rule": "A one-way approach can permit both lanes to travel in the same direction, subject to the displayed turn restrictions.",
    "steps": [
      "Find the downward blue one-way arrow between the upper lanes.",
      "Both A and B can approach in that direction here.",
      "The source allows them to proceed simultaneously. Do not reuse the “only B” answer from the two-way version."
    ],
    "memory": "A one-way arrow can change which lanes are valid.",
    "reasons": [
      "A may proceed, but selecting only A leaves out B.",
      "B may proceed, but selecting only B leaves out A.",
      "The downward one-way arrow makes both approaches lawful here; both may proceed together.",
      "The simultaneous A-and-B movement is an offered valid answer."
    ]
  },
  "B037": {
    "scene": "B is behind A, with a solid boundary beside the traffic lanes.",
    "rule": "The source permits overtaking only if the solid line is not crossed.",
    "steps": [
      "First separate “may overtake” from “may cross the solid line”.",
      "A clear oncoming side would not remove the line restriction.",
      "Choose the answer that preserves both parts: overtaking may be possible, but crossing the solid line is not."
    ],
    "memory": "Permission to overtake is not permission to cross a solid line.",
    "reasons": [
      "A clear opposing lane does not cancel the solid-line restriction.",
      "This keeps the necessary condition: the overtake must not cross the solid line.",
      "This ignores both the solid boundary and approaching traffic.",
      "The key does not impose a total ban; it allows overtaking without crossing the solid line."
    ]
  },
  "B038": {
    "scene": "A has a give-way sign; B approaches from the upper one-way arm.",
    "rule": "Signed priority comes before a sequence based only on the junction’s shape.",
    "steps": [
      "Keep A behind the traffic to which its triangle requires it to give way.",
      "The source gives B priority over C in this arrangement.",
      "The complete keyed order is B → C → A. A is not first merely because it is on the right of the drawing."
    ],
    "memory": "The give-way triangle puts A at the end.",
    "reasons": [
      "This preserves the complete staged order: B → C → A.",
      "The first mismatch is stage 1: this choice puts C there, but the diagram’s keyed order requires B. The complete order is B → C → A.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires B. The complete order is B → C → A.",
      "The first mismatch is stage 2: this choice puts A there, but the diagram’s keyed order requires C. The complete order is B → C → A."
    ]
  },
  "B039": {
    "scene": "A has a give-way sign; B approaches from the upper one-way arm.",
    "rule": "Signed priority comes before a sequence based only on the junction’s shape.",
    "steps": [
      "Keep A behind the traffic to which its triangle requires it to give way.",
      "The source gives B priority over C in this arrangement.",
      "The complete keyed order is B → C → A. A is not first merely because it is on the right of the drawing."
    ],
    "memory": "The give-way triangle puts A at the end.",
    "reasons": [
      "A has the give-way triangle and must wait.",
      "B starts the keyed B → C → A sequence.",
      "C follows B; it is not the first vehicle here.",
      "This incorrectly promotes A, despite its give-way sign, into the first stage."
    ]
  },
  "B040": {
    "scene": "The turn-restriction signs control the permitted movements, but A no longer has the give-way sign seen in Figure 30.",
    "rule": "The same junction outline does not guarantee the same priority order when signs change.",
    "steps": [
      "Compare the signs with Figure 30: do not carry over its give-way obligation to A.",
      "Trace the permitted movements instead of inventing an exit excluded by a turn sign.",
      "The keyed order is A → B → C. Here A is first, whereas in Figure 30 A is last."
    ],
    "memory": "Same roads, changed signs, changed first vehicle.",
    "reasons": [
      "The first mismatch is stage 1: this choice puts C there, but the diagram’s keyed order requires A. The complete order is A → B → C.",
      "The first mismatch is stage 2: this choice puts C there, but the diagram’s keyed order requires B. The complete order is A → B → C.",
      "This preserves the complete staged order: A → B → C.",
      "The first mismatch is stage 1: this choice puts B there, but the diagram’s keyed order requires A. The complete order is A → B → C."
    ]
  },
  "B041": {
    "scene": "The turn-restriction signs control the permitted movements, but A no longer has the give-way sign seen in Figure 30.",
    "rule": "The same junction outline does not guarantee the same priority order when signs change.",
    "steps": [
      "Compare the signs with Figure 30: do not carry over its give-way obligation to A.",
      "Trace the permitted movements instead of inventing an exit excluded by a turn sign.",
      "The keyed order is A → B → C. Here A is first, whereas in Figure 30 A is last."
    ],
    "memory": "Same roads, changed signs, changed first vehicle.",
    "reasons": [
      "A starts the keyed A → B → C sequence in this changed sign arrangement.",
      "C is last, not first, in the source sequence.",
      "B follows A rather than starting the sequence.",
      "This incorrectly leaves first vehicle A out and promotes the later vehicles."
    ]
  },
  "B042": {
    "scene": "A has a give-way triangle and a one-way direction sign beside its approach.",
    "rule": "A one-way sign describes direction, not permission to ignore a give-way sign.",
    "steps": [
      "Identify A’s give-way triangle separately from its blue direction arrow.",
      "The source accepts B and C as the first stage.",
      "A follows after both: (B and C) → A. Naming just B or just C leaves out one permitted vehicle."
    ],
    "memory": "A direction sign is not a priority sign.",
    "reasons": [
      "This preserves the complete staged order: B and C → A.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires B and C. The complete order is B and C → A.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires B and C. The complete order is B and C → A.",
      "The first mismatch is stage 1: this choice puts B and A there, but the diagram’s keyed order requires B and C. The complete order is B and C → A."
    ]
  },
  "B043": {
    "scene": "A has a give-way triangle and a one-way direction sign beside its approach.",
    "rule": "A one-way sign describes direction, not permission to ignore a give-way sign.",
    "steps": [
      "Identify A’s give-way triangle separately from its blue direction arrow.",
      "The source accepts B and C as the first stage.",
      "A follows after both: (B and C) → A. Naming just B or just C leaves out one permitted vehicle."
    ],
    "memory": "A direction sign is not a priority sign.",
    "reasons": [
      "B is part of the first stage, but this omits C.",
      "C is part of the first stage, but this omits B.",
      "B and C form the first stage; A waits at its give-way sign.",
      "A has to give way, so it cannot replace C in the first pair."
    ]
  },
  "B044": {
    "scene": "B has a give-way marking, and A’s approach has a one-way sign without the give-way triangle seen in Figure 32.",
    "rule": "Read each sign for its own function; do not transfer a give-way obligation between similar pictures.",
    "steps": [
      "Put B last because of its give-way marking.",
      "The source sequence starts C, then A.",
      "Finish with B: C → A → B. The one-way sign at A controls approach direction, not an automatic first place."
    ],
    "memory": "Find the triangle; do not guess from the blue sign.",
    "reasons": [
      "This places C first and B last. The diagram requires C first and B last. Both endpoints match.",
      "This places B first and A last. The diagram requires C first and B last. At least one endpoint is changed.",
      "This places C first and A last. The diagram requires C first and B last. At least one endpoint is changed.",
      "This places A first and C last. The diagram requires C first and B last. At least one endpoint is changed."
    ]
  },
  "B045": {
    "scene": "B has a give-way marking, and A’s approach has a one-way sign without the give-way triangle seen in Figure 32.",
    "rule": "Read each sign for its own function; do not transfer a give-way obligation between similar pictures.",
    "steps": [
      "Put B last because of its give-way marking.",
      "The source sequence starts C, then A.",
      "Finish with B: C → A → B. The one-way sign at A controls approach direction, not an automatic first place."
    ],
    "memory": "Find the triangle; do not guess from the blue sign.",
    "reasons": [
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires C. The complete order is C → A → B.",
      "The first mismatch is stage 1: this choice puts B there, but the diagram’s keyed order requires C. The complete order is C → A → B.",
      "This preserves the complete staged order: C → A → B.",
      "The first mismatch is stage 1: this choice puts A there, but the diagram’s keyed order requires C. The complete order is C → A → B."
    ]
  },
  "B046": {
    "scene": "A and B are on different parts of the stretch controlled by a no-U-turn sign.",
    "rule": "The controlled area of a sign matters; physical distance alone is not a reason to ignore it.",
    "steps": [
      "Locate each vehicle relative to the sign’s regulated stretch.",
      "In this supplied scene, A is outside the restriction and may U-turn; B is subject to it.",
      "The “incorrect” variation deliberately offers the bad reason that B is far from the sign."
    ],
    "memory": "Read the regulated stretch, not the distance in centimetres.",
    "reasons": [
      "A is outside the sign’s regulatory area in this drawing and is the permitted vehicle.",
      "B is in the regulated stretch and is not permitted to U-turn.",
      "This wrongly includes B as well as permitted A.",
      "This wrongly rejects A’s permitted position outside the restriction."
    ]
  },
  "B047": {
    "scene": "A and B are on different parts of the stretch controlled by a no-U-turn sign.",
    "rule": "The controlled area of a sign matters; physical distance alone is not a reason to ignore it.",
    "steps": [
      "Locate each vehicle relative to the sign’s regulated stretch.",
      "In this supplied scene, A is outside the restriction and may U-turn; B is subject to it.",
      "The “incorrect” variation deliberately offers the bad reason that B is far from the sign."
    ],
    "memory": "Read the regulated stretch, not the distance in centimetres.",
    "reasons": [
      "This is the source’s valid explanation for A, not the incorrect claim requested.",
      "Distance alone does not exempt B from the sign: this is the false reason to reject.",
      "This correctly distinguishes permitted A from prohibited B.",
      "This correctly applies the sign to B, so it is not the false claim."
    ]
  },
  "B048": {
    "scene": "Both drawings show a U-turn at an intersection; only A has an explicit no-U-turn sign.",
    "rule": "An explicit sign is not the only source of a prohibition.",
    "steps": [
      "Recognise the intersection in both pictures.",
      "Picture A has the sign as an additional visible restriction.",
      "Picture B still does not permit the U-turn simply because that sign is absent. The source rejects the manoeuvre in both."
    ],
    "memory": "No sign does not mean no rule.",
    "reasons": [
      "A has both the explicit sign and the junction restriction; it is not permitted.",
      "B is still at an intersection even without the explicit sign.",
      "Both pictures are restricted: removing the sign in B does not remove the intersection.",
      "This incorrectly treats both manoeuvres as permitted."
    ]
  },
  "B049": {
    "scene": "Both drawings show a U-turn at an intersection; only A has an explicit no-U-turn sign.",
    "rule": "An explicit sign is not the only source of a prohibition.",
    "steps": [
      "Recognise the intersection in both pictures.",
      "Picture A has the sign as an additional visible restriction.",
      "Picture B still does not permit the U-turn simply because that sign is absent. The source rejects the manoeuvre in both."
    ],
    "memory": "No sign does not mean no rule.",
    "reasons": [
      "This correctly applies the no-U-turn sign in A; it is not the false statement.",
      "This is the false inference: absence of a no-U-turn sign does not permit a U-turn at the junction.",
      "This correctly identifies the common intersection restriction.",
      "This describes a junction-related overtaking restriction, not the false U-turn permission in B."
    ]
  },
  "B050": {
    "scene": "A intends to pass B beside a broken lane marking.",
    "rule": "A broken line is treated differently from the solid line in Figure 29.",
    "steps": [
      "Identify the marking as broken, not solid.",
      "The source permits the overtake and driving on that broken marking.",
      "Do not replace this with an unconditional ban just because the vehicle has to use the line during the manoeuvre."
    ],
    "memory": "Identify the line before judging the overtake.",
    "reasons": [
      "This unnecessarily says the vehicle may only drive on the line; that is not the keyed permission.",
      "The broken marking can be used during this permitted overtake.",
      "This imposes a solid-line style restriction on the broken marking.",
      "This bans an overtake that the source permits in the pictured broken-line situation."
    ]
  },
  "B051": {
    "scene": "A wants to overtake B while C approaches in the opposite direction.",
    "rule": "Do not start an overtaking manoeuvre that creates a conflict with approaching traffic.",
    "steps": [
      "Spot C first: it is the hazard changing the answer.",
      "A must abandon the overtake rather than attempt to beat C.",
      "Neither flashing high beams nor accelerating gives A priority over the oncoming vehicle."
    ],
    "memory": "You cannot create a safe gap by demanding that others stop.",
    "reasons": [
      "Speeding up does not give A priority or remove the approaching collision conflict.",
      "High beams cannot require C to surrender the opposing lane to A.",
      "Abandoning the overtake avoids moving into the conflict with approaching C.",
      "An immediate stop is not the source’s required response; giving up the overtake is."
    ]
  },
  "B052": {
    "scene": "A has a solid yellow edge marking; B has a broken yellow edge marking.",
    "rule": "In this booklet, solid yellow prohibits stopping and parking; broken yellow prohibits parking but allows stopping.",
    "steps": [
      "Read the manoeuvre word: stopping and parking are different questions.",
      "For stopping, only picture B is permitted.",
      "For parking, neither A nor B is permitted. A choice combining both prohibitions for B is therefore false."
    ],
    "memory": "Broken yellow: stop, do not park. Solid yellow: neither.",
    "reasons": [
      "A has the solid yellow marking, which prohibits stopping.",
      "B has the broken yellow marking: stopping is permitted, although parking is not.",
      "This incorrectly includes A in the stopping permission.",
      "This overlooks the stopping permission in B."
    ]
  },
  "B053": {
    "scene": "A has a solid yellow edge marking; B has a broken yellow edge marking.",
    "rule": "In this booklet, solid yellow prohibits stopping and parking; broken yellow prohibits parking but allows stopping.",
    "steps": [
      "Read the manoeuvre word: stopping and parking are different questions.",
      "For stopping, only picture B is permitted.",
      "For parking, neither A nor B is permitted. A choice combining both prohibitions for B is therefore false."
    ],
    "memory": "Broken yellow: stop, do not park. Solid yellow: neither.",
    "reasons": [
      "A’s solid yellow marking prohibits parking.",
      "B’s broken yellow marking also prohibits parking; its stopping permission is not parking permission.",
      "Both markings prohibit parking, despite their different stopping rules.",
      "This ignores the parking prohibition in both scenes."
    ]
  },
  "B054": {
    "scene": "A has a solid yellow edge marking; B has a broken yellow edge marking.",
    "rule": "In this booklet, solid yellow prohibits stopping and parking; broken yellow prohibits parking but allows stopping.",
    "steps": [
      "Read the manoeuvre word: stopping and parking are different questions.",
      "For stopping, only picture B is permitted.",
      "For parking, neither A nor B is permitted. A choice combining both prohibitions for B is therefore false."
    ],
    "memory": "Broken yellow: stop, do not park. Solid yellow: neither.",
    "reasons": [
      "This is true for A’s solid yellow marking, so it is not the incorrect statement.",
      "This is false for B: parking is prohibited, but stopping is allowed.",
      "This correctly separates the shared parking ban from B’s stopping permission.",
      "This correctly states B’s stopping permission, so it is not false."
    ]
  },
  "B055": {
    "scene": "Both vehicles are parked uphill, and their front wheels are angled differently.",
    "rule": "Uphill and downhill parking use different wheel orientations in the supplied scenes.",
    "steps": [
      "Establish that the scene is uphill before comparing it with the trucks in Figure 9.",
      "Compare the front wheels: the keyed vehicle is B, not A.",
      "Think about controlling a possible roll-back at the kerb, rather than choosing a wheel angle just because it looks straight."
    ],
    "memory": "Name the slope before choosing the wheel position.",
    "reasons": [
      "B has the correct wheel orientation for the supplied uphill scene.",
      "A’s wheel orientation is not the one accepted for this uphill situation.",
      "Wheel angle matters when parking on a slope; it is the feature being tested.",
      "The two different wheel orientations are not both accepted for the same slope."
    ]
  },
  "B056": {
    "scene": "The two pictures show different junction-control requirements.",
    "rule": "A mandatory stop is unconditional; a give-way requirement depends on the need to yield.",
    "steps": [
      "Picture B requires a complete stop, even when you see no approaching vehicle.",
      "Do not reduce that requirement to “slow down” or “stop only if another vehicle appears”.",
      "The blanket statement that both A and B may proceed without stopping is the false one."
    ],
    "memory": "STOP means stop, not merely check for cars.",
    "reasons": [
      "The unconditional stop requirement belongs to B, not A.",
      "B requires a complete stop even if the junction appears empty.",
      "This wrongly extends the mandatory-stop requirement to A.",
      "This ignores B’s mandatory stop."
    ]
  },
  "B057": {
    "scene": "The two pictures show different junction-control requirements.",
    "rule": "A mandatory stop is unconditional; a give-way requirement depends on the need to yield.",
    "steps": [
      "Picture B requires a complete stop, even when you see no approaching vehicle.",
      "Do not reduce that requirement to “slow down” or “stop only if another vehicle appears”.",
      "The blanket statement that both A and B may proceed without stopping is the false one."
    ],
    "memory": "STOP means stop, not merely check for cars.",
    "reasons": [
      "This is a conditional safe passage statement for A, not the false claim about both pictures.",
      "This is true for B: it must stop under all circumstances.",
      "This is false because B must stop even when no vehicles are visible.",
      "This describes yielding at A; it does not remove B’s stop requirement."
    ]
  },
  "B058": {
    "scene": "The two pictures show different junction-control requirements.",
    "rule": "A mandatory stop is unconditional; a give-way requirement depends on the need to yield.",
    "steps": [
      "Picture B requires a complete stop, even when you see no approaching vehicle.",
      "Do not reduce that requirement to “slow down” or “stop only if another vehicle appears”.",
      "The blanket statement that both A and B may proceed without stopping is the false one."
    ],
    "memory": "STOP means stop, not merely check for cars.",
    "reasons": [
      "Slowing and stopping only when needed is weaker than B’s mandatory stop.",
      "B’s stop requirement does not depend on whether another vehicle approaches.",
      "This preserves the unconditional complete-stop requirement.",
      "The unconditional-stop answer is explicitly offered."
    ]
  },
  "B059": {
    "scene": "The signal positions are numbered: 1 at the top, 2 in the middle, and 3 below; 4 is the side signal.",
    "rule": "The main lights are red, amber, green from top to bottom; read flashing amber as its own condition.",
    "steps": [
      "Map the fixed figure numbers first: 1 red, 2 amber, 3 green.",
      "At red, stop before the stop line; “at the crossing” is not the same precise stopping point.",
      "For the specific flashing-amber left-turn question, slow down and turn carefully. Green is not a red light that prohibits all passage."
    ],
    "memory": "Number → colour → meaning → stopping position.",
    "reasons": [
      "This swaps the amber and green positions.",
      "This moves green to the top and red to the bottom, contrary to the main signal layout.",
      "The fixed order is top red, middle amber, bottom green.",
      "This puts amber at the top and red in the middle, which mismatches the numbered signal."
    ]
  },
  "B060": {
    "scene": "The signal positions are numbered: 1 at the top, 2 in the middle, and 3 below; 4 is the side signal.",
    "rule": "The main lights are red, amber, green from top to bottom; read flashing amber as its own condition.",
    "steps": [
      "Map the fixed figure numbers first: 1 red, 2 amber, 3 green.",
      "At red, stop before the stop line; “at the crossing” is not the same precise stopping point.",
      "For the specific flashing-amber left-turn question, slow down and turn carefully. Green is not a red light that prohibits all passage."
    ],
    "memory": "Number → colour → meaning → stopping position.",
    "reasons": [
      "Stopping at the crossing can place the vehicle beyond its required stopping line.",
      "The intersection itself is not the precise stopping position required by the answer.",
      "Stop before the stopping line when main light 1 is red.",
      "Red does not permit slow passage through the controlled area."
    ]
  },
  "B061": {
    "scene": "The signal positions are numbered: 1 at the top, 2 in the middle, and 3 below; 4 is the side signal.",
    "rule": "The main lights are red, amber, green from top to bottom; read flashing amber as its own condition.",
    "steps": [
      "Map the fixed figure numbers first: 1 red, 2 amber, 3 green.",
      "At red, stop before the stop line; “at the crossing” is not the same precise stopping point.",
      "For the specific flashing-amber left-turn question, slow down and turn carefully. Green is not a red light that prohibits all passage."
    ],
    "memory": "Number → colour → meaning → stopping position.",
    "reasons": [
      "This matches flashing amber in this question: reduce speed and make the left turn carefully.",
      "The question does not impose a stop-then-go instruction for this flashing amber.",
      "This treats the flashing amber as requiring a wait for green.",
      "The question is about a left turn, not permission to continue forward."
    ]
  },
  "B062": {
    "scene": "The signal positions are numbered: 1 at the top, 2 in the middle, and 3 below; 4 is the side signal.",
    "rule": "The main lights are red, amber, green from top to bottom; read flashing amber as its own condition.",
    "steps": [
      "Map the fixed figure numbers first: 1 red, 2 amber, 3 green.",
      "At red, stop before the stop line; “at the crossing” is not the same precise stopping point.",
      "For the specific flashing-amber left-turn question, slow down and turn carefully. Green is not a red light that prohibits all passage."
    ],
    "memory": "Number → colour → meaning → stopping position.",
    "reasons": [
      "Light 1 is red, so it means stop and no passage.",
      "Light 2 is amber, not the main green proceed signal.",
      "Light 3 is green, so this incorrectly assigns the red-light meaning to it.",
      "This is not the keyed meaning of the main red signal; do not infer it from the side light number."
    ]
  },
  "B063": {
    "scene": "The signal positions are numbered: 1 at the top, 2 in the middle, and 3 below; 4 is the side signal.",
    "rule": "The main lights are red, amber, green from top to bottom; read flashing amber as its own condition.",
    "steps": [
      "Map the fixed figure numbers first: 1 red, 2 amber, 3 green.",
      "At red, stop before the stop line; “at the crossing” is not the same precise stopping point.",
      "For the specific flashing-amber left-turn question, slow down and turn carefully. Green is not a red light that prohibits all passage."
    ],
    "memory": "Number → colour → meaning → stopping position.",
    "reasons": [
      "This correctly describes red light 1; the question asks for an incorrect statement.",
      "This describes the transition role of amber light 2 and is not the keyed false statement.",
      "Light 3 is green, so saying it forbids passage under all circumstances is the false claim.",
      "This is consistent with light 3 being green, so it is not the false statement requested."
    ]
  },
  "B064": {
    "scene": "A is an uncontrolled pedestrian crossing; B has pedestrian-signal control.",
    "rule": "Pedestrian priority must be read together with whether a crossing is signal-controlled.",
    "steps": [
      "At A, reduce speed and stop to give way to pedestrians crossing.",
      "At B, check the signals: when the pedestrian crossing signal allows pedestrians to cross, vehicles stop for them.",
      "Do not use one blanket “slow and continue” answer for both pictures. That erases the control difference being tested."
    ],
    "memory": "Identify the control before deciding whether to proceed.",
    "reasons": [
      "The pedestrian crossing signal permits pedestrians to cross, so vehicles must stop for them.",
      "Following the preceding vehicle through ignores the pedestrians’ permitted crossing phase.",
      "This reverses the priority during the pedestrian crossing phase.",
      "Stopping for pedestrians is already offered as the valid response."
    ]
  },
  "B065": {
    "scene": "A is an uncontrolled pedestrian crossing; B has pedestrian-signal control.",
    "rule": "Pedestrian priority must be read together with whether a crossing is signal-controlled.",
    "steps": [
      "At A, reduce speed and stop to give way to pedestrians crossing.",
      "At B, check the signals: when the pedestrian crossing signal allows pedestrians to cross, vehicles stop for them.",
      "Do not use one blanket “slow and continue” answer for both pictures. That erases the control difference being tested."
    ],
    "memory": "Identify the control before deciding whether to proceed.",
    "reasons": [
      "This misses the reduce-speed action before yielding at the crossing.",
      "This preserves both required actions: reduce speed and stop to give way to crossing pedestrians.",
      "This leaves out stopping and yielding when pedestrians are crossing.",
      "The other statements are not all correct: some omit slowing or the required stop."
    ]
  },
  "B066": {
    "scene": "A is an uncontrolled pedestrian crossing; B has pedestrian-signal control.",
    "rule": "Pedestrian priority must be read together with whether a crossing is signal-controlled.",
    "steps": [
      "At A, reduce speed and stop to give way to pedestrians crossing.",
      "At B, check the signals: when the pedestrian crossing signal allows pedestrians to cross, vehicles stop for them.",
      "Do not use one blanket “slow and continue” answer for both pictures. That erases the control difference being tested."
    ],
    "memory": "Identify the control before deciding whether to proceed.",
    "reasons": [
      "This is the pedestrian-priority statement for uncontrolled A, so it is not the false statement.",
      "This correctly recognises signal control in B and is not the false statement.",
      "This false blanket rule ignores the mandatory yielding/stopping distinction between A and B.",
      "This qualified statement for B is not the false statement applying one rule to both crossings."
    ]
  }
};
