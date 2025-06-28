import suzanne from "/suzanne.glb?url";
import { useGLTF } from "@react-three/drei";

const Suzanne = () => {
  const { scene } = useGLTF(suzanne);
  return <primitive object={scene} />;
};

export default Suzanne;
