import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import CarModel from '../model/2022_apollo_project_evo.glb';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

import Svg from '../components/Svg';
import Story from '../components/Story';
import Speed from '../components/Speed';
import Intro from '../components/Intro';
import UniqueCard from '../components/UniqueCard';
import Safety from '../components/Safety';
import Gallery from '../components/Gallery';
import gsap from 'gsap';
import Contact from '../components/Contact';
import Video from '../components/Video';
import Hero from '../components/Hero';
import Intro2 from '../components/Intro2';

export default function ModelSection() {
  const mountRef = useRef(null); // Ref to the container element
  const carRef = useRef(null); // Ref to the car model
  const isRotating = useRef(false); // Ref to track rotation state

  const carPositions = [
    { id: 'zero', position: { x: 0, y: -1, z: 0 }, rotation: { x: 0, y: 0, z: 0 } },
    { id: 'first', position: { x: 0, y: -1, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 } },
    { id: 'second', position: { x: 7, y: -1, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 } },
    { id: 'third', position: { x: 0, y: -1, z: 0 }, rotation: { x: 0, y: 2.5, z: 0 } },
    { id: 'fourth', position: { x: 2, y: -1, z: 0 }, rotation: { x: 0.3, y: -0.5, z: 0 } },
    { id: 'fifth', position: { x: -2.5, y: -1, z: -8 }, rotation: { x: 0, y: 1.5, z: -5 } },
    { id: 'sixth', position: { x: 0, y: -.5, z: -1 }, rotation: { x : .2 , y : .8 , z : 0} }, 
    { id: 'seventh', position: { x: 0, y: -1, z: -3 }, rotation: { x: .3, y: 0, z: 0 } },
    { id: 'eighth', position: { x: -3, y: -1.2, z: -10 }, rotation: { x: 0, y: .8, z: 0 } },
    { id: 'ninth', position: { x: 0, y: -.5, z: 0 }, rotation: { x: 0, y: 1.5, z: 0 } },


  ];

  useEffect(() => {
    // Set up the Three.js scene
    const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const scene = new THREE.Scene();

    // Load the GLB model
    const loader = new GLTFLoader();
    loader.load(
      CarModel,
      (gltf) => {
        const car = gltf.scene;
        car.position.y = -1;
        car.rotation.y = 1;
        scene.add(car);
        carRef.current = car; // Store the car model in the ref
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (err) => {
        console.error(err);
      }
    );

    // Set up the renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth movement
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.5;
    controls.enableZoom = false;

    // Add lights
    const rgbeLoader = new RGBELoader();
    rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/zwartkops_straight_afternoon_1k.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
    });

    // Append the renderer's DOM element to the mountRef container
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update OrbitControls

      if (carRef.current) {
        carRef.current.rotation.y += isRotating.current ? 0.02 : 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to remove the renderer's DOM element when the component unmounts
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  const modelMove = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        currentSection = section.id;
      }
    });

    const position_active = carPositions.findIndex((val) => val.id === currentSection);
    if (position_active >= 0 && carRef.current) {
      const new_coordinate = carPositions[position_active];
    
      gsap.to(carRef.current.position, {
        x: new_coordinate.position.x,
        y: new_coordinate.position.y,
        z: new_coordinate.position.z,
        duration: 1.2,
        ease: "power2.out",
      });
    
      gsap.to(carRef.current.rotation, {
        x: new_coordinate.rotation.x,
        y: new_coordinate.rotation.y,
        z: new_coordinate.rotation.z,
        duration: 1.2,
        ease: "power2.out",
      });
    }
    
  };

  useEffect(() => {
    window.addEventListener('scroll', modelMove);
    return () => {
      window.removeEventListener('scroll', modelMove);
    };
  }, []); // Add and remove scroll event listener

  // Intersection Observer for 8th section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isRotating.current = entry.isIntersecting; 
      },
      { threshold: 0.5 }
    );

    const ninthSection = document.getElementById("ninth");
    if (ninthSection) observer.observe(ninthSection);

    return () => {
      if (ninthSection) observer.unobserve(ninthSection);
    };
  }, []);

  return (
    <section>
      <div id='zero'>
      <div id="first" className='m-[2vw]  bg-amber-300/40'>
    <Hero/>
      </div>
      </div>

      <div id="second" className=" w-full h-screen section ">
        <Svg/>
      </div>

      <div id="" className="px-[2vw] w-full py-8 section">
    <Intro/>
      </div>
      
      <div  id="third" className="w-full h-[50vh] section"></div>
      <div id="fourth" className="px-[2vw] w-full section"><Story/></div>

      <div id="fifth" className="px-[2vw] w-full h-screen section  flex justify-end items-center">
     <Intro2/>
      </div>
      
      <div id="sixth" className="w-full h-screen section relative"><Speed/></div>
      <div className="w-full h-screen section relative z-40">
       <UniqueCard/>
      </div>
      <Video/>
      <Gallery/>
      <div id="seventh" className="px-[2vw] w-full h-screen section relative my-24"><Safety/></div>
      <div id="eighth" className=" section relative mt-24 mb-[40vh]"><Contact/></div>
      <div id="ninth" className="px-[2vw]  w-full h-screen section relative flex items-end justify-center">
       <h1 className='text-[1.3vw] border-[#C04922] border-t-[4px]  font-bold text-white/90 py-4'>The Apollo EVO &copy; 2025</h1>
      </div>
    <div ref={mountRef} className="carContainer fixed inset-0 z-10 pointer-events-none"></div> 
    </section>
  );
}