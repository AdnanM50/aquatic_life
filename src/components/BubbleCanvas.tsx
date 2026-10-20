'use client';

import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  wobbleAngle: number;
  opacity: number;
  vx: number;
  vy: number;
}

export default function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initialize bubbles
    const bubbleCount = Math.floor(Math.min(width / 32, 45));
    const bubbles: Bubble[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 3 + Math.random() * 9,
        speed: 0.4 + Math.random() * 0.9,
        wobbleSpeed: 0.015 + Math.random() * 0.025,
        wobbleAmp: 0.8 + Math.random() * 1.8,
        wobbleAngle: Math.random() * Math.PI * 2,
        opacity: 0.15 + Math.random() * 0.45,
        vx: 0,
        vy: 0,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];

        // Wobble physics
        b.wobbleAngle += b.wobbleSpeed;
        const currentX = b.x + Math.sin(b.wobbleAngle) * b.wobbleAmp;

        // Mouse deflection physics
        if (mouse.active) {
          const dx = currentX - mouse.x;
          const dy = b.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;

          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 2.2;
            b.vx += (dx / dist) * force;
            b.vy += (dy / dist) * force;
          }
        }

        // Apply velocities with damping
        b.x += b.vx;
        b.y += b.vy - b.speed;
        b.vx *= 0.92;
        b.vy *= 0.92;

        // Wrap around top/bottom
        if (b.y + b.radius < 0) {
          b.y = height + b.radius + Math.random() * 20;
          b.x = Math.random() * width;
          b.vx = 0;
          b.vy = 0;
        }

        // Draw bubble body with subtle gradient
        ctx.save();
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);

        // Ambient aquatic glow
        const grad = ctx.createRadialGradient(
          currentX - b.radius * 0.3,
          b.y - b.radius * 0.3,
          b.radius * 0.1,
          currentX,
          b.y,
          b.radius
        );
        grad.addColorStop(0, `rgba(180, 235, 255, ${b.opacity * 0.7})`);
        grad.addColorStop(0.7, `rgba(80, 180, 240, ${b.opacity * 0.35})`);
        grad.addColorStop(1, `rgba(10, 80, 160, ${b.opacity * 0.15})`);

        ctx.fillStyle = grad;
        ctx.fill();

        // Rim highlight stroke
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(200, 245, 255, ${b.opacity * 0.85})`;
        ctx.stroke();

        // Specular highlight gleam
        ctx.beginPath();
        ctx.arc(
          currentX - b.radius * 0.35,
          b.y - b.radius * 0.35,
          b.radius * 0.22,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.95})`;
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-15 w-full h-full opacity-80"
    />
  );
}
