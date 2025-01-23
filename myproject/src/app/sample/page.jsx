import React from 'react';
import Navbar from './components/ui/Navbar';
import CustomButton from './components/ui/Button';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Project</h1>
        {/* <CustomButton variant="contained">Click Me</CustomButton> */}
      </div>
    </div>
  );
};

export default HomePage;