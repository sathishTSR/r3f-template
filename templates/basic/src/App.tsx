import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "./Components/Lights";
import Suzanne from "./Components/Suzanne";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 5, 5] }}>
        <Lights />
        <Suzanne />
        <gridHelper />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
