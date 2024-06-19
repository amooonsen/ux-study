// document.addEventListener('DOMContentLoaded', () => {
// 	gsap.registerPlugin(ScrollTrigger, Observer);

// 	// function slideSection() {
// 	// 	const $slideSection = document.querySelector('.slide-container')
// 	// 	if (!$slideSection) return;

// 	// 	let allowScroll = false;

// 	// 	let intentObserver = ScrollTrigger.observe({
// 	// 		type: "wheel, touch, pointer",
// 	// 		onUp: (e) => {
// 	// 			console.log('up',e)
// 	// 		},
// 	// 		onDown: (e) => {
// 	// 			console.log('down',e)
// 	// 		},
// 	// 		tolerance: 10,
// 	// 		// preventDefault: true,
// 	// 		onChangeY() {
// 	// 		},
// 	// 		onEnable(self) {
// 	// 			// allowScroll = false;
// 	// 			// let savedScroll = self.scrollY();
// 	// 			// self._restoreScroll = () => self.scrollY(savedScroll);
// 	// 			// document.addEventListener("scroll", self._restoreScroll, { passive: false });
// 	// 		},
// 	// 	});
// 	// 	// intentObserver.disable();

// 	// 	function gotoPanel() {
// 	// 		// gsap.to()
// 	// 	}

// 	// 	ScrollTrigger.create({
// 	// 		trigger: '.slide-container',
// 	// 		pin: true,
// 	// 		start: 'top top',
// 	// 		end:'+=50%',
// 	// 		onEnter: (self) => {
// 	// 			console.log(self)
// 	// 		},
// 	// 		onEnterBack: (self) => {
// 	// 			console.log(self)
// 	// 		}
// 	// 	})

// 	// 	// const context = gsap.context((contextSelf) => {
// 	// 	// 	const tl = gsap.timeline({})
// 	// 	// 	const $slides = contextSelf.selector('.slide')

// 	// 	// 	tl.set($slides, {xPercent: -100, opacity: 0})
// 	// 	// 	// gsap.fromTo($slides, {
// 	// 	// 	// 	alpha: 0,
// 	// 	// 	// }, {
// 	// 	// 	// 	alpha: 1,
// 	// 	// 	// 	scrollTrigger: {
// 	// 	// 	// 		trigger: $slideSection,
// 	// 	// 	// 		start: 'top top',
// 	// 	// 	// 		end: '+= bottom',
// 	// 	// 	// 		markers: true,
// 	// 	// 	// 		pin: true,
// 	// 	// 	// 	}
// 	// 	// 	// })
// 	// 	// }, $slideSection)

// 	// }

// 	// slideSection();
// })

gsap.registerPlugin(ScrollTrigger);

// Gsap Code
let currentIndex = -1;
let animating;
let swipePanels = gsap.utils.toArray(".slide");

// set second panel two initial 100%
gsap.set(".x-100", {xPercent: 100});

// set z-index levels for the swipe panels
gsap.set(swipePanels, {
  zIndex: i => i
});

// create an observer and disable it to start
let intentObserver = ScrollTrigger.observe({
  type: "wheel,touch",
  onUp: () => !animating && gotoPanel(currentIndex + 1, true),
  onDown: () => !animating && gotoPanel(currentIndex - 1, false),
  wheelSpeed: -1, // to match mobile behavior, invert the wheel speed
  tolerance: 10,
  preventDefault: true,
  // onPress: self => {
  //   // on touch devices like iOS, if we want to prevent scrolling, we must call preventDefault() on the touchstart (Observer doesn't do that because that would also prevent side-scrolling which is undesirable in most cases)
  //   ScrollTrigger.isTouch && self.event.preventDefault()
  // }
})
intentObserver.disable();

let preventScroll = ScrollTrigger.observe({
			preventDefault: true,
			type: "wheel,scroll",
			allowClicks: true,
			onEnable: self => self.savedScroll = self.scrollY(), // save the scroll position
			onChangeY: self => self.scrollY(self.savedScroll)    // refuse to scroll
		});
preventScroll.disable();

// handle the panel swipe animations
function gotoPanel(index, isScrollingDown) {
  animating = true;
  // return to normal scroll if we're at the end or back up to the start
  if (
    (index === swipePanels.length && isScrollingDown) ||
    (index === -1 && !isScrollingDown)
  ) {
    intentObserver.disable();
    preventScroll.disable();
    animating = false;
    // now make it go 1px beyond in the correct direction so that it doesn't trigger onEnter/onEnterBack.
    preventScroll.scrollY(preventScroll.scrollY() + (index === swipePanels.length ? 1 : -1));
    return;
  }

  //   target the second panel, last panel?
  let target = isScrollingDown ? swipePanels[index] : swipePanels[currentIndex];

  gsap.to(target, {
    xPercent: isScrollingDown ? 0 : 100,
    duration: 0.75,
    onComplete: () => {
      animating = false;
    }
  });
  currentIndex = index;
}

// pin swipe section and initiate observer
ScrollTrigger.create({
  trigger: ".swipe-section",
  pin: true,
  anticipatePin: true,
  start: "top top",
  end: "+=50%",
  onEnter: (self) => {
    if (preventScroll.isEnabled === false) {
      self.scroll(self.start);
      preventScroll.enable();
      intentObserver.enable();
      gotoPanel(currentIndex + 1, true);
    }
  },
  onEnterBack: (self) => {
    if (preventScroll.isEnabled === false) {
      self.scroll(self.start);
      preventScroll.enable();
      intentObserver.enable();
      gotoPanel(currentIndex - 1, false);
    }
  }
});


