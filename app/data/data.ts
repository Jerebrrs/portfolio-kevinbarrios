export interface ProjectData {
  image?: string;
  category?: string;
  name?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  github?: string;
}

export const projectData: ProjectData[] = [
  {
    image: "/work/cubix.png",
    category: "Fullstack",
    name: "Cubix & Bets",
    subtitle: "Casino Cubix & Bets - Plataforma de casino con criptomonedas",
    description:
      "Plataforma de juegos de casino donde las transacciones se realizaban con criptomonedas. Mi principal rol fue en el desarrollo del Backend, donde me encargué de construir el flujo de creación de usuarios. Esto incluía la integración con la plataforma de juegos, permitiendo la creación de usuarios tanto en la plataforma externa como en nuestra base de datos local. Además, implementé medidas de seguridad en los endpoints, aplicándolas de forma global en todo el proyecto.También incorporé bibliotecas de tipado fuerte en el Backend para prevenir errores y mejorar el manejo de las respuestas, asegurando así una mayor robustez en el sistema.Adicionalmente, fui responsable de crear los tests de prueba y usabilidad, garantizando la fiabilidad y calidad de la plataforma.En el Frontend, mi contribución fue principalmente a nivel de lógica, donde desarrollé funciones que mejoraron la fluidez y usabilidad de la plataforma.",
    link: "https://casino-cubix.vercel.app/",
    github: "https://github.com/Jerebrrs/casino-cubix",
  },
  {
    image: "/work/microservices.png",
    category: "Backend",
    name: "Ecommerce Microservicios",
    subtitle: "Backend de un Ecomerce con arquitectura de Microservicios.",
    description:
      "Este ecommerce está diseñado con una arquitectura de microservicios, lo que garantiza escalabilidad y rendimiento. Utilizamos NATS Server para una comunicación eficiente entre servicios y combinamos bases de datos relacionales y no relacionales para una gestión de datos óptima. Cada microservicio se despliega en contenedores Docker y se orquesta con Kubernetes. Tiene integrado Stripe como pasarela de pagos para ofrecer transacciones seguras y rápidas. Este Backend fue realizado con NestJs.",
    link: "https://github.com/Microservice-NestJs-App",
    github: "https://github.com/Microservice-NestJs-App",
  },
  {
    image: "/work/donando.png",
    category: "Fullstack",
    name: "Donando App",
    subtitle: "Web de donaciones, para organizaciones sin fin de lucro.",
    description:
      "Crear una plataforma web para facilitar la difusión y recaudación de fondos para campañas relacionadas con catástrofes ambientales y problemáticas sociales, proporcionando una interfaz intuitiva tanto para donantes como para las entidades que solicitan donaciones, esta donación se realiza de forma transparente a través de una pasarela de pago. Mi función se enfoco en la construcción del Backend, donde logramos desarrollar una aplicación solida y segura aplicando buenas practicas. Se utilizo las siguientes tecnologías : Javascript, Node.js,Express, Sequelize, PostgresQL, Cloudinary ,Multer, Json Web token, Bcrypt, Fly.io. Métodos Scrum en el ámbito de desarrollo, con roles definidos, comunicación grupal, sprint diarios.",
    link: "https://donando.vercel.app",
    github:
      "https://github.com/Jerebrrs/back-no-country-c18-03--m-nodeObjetivo",
  },
  {
    image: "/work/foodapp.png",
    category: "Backend",
    name: "Food App",
    subtitle: "Receptor de ordenes, y merplace de Productos.",
    description:
      "Esta Food App está construida con NestJS y actúa como un receptor de pedidos, organizando los productos según su categoría. Este sistema innovador permite realizar órdenes de manera rápida sin necesidad de iniciar sesión. Además, si el usuario está registrado, sus datos se autocompletan automáticamente. También ofrece imprecion de comandas y como reportes personalizados, generados con PDFMake, para un mejor control y escalabilidad. La app está conectada a una base de datos relacional como PostgreSQL, y su versión y escalabilidad son gestionadas mediante Docker.",
    link: "https://github.com/Microservice-NestJs-App",
    github: "https://github.com/Microservice-NestJs-App",
  },
  {
    image: "/work/liga.png",
    category: "Fullstack",
    name: "Liga Paceña de Futbool",
    subtitle: "Diario deportivo de la ciudad de La Paz, Entre Rios.",
    description:
      "Proyecto Futbol La Paz, proyecto propio construido desde 0. El objetivo del proyecto es crear un diario digital que informe sobre el futbol local de la region de La Paz, Entre Rios.Esta web en principio permite leer articulos periodisticos de diferentes comunicadores de la region. Actualmente esta en construccion dandoles nuevas funcionalidades.Tecnologias:Frontend: Javascript, React/Vite, Redux, HTML. CSS, Vercel.Backend:Typescript, Node.js , Express, Sequelize, PostgreSQL, Bcrypt, jsonwebtoken,Multer,Cloudinary, Realway.",
    link: "https://lapazfutbol.vercel.app",
    github: "https://github.com/Jerebrrs/backend-Lpf",
  },
  {
    image: "/work/wearfashion.png",
    category: "Fullstack",
    name: "Wearfashion",
    subtitle: "E-commerce innovador basado en la moda urbana",
    description:
      "E-commerce innovador Wearfashion basado en la moda urbana. Donde cuenta con un Landing atractivo, un home de productos con un panel de filtros . Cada producto cuenta con un detalle donde podes elegir talle y cantidad y sumarlo al carrito. Para que una vez logeado puedas realizar tu compra.Mi función fue en la construcción del backend, donde logramos desarrollar una aplicación sólida con buenas prácticas. Utilizamos las siguientes tecnologías: JavaScript, Node.js, Express, Sequelize, PostgreSQL, Cloudinary y Multer. También llevamos a cabo el despliegue en la plataforma Realway. Metodología Scrum en el ámbito de desarrollo, roles definidos, comunicación grupal, inspección y adaptación del código.",
    link: "https://wearfashion.vercel.app",
    github: "https://github.com/DanielJulianCardenasMora/proyecto_grupal_henry",
  },
];

