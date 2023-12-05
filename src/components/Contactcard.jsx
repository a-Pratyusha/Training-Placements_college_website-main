// src/ContactCard.js
import { Email, Phone } from '@mui/icons-material';
import React from 'react';

const Contactcard = ({ facultyName, description, email, phoneNumber, image }) => {
    return (
        <div className="bg-white p-4 md:p-6 rounded-md shadow text-center hover:shadow-lg transition duration-300">
        <img
          src={image}
          alt={`${facultyName} image`}
          className="mx-auto mb-4 rounded-full h-20 w-20 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">{facultyName}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex items-center">
            <Email className="text-primary" />
            <span className="ml-1">{email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="text-success" />
            <span className="ml-1">{phoneNumber}</span>
          </div>
        </div>
      </div>
    );
};

export default Contactcard;
