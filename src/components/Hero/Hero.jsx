import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const[mousePosition,setMousePosition] = useState({x: 0,y: 0});

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({x: e.clientX, y: e.clientY});
        }
        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove",handleMouseMove);
    

    },[]);
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(245,158,11,0.15), transparent 40%)`,
            }}
            />

            <div className="max-w-7xl mx-auto w-full">
            <div className="text-center">
                <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm text-blue-300">Introducing Prompt Cloud</span>
                </div>

                <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Pull a Prompt</span>
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">Start a Story</span>
                    <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">With PromptCloud</span>
                </h1>
                <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 animate-in sline-in-from-bottom duration-700 delay-200 leading-relaxed">
                    PromptCloud is a simple space built to help your ideas take shape. It collects clear, ready-to-use prompts and arranges them like easy paths through the sky. Whether you’re working on content, code, or creative projects, PromptCloud gives you a smooth starting point so you can focus on creating, not searching.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 animate-in slide-in-from-bottom duration-700 delay-300">
                    <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center space-x-2">
                        <span>Start Creating Prompt Free</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
            </div>
            
        </section>
    );
}