import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import styled from "styled-components"

import { Canvas } from "@react-three/fiber" 
import { OrbitControls } from "@react-three/drei"
import Box from "../components/Box"

export default function Home() {
  return (
    <Wrapper className="App">
      <h1 style={{textAlign: "center", fontSize: "50px"}}>Test</h1>
      <Canvas className="canvas" style={{position: "absolute", height: "70%"}}> 
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`

`;
