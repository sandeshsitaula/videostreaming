import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const HLSPlayer = ({ srcList }) => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hls, setHls] = useState(null);

  useEffect(() => {
    function loadNextStream() {
      if (currentIndex < srcList.length) {
        const currentSrc = srcList[currentIndex];
        const newHls = new Hls();
        newHls.loadSource(currentSrc);
        newHls.attachMedia(videoRef.current);
        newHls.on(Hls.Events.ERROR, function(event, data) {
          if (data.fatal) {
            if (currentIndex < srcList.length - 1) {
              setCurrentIndex(prevIndex => prevIndex + 1);
              setHls(null)
            } else {
                alert('all streams failed to load')
              console.error('All streams failed to load');
            }
          }
        });
        setHls(newHls);
      }
    }

    if (Hls.isSupported() && !hls) {
        console.log("supported")
      loadNextStream();
    } else if (!Hls.isSupported() &&
videoRef.current.canPlayType('application/vnd.apple.mpegurl') && !hls) {
        console.log(currentIndex)
      videoRef.current.src = srcList[currentIndex];
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [srcList, currentIndex, hls]);
useEffect(()=>{
    console.log(currentIndex)
})
  return (
    <video controls ref={videoRef} style={{ width: '100%', height: 'auto' }}>
      Your browser does not support the video tag.
    </video>
  );
};

export default HLSPlayer;
