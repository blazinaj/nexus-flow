import React, { useEffect, useRef } from 'react';

const InventoryStatusChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simplified chart rendering
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // In a real implementation, we would use a charting library like Chart.js
    // This is a placeholder visualization
    const data = [
      { label: 'Available', value: 65, color: '#10B981' },
      { label: 'Reserved', value: 15, color: '#3B82F6' },
      { label: 'Used', value: 10, color: '#6366F1' },
      { label: 'Planned', value: 5, color: '#F59E0B' },
      { label: 'Scrapped', value: 5, color: '#EF4444' }
    ];
    
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const radius = Math.min(width, height) / 2;
    const centerX = width / 2;
    const centerY = height / 2;
    
    let startAngle = 0;
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    // Draw pie chart
    data.forEach(item => {
      const sliceAngle = (2 * Math.PI * item.value) / total;
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      
      ctx.fillStyle = item.color;
      ctx.fill();
      
      startAngle += sliceAngle;
    });
    
    // Draw center circle for donut effect
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 flex justify-center">
        <canvas 
          ref={canvasRef} 
          width={200} 
          height={200} 
          className="max-w-full"
        ></canvas>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-600">Available</span>
            </div>
            <span className="font-medium">65%</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 rounded-full bg-blue-500"></span>
              <span className="text-sm text-gray-600">Reserved</span>
            </div>
            <span className="font-medium">15%</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 rounded-full bg-indigo-500"></span>
              <span className="text-sm text-gray-600">Used</span>
            </div>
            <span className="font-medium">10%</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 rounded-full bg-amber-500"></span>
              <span className="text-sm text-gray-600">Planned</span>
            </div>
            <span className="font-medium">5%</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="block h-3 w-3 rounded-full bg-red-500"></span>
              <span className="text-sm text-gray-600">Scrapped</span>
            </div>
            <span className="font-medium">5%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InventoryStatusChart;