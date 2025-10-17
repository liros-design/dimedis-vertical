// timeline: single source of truth for all timings
const tl = gsap.timeline({ repeat: -1 });

// 0s: question animates in (0 -> 2)
tl.fromTo(
  ".question-text",
  { x: -32, opacity: 0 },
  { x: 0, opacity: 1, duration: 2, ease: "power3.out" },
  0 // start at 0s
);

// 1s: answers start with stagger 1s (answer-1 @1s, answer-2 @2s, answer-3 @3s).
// each answer has duration 2s, so last answer ends at 5s
tl.fromTo(
  [".answer-1", ".answer-2", ".answer-3"],
  { x: -32, opacity: 0 },
  { x: 0, opacity: 1, duration: 2, stagger: 1, ease: "power3.out" },
  1 // start the answers block at 1s
);

// 5s: loader starts shrinking, duration 24s -> ends at 29s
tl.fromTo(
  ".loader",
  { scaleX: 1, transformOrigin: "left center" },
  { scaleX: 0, duration: 24, ease: "linear" },
  5 // start at 5s
);

// 29s: immediately hide and reset the texts and loader so next loop starts cleanly.
// set() runs instantly at the given absolute time position.
tl.set([ ".question-text", ".answer-1", ".answer-2", ".answer-3" ], 
       { x: -32, opacity: 0 }, 
       29 ); // at 29s

tl.set(".loader", { scaleX: 1 }, 29); // reset loader visually at 29s

// timeline will then loop back to 0 and play again
