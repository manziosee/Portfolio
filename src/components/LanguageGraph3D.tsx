import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMemo } from 'react';

const languages = [
  { name: 'TypeScript', percentage: 48.97, color: '#3178c6' },
  { name: 'Python', percentage: 19.40, color: '#3776ab' },
  { name: 'JavaScript', percentage: 18.79, color: '#f7df1e' },
  { name: 'Java', percentage: 6.69, color: '#b07219' },
  { name: 'Vue', percentage: 3.75, color: '#41b883' },
  { name: 'PowerShell', percentage: 2.39, color: '#012456' }
];

function Bar({ position, height, color }: { position: [number, number, number], height: number, color: string }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, height, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export function LanguageGraph3D({ darkMode }: { darkMode: boolean }) {
  const bars = useMemo(() => {
    return languages.map((lang, i) => {
      const x = (i - (languages.length - 1) / 2) * 0.8;
      const height = lang.percentage / 20;
      return (
        <Bar
          key={lang.name}
          position={[x, height / 2, 0]}
          height={height}
          color={lang.color}
        />
      );
    });
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Programming Languages Distribution</h2>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg hover:scale-105 transition-transform`}>
        <div className="h-[400px]">
          <Canvas camera={{ position: [0, 4, 8] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {bars}
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map(lang => (
            <div key={lang.name} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: lang.color }}
              />
              <span className="text-sm">
                {lang.name} ({lang.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
