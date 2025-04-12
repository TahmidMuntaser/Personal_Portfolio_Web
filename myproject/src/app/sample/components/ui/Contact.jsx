import React from "react";  

const Contact = () => {
    return(
        <section className="bg-black min-h-screen px-5 py-16 md:px-20 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                {/* info */}
                <div className="bg-gradient-to-b from-purple-900/45 to-purple-900/20 p-10 rounded-2xl flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">Let's work together!</h2>
                    <p className="text-gray-400 mb-8">I make clean and simple designs that bring your ideas to life!</p>
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" placeholder="First Name" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none" />
                            <input type="text" placeholder="Last Name" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none" />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="email" placeholder="Email" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none" />
                            <input type="text" placeholder="Phone Number" className="bg-gray-950 p-3 rounded-lg w-full focus:outline-none" />
                        </div>

                        <textarea  placeholder="Message" className="bg-gray-950 p-3 rounded-lg h-32 resize-none focus:outline-none"></textarea>
                        <button type="submit" className="bg-gradient-to-r from-purple-950 to-purple-800 hover:from-purple-900 hover:to-purple-700 p-3 rounded-lg font-semibold">Send Message</button>
                    </form>
                </div>

                {/* details */}
                
            
            </div>
        </section>
    );
};

export default Contact;
