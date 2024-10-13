
import Image   from "next/image";
import React from 'react'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'

  import { Button } from '@/components/ui/button'

  
import GeneratePDF from '@/components/GeneratePDF';
import CVUploader from '@/components/CVUploader';
import SaveButton from '@/components/SaveButton';

const Home = () => {
  return (<>
    <div>
      <h1 className="text-2xl font-bold mb-4">My Page</h1>
      <main className="min-h-screen bg-gray-50 p-8">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Hello, I'm Syeda Gulzar Bano</h1>
          <p className="text-gray-600">
            Full Stack Developer | JavaScript Enthusiast
          </p>
          <Button className="mt-4">View My Work</Button>
        </section>
      </main>
      <About />
      <Contact />
      <Navbar />
      <Projects />
      
     {/* Generate PDF */}
      <GeneratePDF />

      {/* CV Upload/Download */}
      <CVUploader />

      {/* Save Button */}
      <SaveButton />
    </div>
    </>
  );
};

export default Home;


 
  