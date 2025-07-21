export default function InfoPanels() {
  return (
    <div className="flex flex-col gap-6 w-full sm:w-[300px]">
      <div className="p-6 rounded-xl bg-gray-800 text-white shadow-md hover:scale-[1.02] transition-transform duration-200">
        <h2 className="text-xl font-bold mb-2">About Me</h2>
        <p>I’m a CompSci student passionate about AI and cybersecurity.</p>
      </div>

      <div className="p-6 rounded-xl bg-gray-800 text-white shadow-md hover:scale-[1.02] transition-transform duration-200">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside text-sm">
          <li>JavaScript, Python</li>
          <li>React, Node.js</li>
          <li>Cybersecurity fundamentals</li>
        </ul>
      </div>

      <div className="p-6 rounded-xl bg-gray-800 text-white shadow-md hover:scale-[1.02] transition-transform duration-200">
        <h2 className="text-xl font-bold mb-2">LinkedIn</h2>
        <a
          href="https://www.linkedin.com/in/mai-larkin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          linkedin.com/in/mai-larkin
        </a>
      </div>
    </div>
  );
}