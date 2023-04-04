import React from 'react';

function VideoPlayer(props) {
    return (
      <div className="video-player">
        <video src={props.videoSrc} controls />
      </div>
    );
  }
  
  export default VideoPlayer;