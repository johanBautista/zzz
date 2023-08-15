import Image from 'next/image';

const AboutSection = () => {
  const techs = [
    {
      name: "Javascript",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
      name: "HTML5",
      url: "https://developer.mozilla.org/es/docs/Glossary/HTML5",
    },
    {
      name: "CSS3",
      url: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
    },
    {
      name: "React",
      url: "https://beta.es.reactjs.org/",
    },
    {
      name: "Vue",
      url: "https://vuejs.org/",
    },
    {
      name: "NodeJs",
      url: "https://nodejs.org/en/",
    },
    {
      name: "Express",
      url: "https://expressjs.com/es/",
    },
    {
      name: "NextJs",
      url: "https://nextjs.org/",
    },
    {
      name: "Figma",
      url: "https://www.figma.com/",
    },
    {
      name: "Adobe XD",
      url: "https://www.adobe.com/",
    },
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
    },
    {
      name: "Mui",
      url: "https://mui.com/",
    },
    {
      name: "Tailwind",
      url: "https://tailwindcss.com/",
    },
  ];
  return (
    <section className='md:min-h-screen'>
      <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>About me</h2>
      <p className='my-6 text-lg md:text-xl'>I&apos;m Johan, a dedicated frontend developer with a strong emphasis on exploring
        state-of-the-art technologies. My specialization lies in crafting adaptable solutions,
        designing compelling mockups, and optimizing user performance.</p>
      <p className='text-lg md:text-xl'>Furthermore, I bring
        experience in the field of audiovisual production. I am committed to continuous learning
        to strengthen my skills and offer users more efficient and appealing products.</p>
      <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mt-24'>Skills</h2>
      <ul className="stack w-8/12	my-6">
        {techs?.map((tech) => (
          <a key={tech.name} className="buttonStack" href={tech.url} target="_blank" rel="noreferrer">
            {tech.name}
          </a>
        ))}
      </ul>
    </section>
  );
};

export default AboutSection;
