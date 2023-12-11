
import React from 'react';
import { Star, AccessTime, Lightbulb, Group, ThumbUp, TrendingUp } from '@mui/icons-material';

const Moto= () => {
  return (
    <div className="bg-gray-100 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8">Our Mission & Motto</h2>
      <p className="text-gray-600 mb-12">
      To be one of the leading Institution for Engineering education developing proficient Engineers with global acceptance in the service of mankind.
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
    title: 'Our Moto',
    description: 'MGM’s College of Engineering aspires to produce globally proficient engineers nurturing Creativity and Innovation, Research and Entrepreneurial attitude with Human Values amongst the students. ',
    icon: <Lightbulb fontSize="large" />,
  },
  {
    title: 'Our Mission',
    description: 'To impart quality Engineering Education to the students to benefit society by creating best Professionals, Researchers and Entrepreneurs fostering a Culture of Collaboration and Excellence with Human Values on a sustainable basis.',
    icon: <Group fontSize="large" />,
  },
  {
    title: 'Our vision',
    description: 'MGM’s College of Engineering aspires to produce globally proficient engineers nurturing Creativity and Innovation, Research and Entrepreneurial attitude with Human Values amongst the students.',
    icon: <ThumbUp fontSize="large" />,
  },
  {
    title: 'Strong industry interface',
    description: 'MGMsCOE has a strong, active and growing interface with business and industry, with experts from a range of leading companies and thought leaders of IT Industry delivering regular guest lectures and serving as members of various advisory boards.',
    icon: <AccessTime fontSize="large" />,
  },
  {
    title: 'Project',
    description: 'Students are encouraged to take up projects on contemporary topics as a part of their independent study. Arrangements will be made for practical training on live projects in conjunction with leading companies in the industry.',
    icon: <Star fontSize="large" />,
  },
  {
    title: 'Acheivements',
    description: 'eeeee, Selections in SMART INDIA HACKATHON, Gvvvvvvv, Gvvvvvv,vvvvv FELLOWSHIP Selection (SPONSORED BY GITHUB).',
    icon: <TrendingUp fontSize="large" />,
  },
];

export default Moto;
