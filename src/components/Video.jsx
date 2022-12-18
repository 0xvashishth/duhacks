import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Video = () => {
  return (
    <div style={{textAlign: 'center', height: '350px'}}>
      <ReactPlayer
        style={{margin: 'auto'}}
        className="react-player"
        controls="true"
        url="https://youtu.be/BUCFX36MMBM"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default Video;
