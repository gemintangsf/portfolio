"use client";

import { useEffect, useRef } from "react";
import { useUI } from "@/hooks/useUI";

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useUI();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        // Clover configuration
        const CLOVER_SPACING = 55; // Spacing between clovers
        const BASE_SIZE = 7; // Base size of the clover (full diameter ~14px)
        const HOVER_RADIUS = 250; // Radius of mouse interaction

        // Theme-aware white/dark colors for subtle background pattern
        const CLOVER_COLOR = theme === 'dark' ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)";
        const HOVER_COLOR = theme === 'dark' ? "rgba(255, 255, 255, 0.45)" : "rgba(0, 0, 0, 0.45)";


        let tick = false;

        const requestDraw = () => {
            if (!tick) {
                tick = true;
                animationFrameId = requestAnimationFrame(() => {
                    draw();
                    tick = false;
                });
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            requestDraw();
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = event.clientX - rect.left;
            mouseY = event.clientY - rect.top;
            requestDraw();
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
            requestDraw();
        };

        const drawClover = (x: number, y: number, size: number) => {
            ctx.beginPath();
            for (let angle = 0; angle < Math.PI * 2; angle += 0.08) {
                // Polar rose curve rotated by 45 deg to align with axes
                // exponent 0.6 makes the leaves rounded and distinct
                const r = Math.pow(Math.abs(Math.cos(2 * angle)), 0.6) * size;
                const px = x + r * Math.cos(angle);
                const py = y + r * Math.sin(angle);
                if (angle === 0) {
                    ctx.moveTo(px, py);
                } else {
                    ctx.lineTo(px, py);
                }
            }
            ctx.closePath();
            ctx.fill();
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let x = CLOVER_SPACING / 2; x < canvas.width; x += CLOVER_SPACING) {
                for (let y = CLOVER_SPACING / 2; y < canvas.height; y += CLOVER_SPACING) {
                    const dx = mouseX - x;
                    const dy = mouseY - y;
                    const distance = Math.hypot(dx, dy);

                    let currentSize = BASE_SIZE;

                    if (distance < HOVER_RADIUS) {
                        const scale = 1 + (HOVER_RADIUS - distance) / HOVER_RADIUS; // Scale factor
                        currentSize = BASE_SIZE * scale;

                        ctx.fillStyle = HOVER_COLOR;
                    } else {
                        ctx.fillStyle = CLOVER_COLOR;
                    }

                    drawClover(x, y, currentSize);
                }
            }
        };

        // Initial setup
        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [theme]);

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
