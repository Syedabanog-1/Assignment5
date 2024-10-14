const projects = [
    {
      title: 'Portfolio Website',
      description: 'A clean and modern portfolio built using Next.js, TailwindCSS, and TypeScript.'
    },
    // More projects here
  ];
  
  const Projects = () => {
    return (
      <section className="my-8">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  