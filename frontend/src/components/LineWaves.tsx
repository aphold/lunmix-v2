import { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Mesh, Program, Geometry } from 'ogl';

const vertex = `
attribute vec3 position;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;
  pos.y += sin(pos.x * 0.01 + uTime) * 50.0;
  pos.y += sin(pos.z * 0.01 + uTime * 0.5) * 30.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragment = `
precision highp float;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec3 color = vec3(0.1, 0.3, 0.8);
  color += sin(uTime + vUv.x * 10.0) * 0.1;
  color += sin(uTime * 0.5 + vUv.y * 8.0) * 0.1;
  gl_FragColor = vec4(color, 0.3);
}
`;

export interface LineWavesProps {
  speed?: number;
  innerLineCount?: number;
  outerLineCount?: number;
  warpIntensity?: number;
  rotation?: number;
  edgeFadeWidth?: number;
  colorCycleSpeed?: number;
  brightness?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  enableMouseInteraction?: boolean;
  mouseInfluence?: number;
}

export default function LineWaves(_props: LineWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new Renderer({ canvas: canvasRef.current });
    const gl = renderer.gl;

    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 1000);

    const scene = new Transform();

    const geometry = new Geometry(gl, {
      position: {
        size: 3,
        data: new Float32Array([
          -1, -1, 0,
           1, -1, 0,
          -1,  1, 0,
           1,  1, 0,
        ])
      },
      uv: {
        size: 2,
        data: new Float32Array([
          0, 0,
          1, 0,
          0, 1,
          1, 1,
        ])
      },
      index: {
        data: new Uint16Array([
          0, 1, 2,
          2, 1, 3,
        ])
      }
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      program.uniforms.uTime.value += 0.01;
      renderer.render({ scene, camera });
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-full w-full"
      style={{ background: 'linear-gradient(180deg, #020617 0%, #0f172a 50%, #1e293b 100%)' }}
    />
  );
}