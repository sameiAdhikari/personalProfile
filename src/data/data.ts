export const listOfExperience = [
  {
    id: "d5f45d4v5c45",
    category: "developer",
    title: "Personal Portfolio Website for a Frontend Developer",
    imagePath: "/public/samei.jpg",
    height: "95dvh",
    location: "Kathmandu",
    client: "Mr. Ramesh Shrestha",
  },
  {
    id: "a9c3k4d2m8q1",
    category: "developer",
    title: "Full-Stack E-Commerce Web Application with Admin Dashboard",
    imagePath: "/public/sameiSari.jpg",
    height: "90dvh",
    location: "Pokhara",
    client: "Everest Traders Pvt. Ltd.",
  },
  {
    id: "k2m9p3x8s7d4",
    category: "developer",
    title: "Secure Fintech Dashboard for Digital Payments and Analytics",
    imagePath: "/public/samei4.jpg",
    height: "100dvh",
    location: "Lalitpur",
    client: "Himalayan Finance Group",
  },
  {
    id: "q8w7e6r5t4y3",
    category: "developer",
    title: "Modern Real Estate Listing Platform with Advanced Search",
    imagePath: "/public/n1.jpg",
    height: "92dvh",
    location: "Bhaktapur",
    client: "Urban Homes Nepal",
  },
  {
    id: "z4x5c6v7b8n9",
    category: "developer",
    title: "Custom Blog and Content Management System for Tech Writers",
    imagePath: "/public/np.png",
    height: "88dvh",
    location: "Butwal",
    client: "Tech Writers Community",
  },
  {
    id: "m1n2b3v4c5x6",
    category: "developer",
    title: "High-Conversion Startup Landing Page with Performance Optimization",
    imagePath: "/public/sameiFour.jpg",
    height: "85dvh",
    location: "Biratnagar",
    client: "LaunchPad Startup",
  },
];
export const listOfBlogs = [
  {
    id: "dev-001",
    title: "How JavaScript Event Loop Really Works",
    slug: "how-javascript-event-loop-really-works",
    summary:
      "Understand the JavaScript event loop, call stack, and task queues with simple explanations and real-world examples.",
    content: `
The JavaScript event loop is a fundamental concept that allows JavaScript to perform non-blocking operations despite being single-threaded.

At its core, JavaScript executes code using a call stack. When asynchronous operations like timers, promises, or network requests are encountered, they are handled by the browser or runtime environment.

Once these operations complete, their callbacks are placed into task queues. The event loop continuously checks the call stack and moves tasks from the queue to the stack when it becomes empty.

Understanding this process helps developers write more efficient asynchronous code and avoid common pitfalls such as callback hell and unexpected execution order.
    `,
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-12",
    category: "javascript",
  },
  {
    id: "dev-002",
    title: "Designing Scalable REST APIs",
    slug: "designing-scalable-rest-apis",
    summary:
      "Learn key principles and best practices for designing scalable, secure, and maintainable RESTful APIs.",
    content: `
Designing scalable REST APIs requires careful planning of endpoints, data models, and communication patterns.

A well-designed API uses clear resource-based URLs, proper HTTP methods, and consistent status codes. Pagination, filtering, and caching play a crucial role in maintaining performance as the system grows.

Security is another critical factor. Authentication, authorization, and rate limiting should be implemented from the beginning to protect resources.

By following REST principles and focusing on scalability early, developers can build APIs that are easier to maintain and extend.
    `,
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-01-25",
    category: "backend",
  },
  {
    id: "dev-003",
    title: "React vs Vue: Choosing the Right Framework",
    slug: "react-vs-vue-choosing-the-right-framework",
    summary:
      "A practical comparison between React and Vue to help developers choose the right tool for their next project.",
    content: `
React and Vue are two of the most popular frontend frameworks, each with its own strengths.

React offers flexibility, a vast ecosystem, and strong community support. Vue, on the other hand, provides an easier learning curve and a more opinionated structure.

Choosing the right framework depends on factors such as project size, team experience, and long-term maintenance goals.

Understanding these differences enables developers to make informed decisions that align with their project requirements.
    `,
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-02-08",
    category: "frontend",
  },
  {
    id: "dev-004",
    title: "Getting Started with Docker for Developers",
    slug: "getting-started-with-docker-for-developers",
    summary:
      "A beginner-friendly guide to Docker covering containers, images, and how to use Docker in development workflows.",
    content: `
Docker simplifies application deployment by packaging software into containers.

Containers include everything an application needs to run, ensuring consistency across development and production environments.

Developers can use Docker to speed up onboarding, avoid dependency issues, and create reproducible builds.

Learning Docker is a valuable skill for modern developers, especially in DevOps and cloud-native environments.
    `,
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-02-18",
    category: "devops",
  },
  {
    id: "dev-005",
    title: "Mastering Git: Tips Every Developer Should Know",
    slug: "mastering-git-tips-every-developer-should-know",
    summary:
      "Improve your Git workflow with essential tips, tricks, and best practices used by professional developers.",
    content: `
Git is a powerful version control system that helps teams collaborate efficiently.

Understanding concepts like branching strategies, rebasing, and commit hygiene can significantly improve productivity.

By mastering Git commands and workflows, developers can reduce conflicts, recover from mistakes, and maintain a clean project history.

Strong Git skills are essential for any professional developer.
    `,
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-03-03",
    category: "tools",
  },
  {
    id: "dev-006",
    title: "Web Security Basics Every Developer Must Know",
    slug: "web-security-basics-every-developer-must-know",
    summary:
      "Explore common web security threats like XSS and CSRF and learn how to protect your applications.",
    content: `
Web security is a critical aspect of application development.

Common vulnerabilities such as cross-site scripting (XSS) and cross-site request forgery (CSRF) can compromise user data if not handled properly.

Developers should follow security best practices like input validation, proper authentication, and secure headers.

Building secure applications from the start reduces risks and protects users.
    `,
    image:
      "https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-03-28",
    category: "security",
  },
  {
    id: "dev-007",
    title: "Building Your First Mobile App with React Native",
    slug: "building-your-first-mobile-app-with-react-native",
    summary:
      "Learn how to build and deploy your first cross-platform mobile application using React Native.",
    content: `
React Native allows developers to build mobile apps using JavaScript and React.

With a single codebase, developers can target both iOS and Android platforms.

Understanding components, navigation, and native APIs is key to building successful mobile apps.

React Native is an excellent choice for teams looking to move fast without sacrificing performance.
    `,
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-03-16",
    category: "mobile",
  },
  {
    id: "dev-008",
    title: "How to Prepare for Frontend Developer Interviews",
    slug: "how-to-prepare-for-frontend-developer-interviews",
    summary:
      "A practical guide covering interview preparation strategies, common questions, and portfolio tips.",
    content: `
Preparing for frontend interviews requires a balance of technical knowledge and practical experience.

Candidates should focus on JavaScript fundamentals, frameworks like React, and problem-solving skills.

Building strong projects and practicing mock interviews can greatly improve confidence.

Consistent preparation is the key to landing a frontend developer role.
    `,
    image:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-04-10",
    category: "career",
  },
];
