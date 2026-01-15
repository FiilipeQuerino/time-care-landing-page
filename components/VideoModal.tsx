
import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-[2rem] shadow-2xl overflow-hidden border border-rose-200/20">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Placeholder for a real video embed */}
        <div className="absolute inset-0 flex flex-col items-center justify-center group cursor-pointer">
          <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center shadow-xl shadow-rose-500/40 group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-white fill-current" />
          </div>
          <p className="mt-6 text-white font-serif text-xl font-medium tracking-wide">Conheça o Time Care em 2 minutos</p>
          
          {/* Using a high quality aesthetic video placeholder background */}
          <img 
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 -z-10 object-cover opacity-40 grayscale-[0.3]"
            alt="Clinic interior"
          />
        </div>
        
        {/* In a real scenario, replace the div above with:
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
          title="Time Care Video Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> 
        */}
      </div>
    </div>
  );
};

export default VideoModal;
