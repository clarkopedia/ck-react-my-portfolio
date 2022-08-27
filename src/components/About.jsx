import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
           <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">
                
                About
                </p>


            </div>
            <p className="text-xl mt-20">
            A full-stack software engineer who takes pleasure in writing code not just for the user's front-end web applications or mobile applications, but also for the middle- and back-end servers, as well as connecting to and interacting with databases.
                </p>
                 <br />

                 <p className="text-xl">
                 Goal-oriented web, mobile and game developer who brings a strong dedication to teamwork and problem-solving that is focused on solutions. Create bespoke, client-centered websites and designs by utilizing several web design tools. committed to upholding the highest standards for speed, usability, and user experience. increases visibility by sharing comprehensive SEO information.
                 </p>
        </div>
    </div>
  )
}

export default About;