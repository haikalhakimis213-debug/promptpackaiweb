"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type CardTextureOptions = {
  title: string;
  detail: string;
  accent: string;
  tint: string;
};

function drawRoundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function makeCardTexture(options: CardTextureOptions) {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 820;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#ffffff");
  gradient.addColorStop(1, options.tint);
  context.fillStyle = gradient;
  drawRoundRect(context, 32, 32, 576, 756, 38);
  context.fill();

  context.strokeStyle = "rgba(14, 116, 144, 0.18)";
  context.lineWidth = 8;
  context.stroke();

  context.fillStyle = options.accent;
  drawRoundRect(context, 72, 76, 206, 74, 32);
  context.fill();

  context.fillStyle = "#ffffff";
  context.font = "700 34px Arial";
  context.fillText("PDF PACK", 104, 125);

  context.fillStyle = "#0f172a";
  context.font = "800 68px Arial";
  const words = options.title.split(" ");
  words.forEach((word, index) => {
    context.fillText(word, 72, 272 + index * 78);
  });

  context.fillStyle = "rgba(15, 23, 42, 0.72)";
  context.font = "500 34px Arial";
  context.fillText(options.detail, 72, 560);

  context.fillStyle = "rgba(14, 116, 144, 0.12)";
  for (let index = 0; index < 5; index += 1) {
    drawRoundRect(context, 72, 612 + index * 36, 430 - index * 48, 16, 8);
    context.fill();
  }

  context.fillStyle = options.accent;
  context.beginPath();
  context.arc(492, 686, 58, 0, Math.PI * 2);
  context.fill();

  context.strokeStyle = "#ffffff";
  context.lineWidth = 12;
  context.beginPath();
  context.moveTo(466, 686);
  context.lineTo(486, 706);
  context.lineTo(524, 664);
  context.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
    });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    const group = new THREE.Group();
    const cardTextures: THREE.Texture[] = [];
    const cardMeshes: THREE.Mesh[] = [];
    const clock = new THREE.Clock();
    let frameId = 0;
    let mounted = true;

    camera.position.set(0, 0, 6.7);
    scene.add(group);

    scene.add(new THREE.AmbientLight("#ffffff", 2.2));
    const keyLight = new THREE.DirectionalLight("#ffffff", 3.2);
    keyLight.position.set(2.5, 4, 4);
    scene.add(keyLight);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.35, 0.025, 16, 140),
      new THREE.MeshStandardMaterial({
        color: "#38bdf8",
        emissive: "#7dd3fc",
        emissiveIntensity: 0.28,
        roughness: 0.42,
        metalness: 0.2,
      }),
    );
    ring.rotation.x = Math.PI / 2.8;
    group.add(ring);

    const backRing = ring.clone();
    backRing.scale.setScalar(1.2);
    backRing.rotation.x = Math.PI / 2.5;
    backRing.rotation.z = 0.4;
    backRing.material = new THREE.MeshStandardMaterial({
      color: "#f9a8d4",
      emissive: "#f9a8d4",
      emissiveIntensity: 0.18,
      roughness: 0.5,
      metalness: 0.12,
    });
    group.add(backRing);

    const cardData: Array<CardTextureOptions & { position: [number, number, number]; rotation: [number, number, number] }> = [
      {
        title: "SPM Study",
        detail: "A+B+C Bundle",
        accent: "#0ea5e9",
        tint: "#e0f2fe",
        position: [-1.55, 0.15, -0.2],
        rotation: [0.1, 0.36, -0.16],
      },
      {
        title: "Image Edit",
        detail: "Cinematic looks",
        accent: "#ec4899",
        tint: "#fce7f3",
        position: [1.55, 0.2, -0.1],
        rotation: [0.1, -0.32, 0.14],
      },
      {
        title: "Video Reels",
        detail: "Creator workflow",
        accent: "#8b5cf6",
        tint: "#ede9fe",
        position: [0.1, -1.05, 0.05],
        rotation: [-0.18, 0.04, 0.03],
      },
    ];

    cardData.forEach((item) => {
      const texture = makeCardTexture(item);
      cardTextures.push(texture);
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.25, 1.6),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
        }),
      );
      mesh.position.set(...item.position);
      mesh.rotation.set(...item.rotation);
      cardMeshes.push(mesh);
      group.add(mesh);
    });

    const loader = new THREE.TextureLoader();
    const logoTexture = loader.load("/ai-prompt-pack-logo.png", (texture) => {
      if (!mounted) {
        texture.dispose();
        return;
      }

      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 8;
    });

    const logoDisc = new THREE.Mesh(
      new THREE.CircleGeometry(1.08, 96),
      new THREE.MeshBasicMaterial({
        map: logoTexture,
        transparent: true,
      }),
    );
    logoDisc.position.set(0, 0.25, 0.42);
    group.add(logoDisc);

    const dotMaterial = new THREE.MeshStandardMaterial({
      color: "#fbbf24",
      emissive: "#fde68a",
      emissiveIntensity: 0.22,
      roughness: 0.35,
    });
    for (let index = 0; index < 18; index += 1) {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(index % 3 === 0 ? 0.045 : 0.028, 18, 18), dotMaterial);
      const angle = (index / 18) * Math.PI * 2;
      const radius = 2.15 + (index % 4) * 0.16;
      dot.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.62, -0.55 + (index % 5) * 0.08);
      group.add(dot);
    }

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth ?? 680;
      const height = parent?.clientHeight ?? 520;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      group.rotation.y = Math.sin(elapsed * 0.45) * 0.16;
      group.rotation.x = Math.sin(elapsed * 0.3) * 0.05;
      group.position.y = Math.sin(elapsed * 0.9) * 0.08;
      ring.rotation.z = elapsed * 0.28;
      backRing.rotation.z = -elapsed * 0.18;

      cardMeshes.forEach((mesh, index) => {
        mesh.position.y += Math.sin(elapsed * 1.2 + index) * 0.0008;
      });

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      mounted = false;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      cardTextures.forEach((texture) => texture.dispose());
      logoTexture.dispose();
      dotMaterial.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full touch-none"
    />
  );
}
