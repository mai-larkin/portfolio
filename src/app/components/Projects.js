"use client";
import ProjectModel from "./ProjectModel";
import { useState } from "react";

const Projects = () => {
    const project = [
        {
            id: 1,
            title: "Project 1",
            description: "blah blah blah blah blah blah",
            image: "./images/placeholder1.jpg",
            tags: ["React", "TailwindCSS", "JS"],
            gihubUrl: "#",
        },
        {
            id: 2,
            title: "Project 2",
            description: "blah blah blah blah blah blah",
            image: "./images/stardew.png",
            tags: ["React", "TailwindCSS", "JS"],
            gihubUrl: "#",
        },
        {
            id: 3,
            title: "Wordle",
            description: "blah blah blah blah blah blah",
            image: "./images/placeholder3.jpg",
            tags: ["React", "TailwindCSS", "JS"],
            gihubUrl: "#",
        },

    ]


    return (
        <section id="projects" className="relative pt-10 text-center">
            <div className="container max-w-5xl mx-auto">

                <h2 className="text-[2.5rem] font-bold mb-9">Featured <span className="text-indigo-600 brightness-160">Projects</span></h2>

                <p className="max-w-3xl mx-auto">Here are some of the recent small projects that I have been working on over the summer! Feel free to check them out</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mt-10 mb-20">
                    {project.map((project, key) => (
                        <div key={key} className="group rounded-lg p-4">
                            <div className="h-48 overflow-hidden rounded-t-md">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-108"/>
                            </div>

                            <div className="bg-[#181825] rounded-b-md pb-5">
                                <div className="flex flex-wrap rounded-full gap-2 mb-2 p-6">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index} // <-- Add this
                                            className="px-3 py-1 text-xs rounded-full border border-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold pb-4">{project.title}</h3>
                                <p className="text-sm mb-4">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects