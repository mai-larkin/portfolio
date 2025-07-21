import { TypewriterText } from "./components/TypewriterText";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import CodePanel from './components/CodePanel';

export default function Home() {
  return (
    <>
      <div className="container max-w-5xl pl-7 sm:pl-23 pr-7 sm:pr-22 font-[family-name:var(--font-geist-sans)]">
      
        <div className="absolute top-30 right-30 lg:w-[600px] lg:h-[600px] w-[300px] h-[300px] bg-violet-700/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 lg:w-[400px] lg:h-[400px] w-[150px] h-[150px] bg-violet-500/30 rounded-full blur-2xl"></div>
        <div className="absolute top-30 right-30 lg:w-[300px] lg:h-[300px] w-[100px] h-[100px] bg-violet-400/30 rounded-full blur-xl"></div>
        
        <div className="relative mt-25 sm:mt-45">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold tracking-light">
            Hi!<span className="ml-1.5"/> I{"'"}m <span className="text-indigo-600 brightness-160">Mai</span>
            <div className="block h-[1.5em] mt-2">
              <TypewriterText />
            </div>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-gray-300 leading-8">
            Welcome to my portfolio! I am a second year CompSci student, minoring in both AI and cybersecurity at Victoria University of Wellington.
          </p>
          <div className="flex mt-10 gap-7 text-base sm:text-lg">
            <a
              href="/resume_mai_larkin.pdf"
              download
              className="inline-flex px-6 py-3 rounded-lg bg-violet-700 brightness-110 text-white font-medium hover:scale-105 transition-transform duration-200"
            >
              <span className="pr-2">Resume</span>
              <ArrowDownTrayIcon className="mt-0.5 w-5 h-5" />
            </a>
            <a
              href="mailto:mailarkin1@gmail.com"
              className="px-6 py-3 rounded-lg bg-gray-900 font-medium hover:scale-105 transition-transform duration-200"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="pt-10">
          <CodePanel/>
        </div>
      </div>
    </>
  );
}