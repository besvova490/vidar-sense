import { useRef } from 'react';

const VideoScreenshot = ({ videoSrc }: { videoSrc: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const takeScreenshot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

      // Create a data URL for the canvas content
      const dataURL = canvas.toDataURL('image/png');

      console.log(dataURL);
    }
  };

  return (
    <div>
      <video ref={videoRef} width="640" height="360" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />
      <button onClick={takeScreenshot}>Take Screenshot</button>
      <br />
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <br />
    </div>
  );
};

export default VideoScreenshot;
