'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      imageSrc: '/cli-projects.png',
      title: 'CLI projects',
      description: ' My CLI projects are designed to be lightweight, fast, and easy to use, providing developers and power users with intuitive text-based tools to improve their daily tasks.',
      link: 'https://github.com/Sunaina-ismail/Projects'
    },

    {
      id: 2,
      imageSrc: '/resume.png',
      title: 'Resume Builder',
      description: 'Whether youre in tech, finance, or any other industry, our platform makes creating a professional resume quick and easy. Just fill in your details and youre ready to impress.',
      link: 'https://naina-shareable-resume.vercel.app/'
    },

    {
      id: 3,
      imageSrc: '/pureplates.png',
      title: 'Food Website',
      description: ' This blog celebrates the art of food, sharing in-depth articles on culinary techniques, food culture, ingredient explorations, and the latest trends in the gastronomic world.',
      link: 'https://food-website-sunaina-ismails-projects.vercel.app/'
    },
  ];

  return (
    <section className="px-10 py-5 lg:my-20 w-[95%] lg:w-[90%] mx-auto lg:mb-10">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Portfolio</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-index={index}
            className={`project flex flex-col items-center border-2 border-white p-2 rounded-lg transition-transform duration-700 ease-out bg-white
           `}
          >
            <div className="w-auto h-[200px] lg:w-[95%] overflow-hidden rounded-md">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400}
                height={200}
                className="rounded-md border-2 border-gray-400"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-sm mt-2 text-center">
              {project.description}
            </p>
            <Button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-400 via-pink-300 to-red-400 text-white rounded-lg">
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;