import "./App.css";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, PointerLockControls } from "@react-three/drei";
import Lights from "./Components/Lights";
import Suzanne from "./Components/Suzanne";
import { Physics } from "@react-three/rapier";
import Player from "./Components/Player";
import Ground from "./Components/Ground";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 5, 5] }}>
        <Lights />
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "KeyW"] },
            { name: "backward", keys: ["ArrowDown", "KeyS"] },
            { name: "left", keys: ["ArrowLeft", "KeyA"] },
            { name: "right", keys: ["ArrowRight", "KeyD"] },
            { name: "jump", keys: ["Space"] },
          ]}
        >
          <Physics gravity={[0, -20, 0]}>
            <Suzanne />
            <Player />
            <Ground />
          </Physics>
        </KeyboardControls>
        <PointerLockControls />
      </Canvas>
    </>
  );
}

export default App;
