import { demonGods } from '../../../data/demonGods';
import { demonGodLevelingCosts } from '../../../data/levelingCosts';
import Link from 'next/link';
import Image from 'next/image';

export default function DemonGodPage({ params }: { params: { id: string } }) {
  const demonGod = demonGods.find(god => god.id === params.id);
  
  if (!demonGod) {
    return <div>Demon God not found</div>;
  }
  
  return (
    <div>
      <Link href="/demon-gods" className="text-indigo-600 hover:text-indigo-800 mb-6 inline-flex items-center font-medium group">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to All Demon Gods
      </Link>
      
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 mb-8">
        {/* Hero section with gradient background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700"></div>
          <div className="relative z-10 px-8 py-12 flex flex-col md:flex-row items-center">
            {/* Image container */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-white bg-opacity-20"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-indigo-100 opacity-30"></div>
                <Image 
                  src={demonGod.imageUrl} 
                  alt={demonGod.name}
                  width={240}
                  height={240}
                  className="object-contain relative z-10 drop-shadow-xl"
                />
              </div>
            </div>
            
            {/* Title and power */}
            <div className="md:w-2/3 text-center md:text-left md:pl-8">
              <h1 className="text-4xl font-bold text-white mb-4">{demonGod.name}</h1>
              <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white mb-4">
                <span>Power: <span className="font-semibold">{demonGod.currentPower}</span>/{demonGod.maxPower}</span>
              </div>
              <p className="text-indigo-100 leading-relaxed text-lg max-w-2xl">
                {demonGod.description || 'No description available.'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Abilities section */}
        <div className="px-8 py-10 bg-white">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Abilities
          </h2>
          {demonGod.abilities && demonGod.abilities.length > 0 ? (
            <div className="flex flex-wrap gap-3 mb-6">
              {demonGod.abilities.map((ability, index) => (
                <span key={index} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium">
                  {ability}
                </span>
              ))}
            </div>
          ) : (
            <p className="mb-6 text-gray-600">No abilities listed.</p>
          )}
        </div>
        
        {/* Leveling costs section */}
        <div className="px-8 py-10 border-t border-gray-100 bg-gray-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Leveling Costs
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Level</th>
                  <th className="px-6 py-4 text-left font-semibold">Demon Gods Required</th>
                  <th className="px-6 py-4 text-left font-semibold">Souls</th>
                </tr>
              </thead>
              <tbody>
                {demonGodLevelingCosts.map((cost, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-indigo-50' : 'bg-gray-50 hover:bg-indigo-50'}>
                    <td className="px-6 py-4 border-b border-gray-100 text-gray-700 font-medium">{cost.level}</td>
                    <td className="px-6 py-4 border-b border-gray-100 text-gray-700">{cost.demonGods}</td>
                    <td className="px-6 py-4 border-b border-gray-100 text-indigo-700 font-medium">{cost.souls.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 