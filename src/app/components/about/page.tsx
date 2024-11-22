'use client'
import Image from 'next/image'

const About = () => {


  return (
    <main className='mt-16 md:mt-20 lg:my-28'>
      <div id="about-section" className={`flex flex-col md:flex-row w-[95%] lg:w-[90%] justify-between items-center text-white mx-auto`}>
        <h3 className='md:hidden text-2xl items-center mb-10  border-b-2 border-b-blue-400 font-bold text-white'>
          ABOUT
        </h3>
        <div className='w-[250px] sm:w-[300px] md:w-[400px]'>
          <Image src={"/hero-image.png"} alt='about-image' width={500} height={400}/>
        </div>
        <div className='w-[95%] md:w-[60%] lg:w-[50%] mx-auto'>
          <h3 className='hidden text-2xl md:inline-block items-center mb-4  border-b-2 border-b-blue-400 font-bold text-white'>
            ABOUT
          </h3>
          <h2 className='font-bold text-2xl lg:text-4xl mt-10 mb-6 md:mt-1 md:mb-4 font-serif text-lavender '>Curious About me? Here you have it:</h2>
          <p className='md:text-xl'>I&apos;m Sunaina, a passionate web developer and designer. I specialize in building beautiful, responsive, and user-friendly websites using modern technologies like React, TypeScript, and Next.js. With a strong focus on clean code and seamless user experiences, I strive to create digital solutions that not only look great but also perform flawlessly. Explore my work and let&apos;s collaborate to bring your ideas to life!</p>
          <br />
          <p className='md:text-xl'
          >My journey in web development is driven by a love for learning and the constant pursuit of improvement. Beyond coding, I&apos;m always exploring new design trends and techniques to keep my work both innovative and impactful.</p>
        </div>
      </div>
    </main>
  );
}

export default About;