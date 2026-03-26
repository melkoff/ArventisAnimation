gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray('.panel');

panels.forEach((panel, i) => {
    if (i < panels.length - 1) {
        ScrollTrigger.create({
            trigger: panel,
            pin: true,
            pinSpacing: false
        });
    }

    const content = panel.querySelector('.gsap-reveal');
    gsap.fromTo(content, 
        { 
            y: 80, 
            opacity: 0,
            autoAlpha: 0 
        },
        {
            y: 0,
            opacity: 1,
            autoAlpha: 1,
            duration: 1.5,
            scrollTrigger: {
                trigger: panel,
                start: "top 60%", 
                toggleActions: "play none none reverse"
            }
        }
    );
});