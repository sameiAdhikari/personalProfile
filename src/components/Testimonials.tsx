import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Software Engineer at TechCorp",
      feedback:
        "I am incredibly grateful for Kristina's web development services. Their technical skills and problem-solving abilities helped us launch a robust and scalable website within the desired timeline. Their professionalism and open communication made the entire process smooth and efficient.",
      ImageUrl: "/public/men.jpg",
    },
    {
      name: "John Smith",
      role: "Product Manager at InnovateX",
      feedback:
        "An impressive showcase of skills and experience. Truly stands out from the crowd. Highly recommended!  ",
      ImageUrl: "/public/women.jpg",
    },
    {
      name: "Alice Johnson",
      role: "CTO at DevSolutions",
      feedback:
        "A well-structured and visually appealing portfolio. It effectively highlights the individual's expertise and accomplishments.",
      ImageUrl: "/public/her.jpg",
    },
  ];
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const handlePrev = () => {
    if (currentTestimonialIndex === 0) return;
    setCurrentTestimonialIndex((prevIndex) => prevIndex - 1);
  };
  const handleNext = () => {
    if (currentTestimonialIndex === testimonials.length - 1) return;
    setCurrentTestimonialIndex((prevIndex) => prevIndex + 1);
  };
  const handleClick = (index: number) => {
    if (index === currentTestimonialIndex) return;
    setCurrentTestimonialIndex(index);
  };
  return (
    <section className=" relative flex items-center justify-center max-w-screen min-h-screen px-10">
      <RiDoubleQuotesL className="absolute top-38 left-57 text-7xl z-50 text-amber-300" />
      <div className="relative min-w-[80%] min-h-[50dvh]  overflow-hidden bg-white rounded-2xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className={`absolute top-0  min-w-full min-h-full bg-white rounded-2xl py-5 px-20 flex flex-col  justify-center gap-10 transition-all duration-900 ease-in-out`}
            style={{
              left: (index - currentTestimonialIndex) * 100 + "%",
            }}
          >
            <p className="text-xl text-muted">{testimonial.feedback}</p>
            <div className="flex items-center gap-5">
              <img
                src={testimonial.ImageUrl}
                alt={testimonial.name}
                className="w-25 h-25 object-cover rounded-full"
              />
              <div>
                <h1 className="text-3xl font-semibold mb-2">
                  {testimonial.name}
                </h1>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-1/2 w-full flex items-center justify-between px-3">
          <FaChevronLeft
            className={`text-4xl px-2 py-1 bg-amber-300 rounded-2xl  ${
              currentTestimonialIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => handlePrev()}
          />

          <FaChevronRight
            className={`text-4xl px-2 py-1 bg-amber-300 rounded-2xl  ${
              currentTestimonialIndex === testimonials.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={handleNext}
          />
        </div>
        <div className="absolute bottom-5 left-1/2 flex gap-3">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`min-w-4 min-h-4 border border-primary rounded-full transition-all duration-900 ${
                index === currentTestimonialIndex
                  ? "bg-primary cursor-not-allowed "
                  : "  cursor-pointer"
              }`}
              onClick={() => handleClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
