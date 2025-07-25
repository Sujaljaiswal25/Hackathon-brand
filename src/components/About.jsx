
import React, { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import BlurText from "../animations/BlurText";
// import ScrollVelocity from "./ScrollVelocity";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand } from 'react-icons/fa';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const controlsTimeout = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('click', handlePlayPause);
      video.addEventListener('mousemove', showControlsTemporarily);
      video.addEventListener('mouseenter', () => setShowControls(true));
      video.addEventListener('mouseleave', () => {
        if (isPlaying) setShowControls(false);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('click', handlePlayPause);
        video.removeEventListener('mousemove', showControlsTemporarily);
        video.removeEventListener('mouseenter', () => setShowControls(true));
        video.removeEventListener('mouseleave', () => {
          if (isPlaying) setShowControls(false);
        });
      }
      clearTimeout(controlsTimeout.current);
    };
  }, [isPlaying]);

  return (
    <section className="w-full overflow-hidden">
      

        <div className="w-full min-h-[20vh] py-8 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center relative">
                <BlurText
                  text="About BEASTLIFE*"
                  delay={850}
                  animateBy="words"
                  direction="top"
                  // onAnimationComplete={handleAnimationComplete}
                  className="text-6xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[16rem] font-black text-center leading-tight"
                />
              </div>

      {/* Video Section */}
      <div className="w-full px-4 sm:px-6 lg:px-9 pb-12 md:pb-20 lg:pb-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl md:rounded-3xl lg:rounded-4xl bg-black shadow-2xl relative group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted={isMuted}
              autoPlay
              playsInline
              src="/brandVIDs/about.mp4"
              aria-label="BEAST LIFE brand video"
              onClick={handlePlayPause}
            />
            
            {/* Custom Controls */}
            <div 
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Progress Bar */}
              <div 
                className="h-1 bg-gray-600 w-full mb-2 cursor-pointer rounded-full overflow-hidden"
                onClick={handleSeek}
              >
                <div 
                  className="h-full bg-red-600" 
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={handlePlayPause}
                    className="text-white hover:text-red-500 transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                  </button>
                  
                  <button 
                    onClick={handleMute}
                    className="text-white hover:text-red-500 transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
                  </button>
                  
                  <span className="text-white text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
                
                <button 
                  className="text-white hover:text-red-500 transition-colors"
                  onClick={() => videoRef.current?.requestFullscreen()}
                  aria-label="Fullscreen"
                >
                  <FaExpand size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 lg:mb-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-brown leading-loose md:leading-tight lg:leading-tight"
            >
              BEAST LIFE isn't just fitness — it's a mindset. Unleash your raw power, 
              conquer limits, and chase greatness. Fuel every rep with fire and live 
              bold, fearless, and unapologetically beast.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
