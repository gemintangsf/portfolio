"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        // Dot configuration
        const DOT_SPACING = 30; // Spacing between dots
        const DOT_RADIUS = 1.5; // Base radius
        const HOVER_RADIUS = 300; // Radius of mouse interaction

        // Brand color: #005461 (Dark Teal)
        const DOT_COLOR = "rgba(0, 84, 97, 0.4)"; // Low opacity base color
        const HOVER_COLOR = "rgba(0, 183, 181, 0.8)"; // Bright Accent on hover

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = event.clientX - rect.left;
            mouseY = event.clientY - rect.top;
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let x = 0; x < canvas.width; x += DOT_SPACING) {
                for (let y = 0; y < canvas.height; y += DOT_SPACING) {
                    const dx = mouseX - x;
                    const dy = mouseY - y;
                    const distance = Math.hypot(dx, dy);

                    let currentRadius = DOT_RADIUS;


                    // Interaction logic: Scale up if close to mouse
                    if (distance < HOVER_RADIUS) {
                        const scale = 1 + (HOVER_RADIUS - distance) / HOVER_RADIUS; // Scale factor
                        currentRadius = DOT_RADIUS * scale;

                        // Optional: Change color closer to mouse
                        // simple check to swap color if very close
                        if (distance < HOVER_RADIUS / 2) {
                            ctx.fillStyle = HOVER_COLOR;
                        } else {
                            ctx.fillStyle = DOT_COLOR;
                        }
                    } else {
                        ctx.fillStyle = DOT_COLOR;
                    }

                    ctx.beginPath();
                    ctx.arc(x, y, currentRadius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        // Initial setup
        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
                // Masking to fade out dots in the center where content lives
                maskImage: "radial-gradient(circle at center, transparent 10%, black 60%)",
                WebkitMaskImage: "radial-gradient(circle at center, transparent 10%, black 60%)"
            }}
        />
    );
}
