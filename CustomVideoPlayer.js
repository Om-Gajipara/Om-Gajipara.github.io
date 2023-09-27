import React, { useState, useRef } from 'react';

const videoSource = 'https://youtu.be/6uc0RWrMQNc';

const CustomVideoPlayer = ({ videoSource }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        // Handle any play() errors here
        console.error('Error playing video:', error);
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.nativeEvent.offsetX;
    const newTime = (clickPosition / progressBar.offsetWidth) * duration;
    videoRef.current.currentTime = newTime;
  };

  return (
    <div className="custom-video-player">
      <video
        ref={videoRef}
        src={videoSource}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></video>
      <div className="controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div
          className="progress-bar"
          onClick={handleProgressBarClick}
        >
          <div
            className="progress"
            style={{
              width: `${(currentTime / duration) * 100}%`,
            }}
          ></div>
        </div>
        <span className="current-time">
          {formatTime(currentTime)}
        </span>
        <span className="duration">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
};

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(
    seconds
  ).padStart(2, '0')}`;
};

export default CustomVideoPlayer;
