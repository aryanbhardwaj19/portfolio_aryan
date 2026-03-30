import { useEffect, useRef, useCallback } from 'react';
import './ElectricBorder.css';

const ElectricBorder = ({
  children,
  backgroundColor = 'transparent',
  borderColor = '#e15a40',
  glowColor = '#e15a40',
  borderRadius = '24px',
  borderWidth = '2px',
  duration = 3,
  className = '',
  ...props
}) => {
  const containerRef = useRef(null);
  const borderRef = useRef(null);

  const updatePath = useCallback(() => {
    if (!containerRef.current || !borderRef.current) return;

    const container = containerRef.current;
    const border = borderRef.current;
    
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    const radius = parseFloat(borderRadius);
    
    // Create the path for the electric effect to follow
    const path = `M ${width/2} 0 
                  L ${width - radius} 0 
                  Q ${width} 0 ${width} ${radius} 
                  L ${width} ${height - radius} 
                  Q ${width} ${height} ${width - radius} ${height} 
                  L ${radius} ${height} 
                  Q 0 ${height} 0 ${height - radius} 
                  L 0 ${radius} 
                  Q 0 0 ${radius} 0 
                  L ${width/2} 0 Z`;
    
    border.style.setProperty('--eb-path', `path('${path}')`);
    border.style.setProperty('--eb-width', `${width}px`);
    border.style.setProperty('--eb-height', `${height}px`);
  }, [borderRadius]);

  useEffect(() => {
    updatePath();
    const resizeObserver = new ResizeObserver(updatePath);
    if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [updatePath]);

  return (
    <div 
      className={`electric-border-container ${className}`} 
      ref={containerRef}
      style={{
        '--electric-border-color': borderColor,
        '--electric-glow-color': glowColor,
        '--eb-duration': `${duration}s`,
        '--eb-border-radius': borderRadius,
        '--eb-border-width': borderWidth,
        backgroundColor,
        borderRadius
      }}
      {...props}
    >
      <div className="electric-border-main" ref={borderRef}>
        <div className="eb-line eb-glow-1"></div>
        <div className="eb-line eb-glow-2"></div>
      </div>
      <div className="eb-background-glow"></div>
      <div className="eb-content">
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
