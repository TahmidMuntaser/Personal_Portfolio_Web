import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white rounded-full px-6 py-3 text-lg font-bold shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
    >
      {children}
    </Button>
  );
};

export default CustomButton;