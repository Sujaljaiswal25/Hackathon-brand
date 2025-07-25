import { useMediaQuery } from "react-responsive";
// import DotGrid from '../animations/DotGrid';
// import '../index.css';

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section h-[100%] relative mt-[10%] ">
      <img
        src="/brandIMGs/footer-dip.png"
        alt=""
        className="w-full absolute z-9 object-cover -translate-y-1"
      />

      {/* <div style={{ width: '100%', height: '100vh', position: 'relative' }}> */}
      <div className="2xl:h-[110dvh] w-screen h-full z-0 relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title lg:mt-[10vh] text-center z-99 text-milk py-5">
            #BE THE BEAST
          </h1>
        </div>

        {isMobile ? (
          // <img
          //   src="/images/footer-drink.png"
          //   className=" z-0 top-0 object-contain"
          // />
          <video
            src="/brandVIDs/footervideo.webm"
            autoPlay
            playsInline
            loop
            muted
            className="absolute w-full h-full top-0 object-cover mix-blend-lighten"
          />
        ) : (
          <video
            src="/brandVIDs/footervideo.webm"
            autoPlay
            playsInline
            loop
            muted
            className="absolute w-full h-full top-0 object-cover mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <a href="https://www.youtube.com/@BeastLife-India">
            <div className="social-btn">
              <img src="./images/yt.svg" alt="" />
            </div>
          </a>
          <a href="https://www.instagram.com/beastlife.india?igsh=MTR0b3h2djFmcTJkbw==">
            <div className="social-btn">
              <img src="./images/insta.svg" alt="" />
            </div>
          </a>
          <a href="https://www.instagram.com/beastlife.india?igsh=MTR0b3h2djFmcTJkbw==">
            <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
            </div>
          </a>
          
        </div>

        <div className="my-[5%] h-[10vh] md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p className="z-40">BEAST LIFE</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            {/* <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10"> */}
            {/* The input field and arrow icon for newsletter signup. */}{" "}
            {/* A
          border at the bottom for a clean, modern look. */}
            {/* <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div> */}
          </div>
        </div>

        <div className="copyright-box h-[10vh] mt-[30%] ">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2025 BeastLife - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
