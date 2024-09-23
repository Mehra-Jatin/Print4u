import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          2024 Print4u. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

