import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ProjectThreeCanvas({ projectTitle }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 180;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Ambient and Point lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    let mainObject = null;
    let particles = null;

    // Build project-specific 3D scenes
    if (projectTitle.includes("ClarityScript")) {
      // 3D Glowing Octahedron + Particle Wave
      const geo = new THREE.OctahedronGeometry(1.2, 0);
      const mat = new THREE.MeshPhongMaterial({
        color: 0xa855f7,
        emissive: 0x581c87,
        wireframe: true,
        wireframeLinewidth: 1.5,
        transparent: true,
        opacity: 0.85,
      });
      mainObject = new THREE.Mesh(geo, mat);
      scene.add(mainObject);

      // Inner glowing core
      const coreGeo = new THREE.OctahedronGeometry(0.6, 0);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xec4899,
        wireframe: false,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      mainObject.add(core);

      // Particles
      const particleGeo = new THREE.BufferGeometry();
      const count = 60;
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        pos[i] = (Math.random() - 0.5) * 6;
      }
      particleGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0xc084fc,
        size: 0.05,
        transparent: true,
        opacity: 0.6,
      });
      particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);
    } else if (projectTitle.includes("Task")) {
      // 3D Cubes / Priority Blocks Group
      const group = new THREE.Group();

      const createCube = (size, x, y, z, color) => {
        const geo = new THREE.BoxGeometry(size, size, size);
        const mat = new THREE.MeshPhongMaterial({
          color: color,
          emissive: 0x1e3a8a,
          wireframe: true,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, y, z);
        return mesh;
      };

      const c1 = createCube(1.0, 0, 0, 0, 0x3b82f6);
      const c2 = createCube(0.5, -1.2, 0.6, -0.4, 0x60a5fa);
      const c3 = createCube(0.4, 1.2, -0.5, -0.2, 0x93c5fd);

      group.add(c1, c2, c3);
      mainObject = group;
      scene.add(mainObject);
    } else if (projectTitle.includes("Local") || projectTitle.includes("RAG")) {
      // 3D Vector Constellation Node Graph
      const group = new THREE.Group();
      const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0x2dd4bf });

      const nodeCount = 12;
      const nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.set(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2.5,
          (Math.random() - 0.5) * 2
        );
        group.add(node);
        nodes.push(node.position);
      }

      // Lines connecting nodes
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x14b8a6,
        transparent: true,
        opacity: 0.4,
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (nodes[i].distanceTo(nodes[j]) < 2.2) {
            const lineGeo = new THREE.BufferGeometry().setFromPoints([
              nodes[i],
              nodes[j],
            ]);
            const line = new THREE.Line(lineGeo, lineMat);
            group.add(line);
          }
        }
      }
      mainObject = group;
      scene.add(mainObject);
    } else {
      // 3D Torus Knot - Deadline Guardian
      const geo = new THREE.TorusKnotGeometry(0.8, 0.24, 64, 16);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xf97316,
        emissive: 0x7c2d12,
        roughness: 0.3,
        metalness: 0.8,
        wireframe: true,
      });
      mainObject = new THREE.Mesh(geo, mat);
      scene.add(mainObject);

      // Ring particles
      const ringGeo = new THREE.BufferGeometry();
      const pCount = 50;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        const angle = (i / pCount) * Math.PI * 2;
        pPos[i * 3] = Math.cos(angle) * 1.6;
        pPos[i * 3 + 1] = Math.sin(angle) * 1.6;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
      }
      ringGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      const ringMat = new THREE.PointsMaterial({ color: 0xfdbdf4, size: 0.06 });
      particles = new THREE.Points(ringGeo, ringMat);
      scene.add(particles);
    }

    // Mouse movement state
    let targetX = 0;
    let targetY = 0;

    const cardElement = container.closest(".project-card");
    const handleMouseMove = (e) => {
      if (!cardElement) return;
      const rect = cardElement.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = -y * 1.5;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    if (cardElement) {
      cardElement.addEventListener("mousemove", handleMouseMove);
      cardElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (mainObject) {
        mainObject.rotation.x += 0.006;
        mainObject.rotation.y += 0.01;

        // Smooth camera lerp on mouse move
        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (targetY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }

      if (particles) {
        particles.rotation.z += 0.003;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      if (cardElement) {
        cardElement.removeEventListener("mousemove", handleMouseMove);
        cardElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [projectTitle]);

  return <div ref={mountRef} className="project-three-canvas" />;
}
