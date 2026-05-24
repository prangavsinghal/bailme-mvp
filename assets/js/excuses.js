export const EXCUSES = [
  // Work / Cancel / formal
  { id: 1, category: 'Work', intent: 'Cancel', tone: 'formal', text: "I need to cancel — we've had an urgent blocker on a live issue and I'm being pulled into a fix." },
  { id: 3, category: 'Work', intent: 'Cancel', tone: 'formal', text: 'Apologies, a critical dependency slipped and I have to stay on the war-room call. Can we skip today?' },
  { id: 41, category: 'Work', intent: 'Cancel', tone: 'formal', text: 'Need to cancel — an unplanned all-hands was just scheduled over this slot.' },
  { id: 42, category: 'Work', intent: 'Cancel', tone: 'formal', text: 'Apologies for the short notice — a compliance review came up and attendance is mandatory.' },
  { id: 43, category: 'Work', intent: 'Cancel', tone: 'formal', text: "Have to cancel today; our deployment window moved up and I'm required on call." },

  // Work / Cancel / casual
  { id: 2, category: 'Work', intent: 'Cancel', tone: 'casual', text: "Gotta drop — prod just hiccuped and I'm on deck to help. Rain check?" },
  { id: 44, category: 'Work', intent: 'Cancel', tone: 'casual', text: 'Something urgent just landed on my plate. Can we push this?' },
  { id: 45, category: 'Work', intent: 'Cancel', tone: 'casual', text: 'Got pulled into an incident — can we reschedule?' },
  { id: 46, category: 'Work', intent: 'Cancel', tone: 'casual', text: 'My afternoon just got hijacked by an escalation. Sorry about this!' },
  { id: 47, category: 'Work', intent: 'Cancel', tone: 'casual', text: 'Calendar blew up. Can we move this to tomorrow?' },

  // Work / Delay / formal
  { id: 4, category: 'Work', intent: 'Delay', tone: 'formal', text: 'Running 20–25 mins late — a standup overran due to escalations. Appreciate your patience.' },
  { id: 6, category: 'Work', intent: 'Delay', tone: 'formal', text: 'Caught behind an impromptu review with leadership. Joining shortly; thanks for holding.' },
  { id: 48, category: 'Work', intent: 'Delay', tone: 'formal', text: 'Running approximately 10 minutes late due to an overlapping briefing. Will join shortly.' },
  { id: 49, category: 'Work', intent: 'Delay', tone: 'formal', text: "Delayed by a prior call that's running over. ETA 15 minutes." },
  { id: 50, category: 'Work', intent: 'Delay', tone: 'formal', text: "Please start without me — previous meeting is wrapping up. I'll join in 10." },

  // Work / Delay / casual
  { id: 5, category: 'Work', intent: 'Delay', tone: 'casual', text: 'Stuck in a spillover standup. Will join in ~15. Sorry!' },
  { id: 37, category: 'Work', intent: 'Delay', tone: 'casual', text: 'Stuck near Silk Board thanks to rain. 15–20 mins late.' },
  { id: 51, category: 'Work', intent: 'Delay', tone: 'casual', text: 'Previous call is dragging on. Give me 10?' },
  { id: 52, category: 'Work', intent: 'Delay', tone: 'casual', text: 'Back-to-back ran over. Jumping in now.' },
  { id: 53, category: 'Work', intent: 'Delay', tone: 'casual', text: 'One more thing to wrap up — two minutes, promise.' },

  // Work / Reschedule / formal
  { id: 7, category: 'Work', intent: 'Reschedule', tone: 'formal', text: 'Could we move this to tomorrow same time? A customer call just landed on this slot.' },
  { id: 9, category: 'Work', intent: 'Reschedule', tone: 'formal', text: "Requesting a reschedule — there's a release go/no-go meeting I must attend." },
  { id: 39, category: 'Work', intent: 'Reschedule', tone: 'formal', text: 'Internet is unstable due to the rains. Requesting to move this to later today.' },
  { id: 54, category: 'Work', intent: 'Reschedule', tone: 'formal', text: 'Could we move this? A board-level review has been added to my calendar.' },
  { id: 55, category: 'Work', intent: 'Reschedule', tone: 'formal', text: "Requesting a reschedule — a conflicting priority has come up that I can't delegate." },

  // Work / Reschedule / casual
  { id: 8, category: 'Work', intent: 'Reschedule', tone: 'casual', text: 'Mind if we shift to tomorrow? Client pinged and I have to hop on.' },
  { id: 56, category: 'Work', intent: 'Reschedule', tone: 'casual', text: 'Something came up — can we do this tomorrow instead?' },
  { id: 57, category: 'Work', intent: 'Reschedule', tone: 'casual', text: 'My afternoon got hijacked. Tomorrow same time?' },
  { id: 58, category: 'Work', intent: 'Reschedule', tone: 'casual', text: 'Running back-to-back today. Any chance we can push this?' },
  { id: 59, category: 'Work', intent: 'Reschedule', tone: 'casual', text: "This week's gotten hectic. Can we move to next week?" },

  // Social / Cancel / formal
  { id: 11, category: 'Social', intent: 'Cancel', tone: 'formal', text: "I'll have to pass this evening — a family matter came up unexpectedly." },
  { id: 60, category: 'Social', intent: 'Cancel', tone: 'formal', text: "I regret I won't be able to make it today — something came up at home." },
  { id: 61, category: 'Social', intent: 'Cancel', tone: 'formal', text: "Apologies — a prior engagement I couldn't reschedule has come up this evening." },
  { id: 62, category: 'Social', intent: 'Cancel', tone: 'formal', text: "I'll have to skip tonight — not feeling well enough to head out." },
  { id: 63, category: 'Social', intent: 'Cancel', tone: 'formal', text: 'Unfortunately, a work commitment has run into my evening. Apologies for the inconvenience.' },

  // Social / Cancel / casual
  { id: 10, category: 'Social', intent: 'Cancel', tone: 'casual', text: "I'm crashing post-work today. Can we skip tonight? I owe you one." },
  { id: 12, category: 'Social', intent: 'Cancel', tone: 'casual', text: "Weather's gone sideways and traffic is nuts. Let's do another day?" },
  { id: 38, category: 'Social', intent: 'Cancel', tone: 'casual', text: "Power cut here and the router's dead. Let's skip tonight?" },
  { id: 64, category: 'Social', intent: 'Cancel', tone: 'casual', text: "Something came up last minute — let's reschedule soon!" },
  { id: 65, category: 'Social', intent: 'Cancel', tone: 'casual', text: "Not going to make it today, sorry. Let's plan something next week?" },

  // Social / Delay / formal
  { id: 14, category: 'Social', intent: 'Delay', tone: 'formal', text: "Delayed by ~15 minutes due to traffic. I'll update ETA shortly." },
  { id: 66, category: 'Social', intent: 'Delay', tone: 'formal', text: "I'll be approximately 20 minutes late — please go ahead and I'll join shortly." },
  { id: 67, category: 'Social', intent: 'Delay', tone: 'formal', text: "Running behind by about 15 minutes due to an errand. I'll be there soon." },
  { id: 68, category: 'Social', intent: 'Delay', tone: 'formal', text: 'Slight delay on my end — should reach by [time] at the latest.' },
  { id: 69, category: 'Social', intent: 'Delay', tone: 'formal', text: 'Behind schedule by about 20 minutes — leaving now.' },

  // Social / Delay / casual
  { id: 13, category: 'Social', intent: 'Delay', tone: 'casual', text: 'Running 20 late — the cab took a detour thanks to rain.' },
  { id: 15, category: 'Social', intent: 'Delay', tone: 'casual', text: 'Finding parking is a side quest today. Five–ten mins!' },
  { id: 70, category: 'Social', intent: 'Delay', tone: 'casual', text: 'On my way, just got a bit held up. 15 mins?' },
  { id: 71, category: 'Social', intent: 'Delay', tone: 'casual', text: "Traffic's being dramatic today. ETA 20." },
  { id: 72, category: 'Social', intent: 'Delay', tone: 'casual', text: 'Stuck but moving — be there in 10!' },

  // Social / Reschedule / formal
  { id: 17, category: 'Social', intent: 'Reschedule', tone: 'formal', text: 'Could we move to Saturday afternoon? My schedule shifted last minute.' },
  { id: 73, category: 'Social', intent: 'Reschedule', tone: 'formal', text: 'Could we move our plans to another day? Something unavoidable came up.' },
  { id: 74, category: 'Social', intent: 'Reschedule', tone: 'formal', text: 'I need to reschedule — a family matter needs my attention this evening.' },
  { id: 75, category: 'Social', intent: 'Reschedule', tone: 'formal', text: 'Would it be possible to push this to the weekend? My week got unexpectedly busy.' },
  { id: 76, category: 'Social', intent: 'Reschedule', tone: 'formal', text: "Apologies, but I'll need to reschedule — something urgent has come up." },

  // Social / Reschedule / casual
  { id: 16, category: 'Social', intent: 'Reschedule', tone: 'casual', text: 'Heads up — a work thing spilled over. Can we push to the weekend?' },
  { id: 18, category: 'Social', intent: 'Reschedule', tone: 'casual', text: 'Got roped into something at home. Can we do Sunday brunch instead?' },
  { id: 40, category: 'Social', intent: 'Reschedule', tone: 'casual', text: 'Delhi traffic + random protest near Ring Road. Can we do tomorrow?' },
  { id: 77, category: 'Social', intent: 'Reschedule', tone: 'casual', text: "Any chance we can move this? My week just got crazy." },
  { id: 78, category: 'Social', intent: 'Reschedule', tone: 'casual', text: "Let's rain-check this one? My weekend plans changed." },

  // Family / Cancel / formal
  { id: 19, category: 'Family', intent: 'Cancel', tone: 'formal', text: "I won't be able to make it today — there's an urgent task at work I can't step away from." },
  { id: 21, category: 'Family', intent: 'Cancel', tone: 'formal', text: 'Need to cancel — not keeping well and want to avoid passing anything on.' },
  { id: 79, category: 'Family', intent: 'Cancel', tone: 'formal', text: "I won't be able to join today — I've been caught up with work that can't wait." },
  { id: 80, category: 'Family', intent: 'Cancel', tone: 'formal', text: 'Need to cancel — have a prior commitment I forgot to flag earlier.' },
  { id: 81, category: 'Family', intent: 'Cancel', tone: 'formal', text: "Apologies, can't make it today. Something urgent came up on my end." },

  // Family / Cancel / casual
  { id: 20, category: 'Family', intent: 'Cancel', tone: 'casual', text: "Sorry, something blew up at work. Let's skip today — I'll come by tomorrow." },
  { id: 82, category: 'Family', intent: 'Cancel', tone: 'casual', text: "Can't come today, something came up. Will catch up soon!" },
  { id: 83, category: 'Family', intent: 'Cancel', tone: 'casual', text: "Work's gone crazy this week. Can I come over this weekend instead?" },
  { id: 84, category: 'Family', intent: 'Cancel', tone: 'casual', text: "Not feeling too great — going to rest up today." },
  { id: 85, category: 'Family', intent: 'Cancel', tone: 'casual', text: "Got caught up with something. Can we plan for the weekend?" },

  // Family / Delay / formal
  { id: 23, category: 'Family', intent: 'Delay', tone: 'formal', text: 'Running late due to errands taking longer than planned. Reaching soon.' },
  { id: 86, category: 'Family', intent: 'Delay', tone: 'formal', text: 'Running a bit late — should reach in about 20 minutes.' },
  { id: 87, category: 'Family', intent: 'Delay', tone: 'formal', text: 'Delayed by some errands. Will be there by [time].' },
  { id: 88, category: 'Family', intent: 'Delay', tone: 'formal', text: 'Just wrapped up a task that took longer than expected. On my way.' },
  { id: 89, category: 'Family', intent: 'Delay', tone: 'formal', text: 'Slight delay — caught in some traffic. Be there shortly.' },

  // Family / Delay / casual
  { id: 22, category: 'Family', intent: 'Delay', tone: 'casual', text: 'Stuck at the chemist; will be 15–20 late.' },
  { id: 24, category: 'Family', intent: 'Delay', tone: 'casual', text: 'Traffic near the market is chaos. Ten mins tops.' },
  { id: 90, category: 'Family', intent: 'Delay', tone: 'casual', text: 'Two minutes away, promise!' },
  { id: 91, category: 'Family', intent: 'Delay', tone: 'casual', text: 'Just leaving now — be there soon.' },
  { id: 92, category: 'Family', intent: 'Delay', tone: 'casual', text: 'Got held up at the office. 20 mins, tops.' },

  // Family / Reschedule / formal
  { id: 25, category: 'Family', intent: 'Reschedule', tone: 'formal', text: "Can we move this to tomorrow morning? I have a prior commitment I can't shift." },
  { id: 27, category: 'Family', intent: 'Reschedule', tone: 'formal', text: 'Requesting a reschedule to Sunday — family engagement timings changed.' },
  { id: 93, category: 'Family', intent: 'Reschedule', tone: 'formal', text: 'Can we move this to another day? I have a commitment that conflicts.' },
  { id: 94, category: 'Family', intent: 'Reschedule', tone: 'formal', text: 'Could we shift this to the weekend? Work has spilled over into the evening.' },
  { id: 95, category: 'Family', intent: 'Reschedule', tone: 'formal', text: 'Need to reschedule — something came up that needs my immediate attention.' },

  // Family / Reschedule / casual
  { id: 26, category: 'Family', intent: 'Reschedule', tone: 'casual', text: 'Plan change at my end — can we do it after dinner instead?' },
  { id: 96, category: 'Family', intent: 'Reschedule', tone: 'casual', text: 'Work got crazy. Can we push this to the weekend?' },
  { id: 97, category: 'Family', intent: 'Reschedule', tone: 'casual', text: 'Something came up — can we do this tomorrow instead?' },
  { id: 98, category: 'Family', intent: 'Reschedule', tone: 'casual', text: "Going to have to skip today. Let's plan for Sunday?" },
  { id: 99, category: 'Family', intent: 'Reschedule', tone: 'casual', text: 'Plans changed on my end — can we reschedule for later this week?' },

  // Health / Cancel / formal
  { id: 28, category: 'Health', intent: 'Cancel', tone: 'formal', text: "I'll skip today — not feeling great and want to rest it out." },
  { id: 30, category: 'Health', intent: 'Cancel', tone: 'formal', text: "Canceling for today — doctor advised rest. Let's reconnect tomorrow." },
  { id: 100, category: 'Health', intent: 'Cancel', tone: 'formal', text: "I'll have to cancel — doctor advised rest and I don't want to risk spreading anything." },
  { id: 101, category: 'Health', intent: 'Cancel', tone: 'formal', text: "Not keeping well today, so I'll have to give this a miss. Apologies." },
  { id: 102, category: 'Health', intent: 'Cancel', tone: 'formal', text: "Need to cancel — experiencing some discomfort and it's best I stay in." },

  // Health / Cancel / casual
  { id: 29, category: 'Health', intent: 'Cancel', tone: 'casual', text: 'Bit under the weather. Tapping out tonight.' },
  { id: 103, category: 'Health', intent: 'Cancel', tone: 'casual', text: "Not feeling great — going to skip today. Sorry!" },
  { id: 104, category: 'Health', intent: 'Cancel', tone: 'casual', text: 'Coming down with something. Going to rest up.' },
  { id: 105, category: 'Health', intent: 'Cancel', tone: 'casual', text: 'Under the weather — catch you next time?' },
  { id: 106, category: 'Health', intent: 'Cancel', tone: 'casual', text: "Body's not cooperating today. Rain check?" },

  // Health / Delay / formal
  { id: 32, category: 'Health', intent: 'Delay', tone: 'formal', text: 'Will be slightly delayed — picking up medication on the way.' },
  { id: 107, category: 'Health', intent: 'Delay', tone: 'formal', text: 'Running behind — stopped at the clinic and it took longer than expected.' },
  { id: 108, category: 'Health', intent: 'Delay', tone: 'formal', text: 'Will be approximately 15 minutes late — picking up a prescription.' },
  { id: 109, category: 'Health', intent: 'Delay', tone: 'formal', text: 'Delayed due to a medical appointment running over. On my way now.' },
  { id: 110, category: 'Health', intent: 'Delay', tone: 'formal', text: "Slight delay — doctor's office was backed up. Leaving now." },

  // Health / Delay / casual
  { id: 31, category: 'Health', intent: 'Delay', tone: 'casual', text: 'Pharmacy queue was a saga. Running 15 late.' },
  { id: 33, category: 'Health', intent: 'Delay', tone: 'casual', text: 'Quick clinic stop took longer. On my way!' },
  { id: 111, category: 'Health', intent: 'Delay', tone: 'casual', text: "Doc's office is packed today. Running 20 late." },
  { id: 112, category: 'Health', intent: 'Delay', tone: 'casual', text: 'Just leaving the clinic — 15 mins away.' },
  { id: 113, category: 'Health', intent: 'Delay', tone: 'casual', text: 'Medical errand took longer than expected. On my way!' },

  // Health / Reschedule / formal
  { id: 34, category: 'Health', intent: 'Reschedule', tone: 'formal', text: "Could we move this to tomorrow? I'd like to rest and avoid spreading anything." },
  { id: 36, category: 'Health', intent: 'Reschedule', tone: 'formal', text: 'Doctor asked me to avoid stepping out today — can we shift to the weekend?' },
  { id: 114, category: 'Health', intent: 'Reschedule', tone: 'formal', text: "Could we move this? I've been advised to rest and won't be at my best." },
  { id: 115, category: 'Health', intent: 'Reschedule', tone: 'formal', text: "Need to reschedule — I'm not well and want to be fully present when we meet." },
  { id: 116, category: 'Health', intent: 'Reschedule', tone: 'formal', text: "Could we push this to tomorrow? I'd prefer to be at 100% for this." },

  // Health / Reschedule / casual
  { id: 35, category: 'Health', intent: 'Reschedule', tone: 'casual', text: 'Energy levels are meh today. Can we do this tomorrow evening?' },
  { id: 117, category: 'Health', intent: 'Reschedule', tone: 'casual', text: "Not at my best today — can we do this tomorrow?" },
  { id: 118, category: 'Health', intent: 'Reschedule', tone: 'casual', text: 'Need to reschedule — taking a sick day.' },
  { id: 119, category: 'Health', intent: 'Reschedule', tone: 'casual', text: "Body's out of commission today. Tomorrow work for you?" },
  { id: 120, category: 'Health', intent: 'Reschedule', tone: 'casual', text: 'Not well, need to move this. Can we do later this week?' },
];
