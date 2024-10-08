import {Suspense, useEffect, useRef, useState}from 'react'
import { Canvas } from '@react-three/fiber'
import Loader  from '../Components/Loader'
import Island from '../Models/island'
import Sky from '../Models/Sky'
import Bird from '../Models/bird'
import Plane from '../Models/plane'
import HomeInfo from '../Components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
const Home = () => {
  const audioRef=useRef(new Audio(sakura));
  audioRef.current.volume=0.4;
  audioRef.current.loop=true;

  const [isRotating , setIsRotating] = useState(false);
  const [currentStage,setCurrentStage]=useState(1);
  const [isPlayingMUsic,setIsPlayngMusic]=useState(false);

  useEffect(()=>{
    if(isPlayingMUsic){
      audioRef.current.play();

    }
    return()=>{
      audioRef.current.pause();
    }
  },[isPlayingMUsic]);

  const  adjustIslandToScreen= ()=>{
    let screenScale =null;
    let screenPosition = [0, -6.5, -43];
    let rotaion=[0.1,4.7,0];

    if(window.innerWidth < 768){
      screenScale=[0.9 ,0.9 , 0.9];
    }
    else{
      screenScale = [1, 1, 1]
    }
    return [screenScale, screenPosition, rotaion]
  }

  const adjustplaneToScreen = () => {
    let screenScale;
    let screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5,1.5,1.5];
      screenPosition=[0,-1.5,0];
    }
    else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition]
  }

  const [islandScale, islandPosition,islandRotation]=adjustIslandToScreen();
  const [planeScale, planePosition] = adjustplaneToScreen();
  return (
    <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage}/>}
    </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing': 'cursor-grab'}`}
              camera={{near :0.1 ,far :1000}}
          >
          <Suspense fallback={<Loader/>}>
              <directionalLight position={[1,1,1]} intensity={2}/>
              <ambientLight intensity={0.5}/>
              <Bird/>
              <Sky isRotating={isRotating}/>
              <hemisphereLight skyColor="#b1e1ff" groundColor='#000000' intensity={1} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}  
            setCurrentStage={setCurrentStage}
          />
          <Plane 
          isRotating={isRotating}
          scale={planeScale}
            position={planePosition}
            rotation={[0,20,0]}
          />
          </Suspense>

       
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={isPlayingMUsic ? soundoff : soundon}
        alt='sound'
          className='w-10 h-10 cursor-pointer object-contain '
          onClick={() => setIsPlayngMusic(!isPlayingMUsic)}
        />
      </div>
    </section>
  )
}

export default Home