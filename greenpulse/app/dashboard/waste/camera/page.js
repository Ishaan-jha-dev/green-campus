'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function WasteCameraPage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  // Load Model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const tf = await import('@tensorflow/tfjs');
        await tf.ready();
        const mobilenet = await import('@tensorflow-models/mobilenet');
        const loadedModel = await mobilenet.load({ version: 2, alpha: 0.5 });
        setModel(loadedModel);
      } catch (err) {
        console.error("Failed to load model", err);
      }
    };
    loadModel();
  }, []);

  // Setup Camera
  useEffect(() => {
    let stream = null;
    const setupCamera = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' },
            audio: false,
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            setCameraActive(true);
          }
        } catch (err) {
          console.error("Camera error", err);
        }
      }
    };
    setupCamera();
    
    return () => {
      if (stream) {
         stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Frame processing loop
  useEffect(() => {
    let animationFrameId;
    
    const processFrame = async () => {
      if (videoRef.current && model && cameraActive && !isScanning) {
        try {
          setIsScanning(true);
          const predictions = await model.classify(videoRef.current);
          if (predictions && predictions.length > 0) {
            // Very naive mapping for demo purposes
            const topPrediction = predictions[0];
            const name = topPrediction.className.toLowerCase();
            
            let category = "dry";
            let color = "var(--color-mist-500)";
            let bin = "Mixed Bin";
            
            if (name.includes('bottle') || name.includes('plastic') || name.includes('cup')) {
               category = "plastic";
               color = "var(--color-waste)";
               bin = "Blue Bin (Recyclable)";
            } else if (name.includes('paper') || name.includes('book') || name.includes('box')) {
               category = "paper";
               color = "var(--color-info)";
               bin = "Blue Bin (Recyclable)";
            } else if (name.includes('food') || name.includes('fruit') || name.includes('plant')) {
               category = "organic";
               color = "var(--color-emerald-600)";
               bin = "Green Bin (Compost)";
            }

            setPrediction({
              name: topPrediction.className.split(',')[0],
              category,
              color,
              bin,
              confidence: Math.round(topPrediction.probability * 100)
            });
          }
          setIsScanning(false);
        } catch (e) {
          setIsScanning(false);
        }
      }
      
      // Run every ~1.5 seconds rather than constantly to save battery
      setTimeout(() => {
         animationFrameId = requestAnimationFrame(processFrame);
      }, 1500);
    };

    if (cameraActive && model) {
      processFrame();
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [cameraActive, model, isScanning]);

  return (
    <div className="camera-view">
      <div className="camera-header">
        <Link href="/dashboard/waste" className="close-btn material-symbols-outlined">close</Link>
        <span className="font-mono text-sm tracking-widest text-shadow">WASTE.AI SENSOR</span>
        <div className="w-6"></div>
      </div>

      <div className="video-container">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className="camera-video"
        />
        
        {/* Reticle */}
        <div className="reticle-container">
          <div className="reticle">
            <div className="corner tl"></div>
            <div className="corner tr"></div>
            <div className="corner bl"></div>
            <div className="corner br"></div>
            {isScanning && <div className="scanning-line"></div>}
          </div>
        </div>
      </div>

      <div className="results-panel">
        {!model ? (
          <div className="text-center p-6 text-mist">Initializing Neural Engine...</div>
        ) : !prediction ? (
          <div className="text-center p-6 text-mist">Point camera at waste item</div>
        ) : (
          <div className="prediction-content">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-caption tracking-widest text-mist uppercase font-bold text-label">DETECTED ITEM</span>
                <h2 className="text-2xl font-bold capitalize mt-1">{prediction.name}</h2>
              </div>
              <div className="bg-cloud-100 px-3 py-1 rounded font-mono text-sm font-bold">
                {prediction.confidence}% <span className="text-mist font-normal">CONF</span>
              </div>
            </div>
            
            <div className="bin-directive" style={{backgroundColor: `${prediction.color}15`, borderLeftColor: prediction.color}}>
               <span className="text-label" style={{color: prediction.color}}>DISPOSE IN</span>
               <p className="font-bold font-mono text-lg">{prediction.bin}</p>
            </div>
            
            <div className="flex gap-4 mt-6">
               <button className="btn-secondary flex-1 border border-mist-500 text-mist">Wrong?</button>
               <button className="btn-primary flex-1" style={{backgroundColor: prediction.color}}>Log +2 Pts</button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .camera-view {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #000;
          z-index: 100;
          display: flex;
          flex-direction: column;
        }
        
        .camera-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: env(safe-area-inset-top, 20px) 20px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          z-index: 110;
        }
        
        .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
        .close-btn { color: white; text-decoration: none; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
        
        .video-container {
          flex: 1;
          position: relative;
          overflow: hidden;
          background-color: #111;
        }
        
        .camera-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .reticle-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        
        .reticle {
          width: 250px;
          height: 250px;
          position: relative;
        }
        
        .corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border-color: rgba(255,255,255,0.8);
          border-style: solid;
        }
        
        .tl { top: 0; left: 0; border-width: 3px 0 0 3px; }
        .tr { top: 0; right: 0; border-width: 3px 3px 0 0; }
        .bl { bottom: 0; left: 0; border-width: 0 0 3px 3px; }
        .br { bottom: 0; right: 0; border-width: 0 3px 3px 0; }
        
        .scanning-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-emerald-600);
          box-shadow: 0 0 10px 2px rgba(5,150,105,0.6);
          animation: scan 2s linear infinite alternate;
        }
        
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        
        .results-panel {
          height: 240px;
          background-color: white;
          border-radius: 24px 24px 0 0;
          padding: 24px;
          z-index: 110;
          box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
        }
        
        .bin-directive {
          padding: 12px 16px;
          border-radius: 8px;
          border-left: 4px solid;
          margin-top: 16px;
        }
      `}</style>
    </div>
  );
}
