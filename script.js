const tl = gsap.timeline({ repeat: -1 });

// 0s: question slides in
tl.fromTo(".question-text", 
  { x: -32, opacity: 0 }, 
  { x: 0, opacity: 1, duration: 2, ease: "power3.out" }, 
  0
);

// 1-3s: answers appear staggered
tl.fromTo(
  [".answer-1", ".answer-2", ".answer-3"], 
  { x: -32, opacity: 0 }, 
  { x: 0, opacity: 1, duration: 2, stagger: 1, ease: "power3.out" }, 
  1
);

// 5s: loader starts shrinking
tl.fromTo(
  ".loader",
  { scaleX: 1, transformOrigin: "left center" },
  { scaleX: 0, duration: 24, ease: "linear" },
  5
);

// 29s: highlight correct answer, fade out others
tl.to(".answer-3", 
  { x: 32, y:-16, fontWeight: 800, duration: 0.5, ease: "power2.out" }, 
  29
);
tl.to([".answer-1", ".answer-2"], 
  { opacity: 0, duration: 0.5, ease: "power2.out" }, 
  29
);

// 29.5s: hide logo and bottom image
tl.to([".logo", ".image-under"], 
  { opacity: 0, duration: 0.5 }, 
  29.5
);

// 30s: show custom image centered, keep for 5s
tl.fromTo(
  ".custom-image", 
  { opacity: 0, scale: 0.5 }, 
  { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }, 
  30
);
tl.to(".custom-image", 
  { opacity: 0, duration: 0.5, delay: 5 }, 
  30
);

// 35.5s: reset everything for next cycle
tl.set(
  [".question-text", ".answer-1", ".answer-2", ".answer-3", ".loader", ".logo", ".image-under"], 
  { x: -32, opacity: 0, scale: 1, fontWeight: 400 }
);
tl.set(".custom-image", { scale: 0.5, opacity: 0 });
