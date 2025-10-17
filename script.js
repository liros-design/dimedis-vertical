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



gsap.fromTo(".answer-1",
  { x: -32, opacity: 0 }, // start off left
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 1,
    ease: "power3.out",
    repeat: -1,       // loop forever
    repeatDelay: 24,  // wait 24s before next start
    onRepeat: function () {
      // reset instantly to starting state before repeating
      gsap.set(".answer-1", { x: -32, opacity: 0 });
    }
  }
);


gsap.fromTo(".answer-2",
  { x: -32, opacity: 0 }, // start off left
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 2,
    ease: "power3.out",
    repeat: -1,       // loop forever
    repeatDelay: 24,  // wait 24s before next start
    onRepeat: function () {
      // reset instantly to starting state before repeating
      gsap.set(".answer-2", { x: -32, opacity: 0 });
    }
  }
);



gsap.fromTo(".answer-3",
  { x: -32, opacity: 0 }, // start off left
  {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 3,
    ease: "power3.out",
    repeat: -1,       // loop forever
    repeatDelay: 24,  // wait 24s before next start
    onRepeat: function () {
      // reset instantly to starting state before repeating
      gsap.set(".answer-3", { x: -32, opacity: 0 });
    }
  }
);


gsap.fromTo(".loader",
  { scaleX: 1, transformOrigin: "left center" }, // start full width
  {
    scaleX: 0,                  // shrink to zero
    duration: 24,               // takes 24 seconds
    delay: 4, 
    ease: "linear",             // smooth, steady reduction
    repeat: -1,                 // infinite loop
    repeatDelay: 0              // restart immediately
  }
);
