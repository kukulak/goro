// import { Suspense } from 'react'
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import BackgroundMaterial from './BackgroundMaterial.component'

// export default function Background() {
//   return (
//     <Suspense fallback={<span>loading...</span>}>
//       <Canvas dpr={[1, 2]} camera={{ fov: 12, position: [0, 0, 5] }}>
//         <color attach="background" args={['#1e2243']} />
//         <BackgroundMaterial />
//         <OrbitControls />
//       </Canvas>
//     </Suspense>
//   )
// }



import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import "./Background.styles.css";
import backbround from '../../icons/background2.jpg'


const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    colorStart: new THREE.Color(0.15, 0.0, 0.15 ),
    colorEnd: new THREE.Color(0.78, 0.44, 0.83),
    uTexture: new THREE.Texture()
  },
  // Vertex Shader
  glsl`
    precision mediump float;
 
    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 2.5;
      float noiseAmp = 0.5;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;
    #pragma glslify: cnoise3 = require(glsl-noise/classic/3d.glsl)
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform vec3 colorStart;
    uniform vec3 colorEnd;
    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 0.2;
      vec2 displacedUv = vUv + cnoise3(vec3(vUv * 0.210, uTime * 0.05));
      float strength = cnoise3(vec3(displacedUv * 2.0, uTime * 0.2));
      // vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      vec3 texture = uColor + wave*strength;
      vec3 color = mix(colorStart, colorEnd, strength);
      gl_FragColor = vec4(color, 1.0);
      // gl_FragColor = vec4(uColor, 1.0); 

    }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
    backbround
    // "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
  ]);

  return (
    <mesh>
      <planeBufferGeometry args={[2, 2, 16, 16]} />
      {/* wireframe */}
      <waveShaderMaterial uColor={"hotpink"} ref={ref} />
      {/* <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image}  /> */}
    </mesh>
  );
};

const Scene = () => {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}>
    <Canvas camera={{ fov: 5, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Scene />
    </>
  );
};

export default App;

