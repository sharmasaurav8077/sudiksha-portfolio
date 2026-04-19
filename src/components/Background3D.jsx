import { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    
    let width, height;
    let particles = [];
    let animationFrameId;
    
    let mouse = { x: 0, y: 0 };
    let targetMouse = { x: 0, y: 0 };

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Handle high DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      particles = [];
      
      // Grid dimensions based on screen size
      const isMobile = width < 768;
      const cols = isMobile ? 35 : 70;
      const rows = isMobile ? 40 : 80;
      
      const spacingX = width * 1.5 / cols; // Spread out wider than screen
      const spacingZ = 25; 
      
      for (let z = 0; z < rows; z++) {
        for (let x = 0; x < cols; x++) {
          particles.push({
            ix: x,
            iz: z,
            x: (x - cols / 2) * spacingX,
            y: 0,
            z: z * spacingZ
          });
        }
      }
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e) => {
      // Normalize mouse to -1 to +1 range
      targetMouse.x = (e.clientX / width) * 2 - 1;
      targetMouse.y = -(e.clientY / height) * 2 + 1;
    };

    // Touch support for mobile interaction
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        targetMouse.x = (e.touches[0].clientX / width) * 2 - 1;
        targetMouse.y = -(e.touches[0].clientY / height) * 2 + 1;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    init();

    let time = 0;
    
    const render = () => {
      time += 0.02; // Wave speed
      
      // Smooth interpolation for mouse movement
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);
      
      const fov = 350; // Camera field of view
      const viewDistance = 50; 
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Calculate dynamic Y (the flowing wave)
        let py = Math.sin((p.ix * 0.2) + time) * 15 + Math.cos((p.iz * 0.2) + time) * 15;
        
        // Add ripple based on cursor proximity
        // Map normalized mouse to roughly the grid scale
        const mx = mouse.x * (width / 2);
        const mz = (-mouse.y + 0.5) * 400; // mapped Z depth
        
        const dx = p.x - mx;
        const dz = p.z - mz;
        const dist = Math.sqrt(dx * dx + dz * dz);
        
        // If close to cursor, push up creating a ripple
        if (dist < 150) {
          py += Math.cos(dist * 0.05) * (150 - dist) * 0.2;
        }

        // 3D to 2D projection
        const z = p.z + viewDistance;
        
        if (z < 1) continue;
        
        const scale = fov / z;
        
        // Subtle parallax offset based on mouse
        const px = p.x - (mouse.x * z * 0.2);
        
        const x2d = px * scale + width / 2;
        // Shift downwards and add base Y perspective
        const y2d = py * scale + height / 2 + (150 * scale); 

        // Depth fog (fade out in distance)
        const maxDepth = 1500;
        const opacity = Math.max(0, 1 - (p.z / maxDepth));
        
        // Only draw if visible on screen and not completely faded
        if (opacity > 0.01 && x2d > -20 && x2d < width + 20 && y2d > -20 && y2d < height + 20) {
          // Dot size scales with depth
          const size = Math.max(0.5, scale * 1.5);
          
          ctx.beginPath();
          ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
          // Gold color #D4AF37 with calculated opacity
          ctx.fillStyle = `rgba(212, 175, 55, ${opacity * 0.7})`; 
          ctx.fill();
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-90 animate-fade-in">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
      {/* Fog/Vignette Overlay for depth blending */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-dark/40 to-dark opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark to-transparent opacity-90" />
    </div>
  );
};

export default Background3D;
