import { ArrowRight } from 'lucide-react';

export default function Banner({ title, subtitle, image, cta = 'Shop Now', align = 'right', className = '' }) {
  return (
    <div className={`bg-gray-100 rounded-lg p-6 relative overflow-hidden ${className}`}>
      <div className="relative z-10">
        {subtitle && <div className="text-sm text-gray-600 mb-1">{subtitle}</div>}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        {cta && <button className="text-blue-600 font-semibold">{cta} &gt;</button>}
      </div>
      {image && (
        <div className={`absolute ${align === 'right' ? 'right-0 top-0' : 'left-0 top-0'} w-28 h-28`}>
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
      )}
    </div>
  );
}
