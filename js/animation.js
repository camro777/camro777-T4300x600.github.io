let creative = {};
let delayFrame = 2.2;


function init() {
	console.log("Ad Ready");
	addEventListeners();
	creative.viewport = document.getElementById('mainExit');
	creative.isi_height = document.getElementById('isi-copy').offsetHeight;
	scrollSpeed = creative.isi_height / 10;
	gsap.set(['#viewport', '#border'], { autoAlpha: 1 });
	frameOne();
}

function frameOne() {
	
	
	gsap.set(['.f1', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl
		.from(['#f1-bg'], {duration:0.7, scale:1.1, opacity:0})
		// .from(['#f1-flashes-bg'], { duration: 2, stagger: 0.1, opacity: 0, scale: 1.1 })
		// .from(['#gl-logo', '#gl-logo2', '#clickTag3'], { duration: 1, stagger: 0.8, opacity: 0, x: -100 }, 0)
		.from(['#f1-copy', '#isi-con'], { duration: 0.5, stagger: 0.3, y: -20, opacity: 0 })

	gsap.delayedCall(delayFrame, frameTwo);
	gsap.to(['.f1'], { delay: delayFrame, opacity: 0 });
}

function frameTwo() {
	gsap.set(['.f2', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl

	    .from(['#f2-bg'], { duration: 0.7, stagger: 0.1, opacity: 0, x:160 })
		.from(['#f2-flashes-bg'], { duration: 2, stagger: 0.1, opacity: 0, scale: 1.1 })
		.from(['#f2-copy'], { duration: 0.5, stagger: 0.8, y: -20, opacity: 0 }, 0)
		.to(['#f1-flashes-bg'], { duration: 1, stagger: 0.1, opacity: 0, scale: 1.1 }, 0);


	gsap.delayedCall(delayFrame, frameThree);
	gsap.to(['.f2', '#gl-logo'], { delay: delayFrame, opacity: 0 });
}

function frameThree() {
	gsap.set(['.f3', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl  

	
	.from(['#f3-bg'], { duration: 0.7, stagger: 0.1, opacity: 0, x:160 })
	.from(['#f3-flashes-bg'], { duration: 2, stagger: 0.1, opacity: 0, scale: 1.1 })
	.from(['#f3-copy'], { duration: 0.5, stagger: 0.8, y: -20, opacity: 0 }, 0)
	.to(['#f3-flashes-bg'], { duration: 1, stagger: 0.1, opacity: 0, scale: 1.1 }, 0);
	
		

	gsap.delayedCall(delayFrame, frameFour);
	gsap.to(['.f3', '#gl-logo'], { delay: delayFrame, opacity: 0 });
}


function frameFour() {
	gsap.set(['.f4', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl  

	
	.from(['#f4-bg'], { duration: 0, stagger: 0.1, opacity: 0, x:160 })
	.from(['#f4-flashes-bg'], { duration: 2, stagger: 0.1, opacity: 0, scale: 1.1 })
	.from(['#f2-copy'], { duration: 0, stagger: 0.8, y: -20, opacity: 0 }, 0)
	.from(['#clickTag3'], { duration: 0.5, stagger: 0.8, y: -20, opacity: 0 }, 0)
	.to(['#f4-flashes-bg'], { duration: 1, stagger: 0.1, opacity: 0, scale: 1.1 }, 0);
	
		

	gsap.delayedCall(delayFrame, frameFive);
	gsap.to(['.f7', '#gl-logo'], { delay: delayFrame, opacity: 0 });
}



function frameFive() {
	gsap.set(['.f5', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl  

	
	// .from(['#f5alt'], { duration: 4, stagger: 0.1, opacity: 0 })
	// .from(['#f5-flashes-bg'], { duration: 2, stagger: 0.1, opacity: 0, scale: 1.1 })
	.from(['#f3-bg'], { duration: 0, stagger: 0.1, opacity: 0, x:160 })
	.from(['#f5-bg'], { duration: 0.8, stagger: 0.8, opacity: 0 })//Women
	.from(['#f3-copy'], { duration: 0.4, stagger: 0.8, y: -20, opacity: 0 }, "-=2")
	// .from(['#f6-bg'], { duration: 0.4, stagger: 0.1, opacity: 0 })	
	// .from(['#clickTag3'], { duration: 0, stagger: 0.8, y: -20, opacity: 0 }, 0)
	// .to(['#f5-flashes-bg'], { duration: 1, stagger: 0.1, opacity: 0, scale: 1.1 }, 0);
	
		

	gsap.delayedCall(1.9, frameSix);
	gsap.to(['.f5', '#gl-logo'], { delay: delayFrame, opacity: 0 });
}



function frameSix() {
	gsap.set(['.f6', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl  
	.from(['#f6-bg'], { duration: 0.7, scale:1.1, opacity: 0, x:160 })
	// .from(['#f6-flashes-bg'], { duration: 2, stagger: 0.1, opacity: 0, scale: 1.1 })
	// .from(['#f6-copy'], { duration: 0.5, stagger: 0.8, y: -20, opacity: 0 }, 0)
	.from(['#f3-copy'], { duration: 0, stagger: 0.8, y: -20, opacity: 0 })
	.from(['#clickTag3'], { duration: 0, stagger: 0.8, y: -20, opacity: 0 })
	.to(['#f6-flashes-bg'], { duration: 1, stagger: 0.1, opacity: 0, scale: 1.1 });
	
		

	gsap.delayedCall(delayFrame, frameSeven);
	gsap.to(['.f6', '#gl-logo'], { delay: delayFrame, opacity: 0 });
}



function frameSeven() {
	gsap.set(['.f7', '.gl', '.isi'], { autoAlpha: 1 });

	const tl = gsap.timeline({});
	tl
		.from(['#f7-bg'],  { duration: 1, stagger: 0.1, opacity: 0, scale: 1.1 })
		.from(['#f7-logo'], { duration: 1, stagger: 0.3, opacity: 0, x: -100 }, 0)
		.from(['#f7-copy', '#f7-copy2'], { duration: 0.8, ease: "power2.out", x: 545, opacity: 0 }, '=-0.5')

	ISIscroll();
}

// ISI Scroll
function ISIscroll() {
	gsap.delayedCall(1, timelineBegin);
	var timer = gsap.timeline();
	isiAnim = gsap.timeline()
	ISI = document.getElementById('isi-copy-con');
	timer.play();

	function timelineBegin() {
		isiAnim.to('#isi-copy-con', { duration: 1, scrollTo: { y: "+=10" }, ease: "none", repeat: scrollSpeed, repeatRefresh: true, z: 0.1, rotationZ: 0.01, force3D: true });
	}

	ISI.addEventListener('mouseover', mouseInner, false);
	function mouseInner() {
		ISI.removeEventListener('mouseover', mouseInner, false); timer.pause(); isiAnim.clear(); ISI.addEventListener('mouseout', mouseOuter, false); function mouseOuter() { ISI.addEventListener('mouseover', mouseInner, false); timer.play(); var currentTime = timer.totalTime(); if (currentTime < scrollSpeed - 1) { timelineBegin(); } }
	}
}

function addEventListeners() {
	function mainExitHandler(e) { Enabler.exit('MainExit'); }
	function vaersExitHandler(e) { Enabler.exit('clickTag2'); }
	function PIExitHandler(e) { Enabler.exit('clickTag3'); }
	document.getElementById('mainExit').addEventListener('click', mainExitHandler, false);
	document.getElementById('clickTag2').addEventListener('click', vaersExitHandler, false);
	document.getElementById('clickTag3').addEventListener('click', PIExitHandler, false);
}