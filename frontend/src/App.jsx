import React from 'react';
import HLSPlayer from './HLSPlayer';

const App = () => {
  const hlsStreamUrl = 'http://example.com:8080/hls/example-stream.m3u8';


  return (
    <div>
      <h1>HLS Player Example</h1>
      <HLSPlayer srcList={['http://localhost:8080/hls/demo_primary.m3u8',
'http://localhost:8080/hls/demo_backup.m3u8']} />

    </div>
  );
};

export default App;
