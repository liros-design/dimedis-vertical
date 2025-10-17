gsap.fromTo(".question-text",
  { x: -32, opacity: 0 }, // start off left
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 0,
    ease: "power3.out",
    repeat: -1,       // loop forever
    repeatDelay: 24,  // wait 24s before next start
    onRepeat: function () {
      // reset instantly to starting state before repeating
      gsap.set(".question-text", { x: -32, opacity: 0 });
    }
  }
);







gsap.to(".answer-1", {
  x: 32,
  opacity: 1,
  duration: 2,
  delay: 3,
  ease: "power3.out",
  repeat: -1,
  repeatDelay: 24
});

gsap.to(".answer-2", {
  x: 32,
  opacity: 1,
  duration: 2,
  delay: 4,
  ease: "power3.out",
  repeat: -1,
  repeatDelay: 24
});

gsap.to(".answer-3", {
  x: 32,
  opacity: 1,
  duration: 2,
  delay: 5,
  ease: "power3.out",
  repeat: -1,
  repeatDelay: 24
});
