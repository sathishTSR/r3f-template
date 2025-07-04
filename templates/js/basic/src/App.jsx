import { Canvas } from '@react-three/fiber'
import './App.css'
import Lights from './Components/Lights'
import Suzanne from './Components/Suzanne'
import { OrbitControls } from '@react-three/drei'

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
  )
}

export default App
