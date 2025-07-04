import suzanne from "/suzanne.gltf?url";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Geometry } from "three";

const Suzanne = () => {
  const { nodes } = useGLTF(suzanne);
  const geometry: Geometry = nodes.Suzanne.geometry;
  return (
    <RigidBody type="dynamic" colliders="hull">
       <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={geometry}
      >
        <meshNormalMaterial />
      </mesh>
    </group>
    </RigidBody>
  );
};

export default Suzanne;
