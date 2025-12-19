import React, { useState, useEffect } from 'react';

const OptimizedGridBackground = () => {
    const gridSize = 40;
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const glowRadius = 200; // Radius of glow effect in pixels

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Calculate grid dimensions based on viewport
    const cols = Math.ceil(window.innerWidth / gridSize) + 1;
    const rows = Math.ceil(window.innerHeight / gridSize) + 1;

    const getDistanceFromMouse = (cellX, cellY) => {
        const dx = cellX - mousePos.x;
        const dy = cellY - mousePos.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const getCellStyle = (col, row) => {
        const cellX = col * gridSize + gridSize / 2;
        const cellY = row * gridSize + gridSize / 2;
        const distance = getDistanceFromMouse(cellX, cellY);

        if (distance > glowRadius) {
            return { opacity: 0 };
        }

        const intensity = 1 - (distance / glowRadius);

        return {
            opacity: intensity * .8,
            //   background: `
            //     radial-gradient(
            //       circle at center,
            //       rgba(59, 130, 246, ${intensity * 0.6}) 0%,
            //       rgba(139, 92, 246, ${intensity * 0.4}) 40%,
            //       transparent 70%
            //     )
            //   `,
            //   boxShadow: `
            //     0 0 ${20 * intensity}px rgba(59, 130, 246, ${intensity * 0.8}),
            //     0 0 ${40 * intensity}px rgba(139, 92, 246, ${intensity * 0.6}),
            //     inset 0 0 ${20 * intensity}px rgba(99, 102, 241, ${intensity * 0.5})
            //   `,
            border: `.1px solid transparent`,
            borderImage: `linear-gradient(90deg, #3b82f6, #8b5cf6) 1`
    };
};

return (
    <div className="relative w-full h-screen bg-gray-950 overflow-hidden">
        {/* Static Grid Lines */}
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                backgroundImage: `
            linear-gradient(to right, rgba(75, 85, 99, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(75, 85, 99, 0.03) 1px, transparent 1px)
          `,
                backgroundSize: `${gridSize}px ${gridSize}px`,
            }}
        />

        {/* Interactive Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: rows }).map((_, row) => (
                Array.from({ length: cols }).map((_, col) => (
                    <div
                        key={`${row}-${col}`}
                        className="absolute transition-opacity duration-150 ease-out"
                        style={{
                            left: col * gridSize,
                            top: row * gridSize,
                            width: gridSize,
                            height: gridSize,
                            ...getCellStyle(col, row),
                        }}
                    />
                ))
            ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full pointer-events-none">
            <div className="text-center p-8 bg-gray-900/70 rounded-2xl backdrop-blur-sm border border-gray-800 pointer-events-auto">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Interactive Grid
                </h1>
                <p className="text-gray-300 text-lg">
                    Move your cursor around to see the grid glow
                </p>
            </div>
        </div>
    </div>
);
};

export default OptimizedGridBackground;