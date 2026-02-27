import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgStyle } from '@angular/common';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink, NgFor, NgStyle],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements AfterViewInit, OnDestroy {

  @ViewChild('logoCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private animFrameId!: number;
  private logo!: THREE.Object3D;

  // Floating particles data
  particles = Array.from({ length: 20 }, () => ({
    style: {
      width:  Math.random() * 4 + 2 + 'px',
      height: Math.random() * 4 + 2 + 'px',
      left:   Math.random() * 100 + '%',
      top:    Math.random() * 100 + '%',
      animationDelay:    Math.random() * 6 + 's',
      animationDuration: Math.random() * 8 + 6 + 's',
      opacity: Math.random() * 0.4 + 0.1
    }
  }));

  ngAfterViewInit(): void {
    this.initThree();
  }

  private initThree(): void {
    const canvas  = this.canvasRef.nativeElement;
    const width   = canvas.clientWidth  || 320;
    const height  = canvas.clientHeight || 320;

    /* ---- Renderer ---- */
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    /* ---- Scene ---- */
    this.scene = new THREE.Scene();

    /* ---- Camera ---- */
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 4);

    /* ---- Lights ---- */
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);

    const cyan = new THREE.PointLight(0x00E5FF, 3, 20);
    cyan.position.set(3, 3, 3);
    this.scene.add(cyan);

    const violet = new THREE.PointLight(0x7B3FE4, 2, 20);
    violet.position.set(-3, -2, 2);
    this.scene.add(violet);

    const rim = new THREE.DirectionalLight(0xffffff, 0.8);
    rim.position.set(0, 5, -5);
    this.scene.add(rim);

    /* ---- Load GLB ---- */
    const loader = new GLTFLoader();
    loader.load(
      '/assets/logo3D.glb',           // ← غير المسار لو احتجت
      (gltf) => {
        this.logo = gltf.scene;

        // Center the model
        const box = new THREE.Box3().setFromObject(this.logo);
        const center = box.getCenter(new THREE.Vector3());
        this.logo.position.sub(center);

        // Scale to fit
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        this.logo.scale.setScalar(2 / maxDim);

        this.scene.add(this.logo);
      },
      undefined,
      (err) => console.error('GLB load error:', err)
    );

    /* ---- Animate ---- */
    this.animate();
  }

  private animate(): void {
    this.animFrameId = requestAnimationFrame(() => this.animate());

    if (this.logo) {
      this.logo.rotation.y += 0.118;
      this.logo.rotation.x = Math.sin(Date.now() * 0.0008) * 0.15;
    }

    this.renderer.render(this.scene, this.camera);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animFrameId);
    this.renderer?.dispose();
  }
}