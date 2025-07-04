import { RigidBody } from "@react-three/rapier";

const Ground = () => {
  return (
    <RigidBody type="fixed" colliders="hull">
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial color={"white"} side={2} />
      </mesh>
    </RigidBody>
  );
};

export default Ground;
