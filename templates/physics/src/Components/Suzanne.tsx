import suzanne from "/suzanne.gltf?url";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
const Suzanne = () => {
  const { scene } = useGLTF(suzanne);
  return (
    <RigidBody type="dynamic" colliders="hull">
      <primitive object={scene} />
    </RigidBody>
  );
};

export default Suzanne;
