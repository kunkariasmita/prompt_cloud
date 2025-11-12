import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const[mobileMenuIsOpen, setMobileMenuIsOpen]= useState(false);
    return(
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between item-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        {/* <div>
                            <img 
                            src="/logo.png"
                            alt="GeneratePrompt" 
                            className="w-6 h-6 sm:w-8 sm:h-8"/>
                        </div>*/}
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-blue-600">Prompt</span>
                            <span className="text-white">Cloud</span>
                        </span>
                    </div>
                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#allPrompts" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            All Propmts
                        </a>
                        <a href="#favorites" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            Favorites
                        </a>
                        <a href="#share" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            Share
                        </a>
                        {/*<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm lg:text-base font-medium transition-colors">
                            New Prompt
                        </button> */}
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm lg:text-base font-medium transition-colors">
                            Generate Prompt
                        </button>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <button className='text-gray-300 hover:text-white text-sm lg:text-base font-medium transition-colors'>
                            Sign In
                        </button>
                        <button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm lg:text-base font-medium transition-colors'>
                            Sign Up
                        </button>
                    </div>
                    

                    <button 
                    className="md:hidden p-2 text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                    
                    {mobileMenuIsOpen ? (
                        <X className='w-5 h-5 sm:w-6 sm:h-6'/>
                    ) : (
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
                    )}
                    </button>
                

                </div>

                {/* Mobile Menu */}
                {mobileMenuIsOpen && (
                    <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 animate-in slide-infrom-top duration-300">
                        <div className="px-4 py-4 space-y-3">
                            <a 
                                href="#allPrompts"
                                onClick={() => setMobileMenuIsOpen(false)}
                                className="block text-gray-300 hover:text-white py-2">
                                All Prompts
                            </a>
                            <a 
                                href="#favorites" 
                                onClick={() => setMobileMenuIsOpen(false)}
                                className="block text-gray-300 hover:text-white py-2">
                                Favorites
                            </a>
                            <a 
                                href="#share" 
                                onClick={() => setMobileMenuIsOpen(false)}
                                className="block text-gray-300 hover:text-white py-2">
                                Share
                            </a>
                            {/*<button 
                                onClick={() => setMobileMenuIsOpen(false)}
                                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                New Prompt
                            </button> */}
                            <button 
                                onClick={() => setMobileMenuIsOpen(false)}
                                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                Generate Prompt
                            </button>
                            <div className="pt-3 border-t border-slate-800 space-y-3">
                                <button 
                                    onClick={() => setMobileMenuIsOpen(false)}
                                    className="w-full px-4 py-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-medium transition-colors">
                                    Sign In
                                </button>
                                <button 
                                    onClick={() => setMobileMenuIsOpen(false)}
                                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}