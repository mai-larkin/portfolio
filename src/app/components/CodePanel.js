'use client';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodePanel() {
  const [language, setLanguage] = useState('java');

  const codeSnippets = {
    java: `public class Welcome {
  public static void main(String[] args) {
    System.out.println("Welcome to my site!");
    // Feel free to reach out!
  }
}`,
    cpp: `#include <iostream>
using namespace std;

int main() {
  cout << "Welcome to my site!" << endl;
  // Feel free to reach out!
  return 0;
}`,
    js: `function welcome() {
  console.log("Welcome to my site!");
  // Feel free to reach out!
}`,
  };

  return (
    <div className="bg-[#1E1E2E] text-white rounded-md shadow-lg border border-gray-700">
      {/* Top bar with buttons and file path */}
      <div className="bg-[#181825] px-4 py-2 flex items-center justify-between text-sm border-b border-gray-700 relative">
        <div className="flex gap-2 absolute left-3 top-1/2 -translate-y-1/2">
          <span className="w-3 h-3 rounded-full bg-gray-600 hover:bg-red-500 transition-colors"></span>
          <span className="w-3 h-3 rounded-full bg-gray-600 hover:bg-yellow-400 transition-colors"></span>
          <span className="w-3 h-3 rounded-full bg-gray-600 hover:bg-green-500 transition-colors"></span>
        </div>
        <span className="mx-auto text-gray-400">
          {language === 'java' && '..\\mai\\projects\\Welcome.java'}
          {language === 'cpp' && '..\\mai\\projects\\Welcome.cpp'}
          {language === 'js' && '..\\mai\\projects\\welcome.js'}
        </span>
        <div className="flex gap-2 absolute right-4 top-1/2 -translate-y-1/2">
          {[
  { id: 'java', label: 'Java' },
  { id: 'cpp', label: 'C++' },
  { id: 'js', label: 'JS' },
].map(({ id, label }) => (
  <button
    key={id}
    onClick={() => setLanguage(id)}
    className={`px-1 sm:px-2 py-0.5 rounded ${
      language === id
        ? 'bg-violet-700 text-white'
        : 'text-gray-400 hover:text-white'
    }`}
  >
    {label}
  </button>
))}
        </div>
      </div>

      {/* Code block */}
      <div className="p-4">
        <SyntaxHighlighter
          language={language === 'cpp' ? 'cpp' : language}
          style={dracula}
          showLineNumbers
          customStyle={{
            background: 'transparent',
            fontSize: '0.875rem',
            padding: '0',
            margin: '0',
          }}
        >
          {codeSnippets[language]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}