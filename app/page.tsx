import Link from 'next/link';
import Image from 'next/image';
import { demonGods } from '../data/demonGods';

export default function Home() {
  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link href="/demon-gods" className="bg-white hover:bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Demon Gods</h2>
          <p className="text-gray-600">Browse all available demon gods, their stats, and abilities</p>
        </Link>
        
        <Link href="/leveling" className="bg-white hover:bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm transition-all hover:shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Leveling Costs</h2>
          <p className="text-gray-600">View demon god and relic leveling requirements</p>
        </Link>
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Demon Gods</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {demonGods.slice(0, 8).map(god => (
          <Link href={`/demon-gods/${god.id}`} key={god.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Card background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90"></div>
            
            {/* Card content */}
            <div className="relative z-10 p-4 h-full flex flex-col">
              {/* Card header */}
              <div className="text-center mb-2">
                <h3 className="text-white font-bold text-lg tracking-wide">{god.name}</h3>
              </div>
              
              {/* Card image */}
              <div className="flex-grow flex items-center justify-center py-3">
                <div className="relative w-32 h-32 bg-white bg-opacity-20 rounded-full p-2 transform transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-indigo-100 opacity-30"></div>
                  <Image 
                    src={god.imageUrl} 
                    alt={god.name}
                    width={120}
                    height={120}
                    className="object-contain relative z-10 drop-shadow-lg"
                  />
                </div>
              </div>
              
              {/* Card footer - subtle line */}
              <div className="mt-auto pt-2 border-t border-white border-opacity-20"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 