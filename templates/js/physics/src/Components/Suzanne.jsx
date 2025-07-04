import suzanne from "/suzanne.gltf?url";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
const Suzanne = () => {
  const { nodes } = useGLTF(suzanne);
  return (
    <RigidBody type="dynamic" colliders="hull">
       <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
      >
        <meshNormalMaterial />
      </mesh>
    </group>
    </RigidBody>
  );
};

export default Suzanne;
