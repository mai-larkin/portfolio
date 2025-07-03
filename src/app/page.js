import { TypewriterText } from "./components/TypewriterText";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import CodePanel from './components/CodePanel';
import Navbar from './components/Header';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container max-w-4xl pl-15 sm:pl-20 pr-15 sm:pr-20 font-[family-name:var(--font-geist-sans)]">
      
        <div className="absolute top-30 right-30 lg:w-[600px] lg:h-[600px] w-[300px] h-[300px] bg-violet-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 lg:w-[400px] lg:h-[400px] w-[150px] h-[150px] bg-violet-500/30 rounded-full blur-2xl"></div>
        <div className="absolute top-30 right-30 lg:w-[300px] lg:h-[300px] w-[100px] h-[100px] bg-violet-400/30 rounded-full blur-xl"></div>
        
        <div className="relative mt-50">
          <h1 className="text-4xl font-bold tracking-light">
            Hi! I{"'"}m <span className="text-indigo-600 brightness-160">Mai</span>
            <span className="block text-violet-500 h-[1.5em] mt-2">
              <TypewriterText />
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-300 leading-8">
            description text description text description text description text description text description text description text
          </p>
          <div className="flex mt-10 gap-7">
            <button className="inline-flex px-6 py-3 rounded-lg bg-violet-700 brightness-110 text-white font-medium hover:scale-105 transition-transform duration-200">
              <span className="pr-2">Resume</span>
              <ArrowDownTrayIcon className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 rounded-lg bg-gray-900 font-medium hover:scale-105 transition-transform duration-200">Contact</button>
          </div>
        </div>
        <div className="pt-10">
          <CodePanel/>
        </div>
      </div>
    </>
  );
}
