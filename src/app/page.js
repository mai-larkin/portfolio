import { TypewriterText } from "./components/TypewriterText";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import CodePanel from './components/CodePanel';
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="relative">   {/* <-- NEW WRAPPER */}
      
      {/* BACKGROUND CIRCLES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-30 right-30 lg:w-[600px] lg:h-[600px] w-[300px] h-[300px] bg-violet-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 lg:w-[400px] lg:h-[400px] w-[150px] h-[150px] bg-violet-500/15 rounded-full blur-2xl"></div>
        <div className="absolute top-30 right-30 lg:w-[300px] lg:h-[300px] w-[100px] h-[100px] bg-violet-400/15 rounded-full blur-2xl"></div>
      </div>

      {/* FOREGROUND */}
      <div className="relative z-10">

          
          <div className="min-h-screen flex items-center pt-15 pb-15 pl-10 pr-10">
            <div className="flex flex-col justify-center h-full mx-auto max-w-[58rem]">

              <h2 className="text-[0.8rem] lg:text-[1.4rem] pb-3 font-semibold brightness-170 bg-gradient-to-tr from-indigo-600 to-indigo-800 bg-clip-text text-transparent font-tiktok tracking-tight">Welcome to my portfolio.</h2>

              {/*  MAIN TEXT */}
              <h1 className="xl:text-[4.5rem] lg:text-[4.2rem] md:text-5xl sm:text-4xl text-[1.6rem] font-bold tracking-light font-tiktok tracking-tight">
                Hi! <span className=""/> I{"'"}m <span className="bg-gradient-to-tr brightness-170 from-indigo-600 to-indigo-800 bg-clip-text text-transparent">Mai</span>, a
                <div className="block h-[1.5em] mt-3">
                  <TypewriterText />
                </div>
              </h1>

              
              
              {/* Buttons */}
              <div className="flex mt-10 gap-7 text-base sm:text-lg">
                <a href="/resume_mai_larkin.pdf" download className="inline-flex px-6 py-3 rounded-lg bg-gradient-to-tr from-[#7B09FE] to-indigo-600 text-white font-medium hover:scale-105 transition-transform duration-200">
                  <span className="pr-2">Resume</span>
                  <ArrowDownTrayIcon className="mt-0.5 w-5 h-5" />
                </a>

                <a href="mailto:mailarkin1@gmail.com" className="font-medium px-6 py-3 rounded-lg bg-gray-900 hover:scale-105 transition-transform duration-200">
                  Email Me
                </a>
              </div>

              <div className="pt-10 min-w-[21rem] sm:min-w-[35rem] md:min-w-[42rem] lg:min-w-[54rem] xl:min-w-[58rem]">
                <CodePanel/>
              </div>

            </div>
          </div>

          <Projects />
      </div>

    </div>
  );
}
