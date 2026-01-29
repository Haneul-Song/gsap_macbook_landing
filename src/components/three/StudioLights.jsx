import { Environment, Lightformer } from "@react-three/drei"

const StudioLights = () => {
    return (
        <group name="lights">
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 6, 8]} intensity={0.9} />
            <directionalLight position={[-6, 2, -6]} intensity={0.6} />
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form="rect"
                        intensity={12}
                        position={[-10, 5, -5]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />

                    <Lightformer
                        form="rect"
                        intensity={15}
                        position={[10, 0, 1]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>

            <spotLight
                position={[-2, 10, 5]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.35}
            />
            <spotLight
                position={[0, -25, 10]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.35}
            />
            <spotLight
                position={[0, 15, 5]}
                angle={0.15}
                decay={0.1}
                intensity={Math.PI * 0.35}
            />
        </group>
    )
}

export default StudioLights
