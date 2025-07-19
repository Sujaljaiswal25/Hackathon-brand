import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-[#100806]">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <video
                // src="/images/hero-bg.png"
                src="/brandVIDs/Generated video 1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/brandIMGs/joinbottles1.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
            
          </>
        ) : (
          <video
            src="/brandVIDs/Generated video 1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content  opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title text-[#FAEADE] ">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine </h1>
            </div>
          </div>

          <h2 className="text-[#FAEADE] font-semibold text-xl">
          Forget average. BEAST LIFE is where warriors rise, limits break, and legends
           are built. Power your grind, sculpt your mindset, and live life like the beast you are.
          </h2>

          {/* <div className="hero-button">
            <p>Chug a SPYLT</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
