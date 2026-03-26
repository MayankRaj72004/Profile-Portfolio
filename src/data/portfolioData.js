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
    title: 'E-Commerce Website',
    desc: 'A fully responsive online store built with modern design principles.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Food Delivery Time Prediction',
    desc: 'A predictive analytics system to estimate food delivery times based on traffic, distance, and order conditions.',
    image: '/food_delivery.jpg',
    tags: ['Python', 'Streamlit'],
  },
  {
    title: 'Business Landing Page',
    desc: 'A sleek, single-page site for a corporate client to generate leads.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    tags: ['HTML', 'CSS', 'Flexbox'],
  },
  {
    title: 'Hospital ER Simulator',
    desc: 'A data-driven hospital ER simulator built to model patient prioritization and treatment workflows.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9sCf5hu1fovJp9gy8MX2k_TC67UVVibj2w&s',
    tags: ['HTML', 'CSS', 'JavaScript', 'Priority Queue'],
  },
]
