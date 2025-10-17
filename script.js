const tl = gsap.timeline({ repeat: -1 });

// === Question ===
tl.fromTo(
  ".question-text",
  { x: -32, opacity: 0 },
  { x: 0, opacity: 1, duration: 2, ease: "power3.out" },
  0
);

// === Answers 1,2,3 staggered ===
tl.fromTo(
  [".answer-1", ".answer-2", ".answer-3"],
  { x: -32, opacity: 0 },
  { x: 0, opacity: 1, duration: 2, stagger: 1, ease: "power3.out" },
  1
);

// === Loader shrink ===
tl.fromTo(
  ".loader",
  { scaleX: 1, transformOrigin: "left center" },
  { scaleX: 0, duration: 24, ease: "linear" },
  5
);

// === Highlight correct answer and fade out others ===
tl.to(".answer-3", 
  { scale: 1.3, fontWeight: 800, duration: 0.5, ease: "power2.out" },
  29 // immediately after loader ends
);

tl.to([".answer-1", ".answer-2"], 
  { opacity: 0, duration: 0.5, ease: "power2.out" }, 
  29
);

// === Hide question and correct answer after 5s ===
tl.to([".question-text", ".answer-3", ".loader"], 
  { opacity: 0, duration: 0.5 }, 
  34 // 5s after highlight starts
);

// === Show custom image in center ===
tl.fromTo(
  ".custom-image",
  { opacity: 0, scale: 0.5 },
  { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
  34
);

tl.to(".custom-image", 
  { opacity: 0, duration: 0.5, delay: 5 }, // keep 5s visible
  34
);

// === Reset states for next cycle ===
tl.set(
  [".question-text", ".answer-1", ".answer-2", ".answer-3", ".loader"],
  { x: -32, opacity: 0, scale: 1, fontWeight: 400 }
);
tl.set(".custom-image", { scale: 0.5, opacity: 0 });
