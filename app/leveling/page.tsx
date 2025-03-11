import { demonGodLevelingCosts, relicLevelingCosts } from '../../data/levelingCosts';
import Image from 'next/image';

export default function LevelingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Leveling Costs</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Demon God Leveling Cost</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-black rounded-lg overflow-hidden border border-gray-800">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Level</th>
                  <th className="px-4 py-3 text-right font-semibold">Demon Gods</th>
                  <th className="px-4 py-3 text-center w-8"></th>
                  <th className="px-4 py-3 text-right font-semibold">Souls</th>
                </tr>
              </thead>
              <tbody>
                {demonGodLevelingCosts.map((cost, index) => (
                  <tr key={index} className="bg-black text-white border-b border-gray-800">
                    <td className="px-4 py-2 text-gray-300">
                      Lv. {cost.level} =&gt; {cost.nextLevel}
                    </td>
                    <td className="px-4 py-2 text-right text-gray-300">
                      <div className="flex items-center justify-end">
                        <span>{cost.demonGods.toLocaleString()}</span>
                        <Image 
                          src="/images/demon-god-icon.png" 
                          alt="Demon God" 
                          width={24} 
                          height={24} 
                          className="ml-2"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center text-gray-300">+</td>
                    <td className="px-4 py-2 text-right text-gray-300">
                      <div className="flex items-center justify-end">
                        <span>{cost.souls.toLocaleString()}</span>
                        <Image 
                          src="/images/souls-icon.png" 
                          alt="Souls" 
                          width={24} 
                          height={24} 
                          className="ml-2"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Relic Leveling Cost</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-black rounded-lg overflow-hidden border border-gray-800">
              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Level</th>
                  <th className="px-4 py-3 text-right font-semibold">Shards</th>
                  <th className="px-4 py-3 text-center w-8"></th>
                  <th className="px-4 py-3 text-right font-semibold">Silver</th>
                </tr>
              </thead>
              <tbody>
                {relicLevelingCosts.map((cost, index) => (
                  <tr key={index} className="bg-black text-white border-b border-gray-800">
                    <td className="px-4 py-2 text-gray-300">
                      Lv. {cost.level} =&gt; {cost.nextLevel}
                    </td>
                    <td className="px-4 py-2 text-right text-gray-300">
                      <div className="flex items-center justify-end">
                        <span>{cost.shards} Shards</span>
                       
                      </div>
                    </td>
                    <td className="px-4 py-2 text-center text-gray-300">+</td>
                    <td className="px-4 py-2 text-right text-gray-300">
                      <div className="flex items-center justify-end">
                        <span>{cost.silver.toLocaleString()}</span>
                        <Image 
                          src="/images/silver-icon.png" 
                          alt="Silver" 
                          width={24} 
                          height={24} 
                          className="ml-2"
                        />
                      </div>
                    </td>
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