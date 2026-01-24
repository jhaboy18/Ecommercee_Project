import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      <video
        src={src}
        className="w-full h-auto md:h-96 lg:h-[28rem] object-cover rounded-lg m-auto block"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
