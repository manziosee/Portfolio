interface GitHubStats {
    darkMode: boolean;
  }
  
  export function GitHubStats({ darkMode }: GitHubStats) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">GitHub Statistics</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg animate-scale-in hover:scale-105 transition-transform`}>
            <img
              src="https://github-readme-stats.vercel.app/api?username=manziosee&show_icons=true&theme=transparent&hide_border=true&title_color=0ea5e9&text_color=64748b&icon_color=0ea5e9"
              alt="GitHub Stats"
              className="w-full"
            />
          </div>
          <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg animate-scale-in hover:scale-105 transition-transform`}>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=manziosee&layout=compact&theme=transparent&hide_border=true&title_color=0ea5e9&text_color=64748b"
              alt="Top Languages"
              className="w-full"
            />
          </div>
        </div>
        <div className={`mt-6 p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg animate-scale-in hover:scale-105 transition-transform`}>
          <img
            src="https://github-profile-trophy.vercel.app/?username=manziosee&theme=onestar&no-frame=true&column=7"
            alt="GitHub Trophies"
            className="w-full"
          />
        </div>
      </section>
    );
  }
  