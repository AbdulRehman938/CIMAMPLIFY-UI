import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header.jsx'
import { Briefcase, Building } from "lucide-react";

const Option = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen min-h-screen bg-surface flex flex-col overflow-x-hidden">
            <Header />

            <div className="flex-grow w-full flex items-stretch">
                {/* Left Side with Gradient Overlay */}
                <div id="left" className="w-[45%] h-screen relative">
                    <img 
                        src="src/assets/Option.png" 
                        alt="login-img" 
                        className="object-cover h-full w-full" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 via-accent/50 to-background/40 mix-blend-multiply" />
                </div>

                {/* Right Side */}
                <div id="right" className="w-[55%] flex justify-center items-center h-screen px-8 bg-background">
                    <div className="w-[100%] max-w-xl bg-surface/70 backdrop-blur-lg border border-surface shadow-xl rounded-2xl p-10 flex flex-col justify-center items-center">
                        
                        <h1 className="text-4xl md:text-5xl w-[100%] font-extrabold text-secondary text-center">
                            Connect. Advise. <span className="text-primary">Close Deals.</span>
                        </h1>
                        
                        <p className="text-lg text-accent font-medium text-center mt-6">
                            Streamline your deal flow with our platform.<br />
                            Work with qualified <span className="text-primary font-semibold">buyers</span> 
                            or trusted <span className="text-primary font-semibold">advisors</span>.
                        </p>

                        <div className="w-full mt-10 flex flex-col space-y-6">
                            {/* Advisor Login */}
                            <button
                                onClick={() => navigate('/advisor-login')}
                                className="
                                    flex items-center justify-center gap-3
                                    bg-primary text-surface px-6 py-4 
                                    font-semibold rounded-xl text-lg
                                    hover:scale-[1.03] hover:shadow-lg
                                    transition-all duration-300
                                "
                            >
                                <Briefcase size={22} />
                                Advisor Login
                            </button>

                            {/* Seller Login */}
                            <button
                                onClick={() => navigate('/seller-login')}
                                className="
                                    flex items-center justify-center gap-3
                                    border-2 border-primary text-primary 
                                    px-6 py-4 font-semibold rounded-xl text-lg
                                    hover:bg-primary hover:text-surface
                                    hover:scale-[1.03] hover:shadow-lg
                                    transition-all duration-300
                                "
                            >
                                <Building size={22} />
                                Seller Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Option
