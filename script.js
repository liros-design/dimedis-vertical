// === QUESTION ===
gsap.fromTo(".question-text",
  { x: -32, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 0,
    ease: "power3.out",
    repeat: -1,
    repeatDelay: 28, // 30s total - 2s animation = 28s
    onRepeat: () => gsap.set(".question-text", { x: -32, opacity: 0 })
  }
);

// === ANSWER 1 ===
gsap.fromTo(".answer-1",
  { x: -32, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 1,
    ease: "power3.out",
    repeat: -1,
    repeatDelay: 27, // 30 - (1 + 2)
    onRepeat: () => gsap.set(".answer-1", { x: -32, opacity: 0 })
  }
);

// === ANSWER 2 ===
gsap.fromTo(".answer-2",
  { x: -32, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 2,
    ease: "power3.out",
    repeat: -1,
    repeatDelay: 26,
    onRepeat: () => gsap.set(".answer-2", { x: -32, opacity: 0 })
  }
);

// === ANSWER 3 ===
gsap.fromTo(".answer-3",
  { x: -32, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 3,
    ease: "power3.out",
    repeat: -1,
    repeatDelay: 25,
    onRepeat: () => gsap.set(".answer-3", { x: -32, opacity: 0 })
  }
);

// === LOADER ===
gsap.fromTo(".loader",
  { scaleX: 1, transformOrigin: "left center" },
  {
    scaleX: 0,
    duration: 24,  // shrink over 24s
    delay: 5,      // starts after answers finish
    ease: "linear",
    repeat: -1,
    repeatDelay: 1 // 30s total cycle: 5s before + 24s shrink + 1s buffer
  }
);
