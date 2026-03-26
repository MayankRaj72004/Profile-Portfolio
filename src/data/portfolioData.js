const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export const skills = {
  languages: [
    { name: 'C++',        icon: `${D}/cplusplus/cplusplus-original.svg` },
    { name: 'Python',     icon: `${D}/python/python-original.svg` },
    { name: 'Java',       icon: `${D}/java/java-original.svg` },
    { name: 'JavaScript', icon: `${D}/javascript/javascript-original.svg` },
    { name: 'HTML',       icon: `${D}/html5/html5-original.svg` },
    { name: 'CSS',        icon: `${D}/css3/css3-original.svg` },
  ],
  frameworks: [
    { name: 'ReactJS',      icon: `${D}/react/react-original.svg` },
    { name: 'Node.js',      icon: `${D}/nodejs/nodejs-original.svg` },
    { name: 'Express',      icon: `${D}/express/express-original.svg`,     invert: true },
    { name: 'MongoDB',      icon: `${D}/mongodb/mongodb-original.svg` },
    { name: 'NumPy',        icon: `${D}/numpy/numpy-original.svg` },
    { name: 'Pandas',       icon: `${D}/pandas/pandas-original.svg` },
    { name: 'Scikit-Learn', icon: 'https://simpleicons.org/icons/scikitlearn.svg', amber: true },
    { name: 'PyTorch',      icon: `${D}/pytorch/pytorch-original.svg` },
  ],
  tools: [
    { name: 'Git',    icon: `${D}/git/git-original.svg` },
    { name: 'GitHub', icon: `${D}/github/github-original.svg`,  invert: true },
    { name: 'Docker', icon: `${D}/docker/docker-original.svg` },
    { name: 'AWS',    icon: `${D}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
    { name: 'MySQL',  icon: `${D}/mysql/mysql-original.svg` },
  ],
}

export const certifications = [
  {
    name: 'ChatGpt-4 Prompt Engineering: ChatGpt, Generative AI & LLM',
    issuer: 'Infosys',
    date: "Sep '25",
    link: 'https://drive.google.com/file/d/1Am6J_X1wvLix5BVoNa8RdSkrRB0RrkpF/view?usp=drive_link',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  },
  {
    name: 'Complete Data Science, Machine Learning, Deep Learning, NLP',
    issuer: 'Udemy',
    date: "Sep '25",
    link: 'https://drive.google.com/file/d/1D6tlaGz9YmwDI7xyetj3SeN5MH3r__26/view?usp=drive_link',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    name: 'Computational Theory, Language Principles & Finite Automata',
    issuer: 'Infosys',
    date: "Aug '25",
    link: 'https://drive.google.com/file/d/1RXlkGdm5GHV4ZfJpCjvnf2XMeScSxog9/view?usp=drive_link',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
  },
  {
    name: 'DSA in C++',
    issuer: 'Splen Technologies',
    date: "Jul '25",
    link: 'https://drive.google.com/file/d/1rmIAkPfDYfkQz9UIYkcjdtX9EbGWuxR0/view?usp=drive_link',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80',
  },
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL',
    date: "Apr '25",
    link: 'https://drive.google.com/file/d/12El00fs9Wmr9GKqELONxfKgTopV5G_bT/view?usp=drive_link',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
]

export const projects = [
  {
    title: 'Virtual AI Assistant',
    desc: 'A web-based AI assistant powered by natural language processing, capable of answering queries, performing tasks, and maintaining conversation context.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    tags: ['Python', 'NLP', 'Flask', 'AI'],
    github: 'https://github.com/MayankRaj72004/Virtual-AI-Assistant',
    live: 'https://virtualassistant-9eui.onrender.com',
  },
  {
    title: 'Food Delivery Time Prediction',
    desc: 'A predictive analytics system to estimate food delivery times based on traffic, distance, and order conditions using ML regression models.',
    image: '/food_delivery.jpg',
    tags: ['Python', 'Machine Learning', 'Streamlit'],
    github: 'https://github.com/MayankRaj72004/Food-Delivery-Time-Prediction',
    live: null,
  },
  {
    title: 'YouTube Clone',
    desc: 'A fully functional YouTube clone with video browsing, search, and channel pages — built with React and the YouTube Data API.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80',
    tags: ['React', 'YouTube API', 'CSS'],
    github: 'https://github.com/MayankRaj72004/YouTube-Clone',
    live: 'https://you-tube-clone-omega-drab.vercel.app',
  },
  {
    title: 'E-Commerce Website',
    desc: 'A fully responsive online store with product browsing, cart management, and seamless modern design principles.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    github: 'https://github.com/MayankRaj72004/Ecommerce-Website',
    live: 'https://ecommerce-website-one-ebon.vercel.app',
  },
]
