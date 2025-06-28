import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";

const Player = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const body = useRef<any>(null);
  const direction = new Vector3();
  const { camera } = useThree();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, get] = useKeyboardControls<any>();

  useFrame(() => {
    const rb = body.current;
    if (!rb) return;
    const { forward, backward, left, right, jump } = get();

    // Get forward/right directions based on camera rotation
    const cameraDir = new Vector3();
    camera.getWorldDirection(cameraDir);
    cameraDir.y = 0;
    cameraDir.normalize();

    const cameraRight = new Vector3();
    cameraRight.crossVectors(camera.up, cameraDir).normalize();

    // Construct movement direction
    direction.set(0, 0, 0);
    if (forward) direction.add(cameraDir);
    if (backward) direction.sub(cameraDir);
    if (left) direction.add(cameraRight);
    if (right) direction.sub(cameraRight);
    direction.normalize().multiplyScalar(4);

    const linvel = rb.linvel();
    rb.setLinvel({ x: direction.x, y: linvel.y, z: direction.z }, true);

    if (jump && Math.abs(linvel.y) < 0.05) {
      rb.setLinvel({ x: linvel.x, y: 5, z: linvel.z }, true);
    }

    // Camera follows player
    const pos = rb.translation();
    camera.position.set(pos.x, pos.y + 1.5, pos.z);
  });

  return (
    <RigidBody
      ref={body}
      type="dynamic"
      position={[0, 2, 0]}
      colliders="hull"
      friction={1}
      canSleep={false}
      lockRotations
    >
      {/* dummy capsule mesh */}
      <mesh>
        <capsuleGeometry args={[0.5, 1, 8, 16]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </RigidBody>
  );
};

export default Player;