export interface CertificateData {
  instituto?: string;
  image?: string;
  name?: string;
  link?: string;
}

export const certificateData: CertificateData[] = [
  {
    instituto: "Soy Henry",
    name: "Full Stack Web Developer",
    link: "https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=d79cf4c5c27c7f8911526a8eb5be192ac1eb896f1c0c49f11377f0ca7aab79b9",
    image: "/certificate/sh.png",
  },
  {
    instituto: "Alura",
    name: "Full Stack Web Developer",
    link: "https://app.aluracursos.com/user/kevinjeremiasbarrios/degree-programacion-primeros-pasos-grupo7-one-15788/certificate",
    image: "/certificate/alura1.png",
  },
  {
    instituto: "Udemy",
    name: "Full Stack Web Developer",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-030fc6a1-f55b-490f-98c5-ff4bd95f1612.jpg",
    image: "/certificate/udemytype.png",
  },
  {
    instituto: "Egg",
    name: "Full Stack Web Developer",
    link: "https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/63f794d694d117fc674fd168-1705512067938.pdf",
    image: "/certificate/egg.png",
  },
  {
    instituto: "Edd Team",
    name: "Full Stack Web Developer",
    link: "https://ed.team/u/kevinjeremiasbarrios/curso/api-rest",
    image: "/certificate/eddteam.png",
  },
  {
    instituto: "Soy Henry",
    name: "Full Stack Web Developer",
    link: "https://app.aluracursos.com/user/kevinjeremiasbarrios/degree-programacion-primeros-pasos-15697/certificate",
    image: "/certificate/alura2.png",
  },
];
