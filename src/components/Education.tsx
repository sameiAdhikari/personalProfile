function Education() {
  return (
    <section
      id="education"
      className=" flex flex-col items-center justify-center gap-5"
    >
      <h1 className="py-10 text-2xl md:text-4xl  lg:text-5xl font-bold lg:mb-15 lg:px-20 lg:pt-10">
        Education & Expertise
      </h1>
      <div className="w-full px-4 md:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        <div className="w-full flex flex-col  gap-3  md:gap-6 items-start justify-start">
          <span className="text-2xl text-muted">2014</span>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">
              Bachelor's Degree of Development
            </h2>
            <p className="text-base text-muted">Tech University</p>
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">
              Web Design Certificate
            </h2>
            <p className="text-muted text-base ">Design Institute</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3  md:gap-6 items-start justify-start ">
          <span className="text-2xl text-muted">2023-2024</span>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">
              Developer Intership
            </h2>
            <p className="text-base text-muted">Innovative Solutions Inc.</p>
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">Graphic Design</h2>
            <p className="text-muted text-base ">Creative Agency</p>
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">Web Design</h2>
            <p className="text-muted text-base ">Freelance Projects</p>
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">App Development</h2>
            <p className="text-muted text-base ">Mobile Solutions Co</p>
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">UI/IX Design</h2>
            <p className="text-muted text-base ">User Experience Labs</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3  md:gap-6 items-start justify-start col-span-2 md:col-span-1 lg:col-span-1">
          <span className="text-2xl text-muted">2024-Present</span>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">App Developer</h2>
            <p className="text-base text-muted">
              Tech Innovators LLC as a Junior App Developer
            </p>
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">
              Product Design Management
            </h2>
            <p className="text-muted text-base ">
              Creative Agency as a Design Intern
            </p>
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">Graphic Designer</h2>
            <p className="text-muted text-base ">
              Freelance Projects for various clients
            </p>
          </div>
          <div>
            <h2 className="text-lg lg:text-2xl font-bold">UI/UX Designer</h2>
            <p className="text-muted text-base ">
              User Experience Labs as a Junior UI/UX Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
