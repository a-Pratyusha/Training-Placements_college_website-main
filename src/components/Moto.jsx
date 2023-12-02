
import React from 'react';
import { Star, AccessTime, Lightbulb, Group, ThumbUp, TrendingUp } from '@mui/icons-material';

const Moto= () => {
  return (
    <div className="bg-gray-100 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8">Our Mission & Motto</h2>
      <p className="text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mottoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4  bg-white rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4 text-blue-500">
              {item.icon}
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

const mottoItems = [
  {
    title: 'Innovation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    icon: <Lightbulb fontSize="large" />,
  },
  {
    title: 'Teamwork',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Group fontSize="large" />,
  },
  {
    title: 'Quality',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <ThumbUp fontSize="large" />,
  },
  {
    title: 'Efficiency',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <AccessTime fontSize="large" />,
  },
  {
    title: 'Customer Satisfaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Star fontSize="large" />,
  },
  {
    title: 'Growth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <TrendingUp fontSize="large" />,
  },
];

export default Moto;
