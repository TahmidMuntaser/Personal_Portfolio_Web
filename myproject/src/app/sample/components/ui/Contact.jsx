import React from "react";  

const Contact = () => {
    return(
        <section className="bg-black min-h-screen px-5 py-16 md:px-20 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                {/* info */}
                <div className="bg-gradient-to-b from-purple-900/30 to-transparent p-10 rounded-2xl flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Let's work together!</h2>
                    <p className="text-gray-400 mb-8">I make clean and simple designs that bring your ideas to life!</p>
                    <form className="flex flex-col gap-4">
                        <div>
                            <input type="text" />
                            <input type="text" />
                        </div>

                        <div>
                            <input type="text" />
                            <input type="text" />
                        </div>

                        <textarea name="" id=""></textarea>
                        <button></button>
                    </form>
                </div>

                {/* details */}
                
            
            </div>
        </section>
    );
};

export default Contact;
