import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../animations/AnimatedHeaderSection";
import { projects } from "../constants/index";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import TextPressure from "../animations/TextPressure";
import About from "../components/About";
import BlurText from "../animations/BlurText";
// import ScrollVelocity from "../animations/ScrollVelocity";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex lg:mt-[26%] flex-col min-h-screen">

      <div className="w-full min-h-[20vh] py-8 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center relative">
        <BlurText
          text="BEAST Creatine"
          delay={850}
          animateBy="words"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-6xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[16rem] font-black text-center leading-tight"
        />
      </div>

      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <a 
            key={project.id}
            href={project.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block "
          >
            <div
              id="project"
              className="relative pb-5 flex flex-col gap-1 pt-5 cursor-pointer group md:gap-0"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* overlay */}
              <div
                ref={(el) => {
                  overlayRefs.current[index] = el;
                }}
                className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
              />

              {/* title */}
              <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                <h2 className="lg:text-[32px] text-[26px] leading-none">
                  {project.name}
                </h2>
                <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
              </div>
              {/* divider */}
              <div className="w-full mt-[1vh] h-0.5 bg-black/80" />
              {/* framework */}
              <div className="flex px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                {project.frameworks && project.frameworks.map((framework) => (
                  <p
                    key={framework.id}
                    className="text-black transition-colors duration-500 md:group-hover:text-white"
                  >
                    {framework.name}
                  </p>
                ))}
              </div>
              {/* mobile preview image */}
              <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
                {project.bgImage && (
                  <img
                    src={project.bgImage}
                    alt={`${project.name}-bg`}
                    className="object-cover w-full h-full rounded-md brightness-50"
                  />
                )}
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute bg-center px-14 rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </a>
        ))}
        {/* Desktop floating preview image */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0"
        >
          {currentIndex !== null && projects[currentIndex]?.image && (
            <img
              src={projects[currentIndex].image}
              alt={`Preview of ${projects[currentIndex].name}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          )}
        </div>
      </div>

      <About />
    </section>
  );
};

export default Works;
