export interface ProjectData {
  image?: string;
  category?: string;
  name?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  github?: string;
  skills?: SkillImage[];
}

export interface SkillImage {
  image: string;
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
    skills: [
      { image: "/skills/react.png" },
      { image: "/skills/talwing.png" },
      { image: "/skills/react.png" },
      { image: "/skills/redux.png" },
      { image: "/skills/javascript.png" },
      { image: "/skills/nodejs.png" },
      { image: "/skills/postgres.png" },
    ],
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
    skills: [
      { image: "/skills/nestjs.png" },
      { image: "/skills/nats.png" },
      { image: "/skills/typescript.png" },
      { image: "/skills/postgres.png" },
      { image: "/skills/mongo.png" },
      { image: "/skills/docker.png" },
      { image: "/skills/kubernetes.png" },
      { image: "/skills/googlecloud.png" },
    ],
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
      skills: [
        { image: "/skills/react.png" },
        { image: "/skills/talwing.png" },
        { image: "/skills/redux.png" },
        { image: "/skills/javascript.png" },
        { image: "/skills/nodejs.png" },
        { image: "/skills/postgres.png" },
      ],
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
    skills: [
      { image: "/skills/nestjs.png" },
      { image: "/skills/typescript.png" },
      { image: "/skills/nodejs.png" },
      { image: "/skills/prisma.png" },
      { image: "/skills/postgres.png" },
      { image: "/skills/docker.png" },
      { image: "/skills/kubernetes.png" },
    ],
  },
  {
    image: "/work/edtools.png",
    category: "Fullstack",
    name:"Edtools",
    subtitle: "Plataforma que crea pruebas personalizadas y corrige examenes con IA.",
    description:
      "Edtools crea pruebas personalizadas que se adapten a cada necesidad: Ayudando a estudiantes con evaluaciones específicas, facilita a los docentes el diseño rápido de pruebas profesionales, y permite a las empresas medir habilidades clave con pruebas hechas a la medida y previamente usadas en el sistema educativo ",
    link: "https://edtools.com.co",
    github: "https://login.microsoftonline.com/f82a4f6b-9e6c-4be6-ac74-2814a355d50c/oauth2/authorize?client%5Fid=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&response%5Fmode=form%5Fpost&response%5Ftype=code%20id%5Ftoken&resource=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&scope=openid&nonce=7B764E5D3AB922ED1A156069C01331A2840C04DD9EFEEFE0%2D0DBDB8D3B3063368EA1C31A8D02FB22D64A0D42B65E90CFC6AFF6D76919418C7&redirect%5Furi=https%3A%2F%2Fedtool%2Dmy%2Esharepoint%2Ecom%2F%5Fforms%2Fdefault%2Easpx&state=OD0w&claims=%7B%22id%5Ftoken%22%3A%7B%22xms%5Fcc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083%2D87e0%2D41b5%2Dbb78%2D0bc43c8a8e8a&client%2Drequest%2Did=c97c7ba1%2De04a%2D7000%2Dc539%2Da6af7c50ca44",
    skills: [
      { image: "/skills/react.png" },
      { image: "/skills/redux.png" },
      { image: "/skills/javascript.png" },
      { image: "/skills/nodejs.png" },
      { image: "/skills/postgres.png" },
    ],
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
    skills: [
      { image: "/skills/react.png" },
      { image: "/skills/redux.png" },
      { image: "/skills/javascript.png" },
      { image: "/skills/nodejs.png" },
      { image: "/skills/postgres.png" },
    ],
  },
  {
    image: "/work/volt.png",
    category: "Java",
    name: "Clinica VOLT",
    subtitle: "Este proyecto consiste en un software de gestión de consultas entre pacientes y doctores, desarrollado para la clínica Volt.",
    description:
      " Su objetivo es optimizar y gestionar eficientemente el agendamiento de consultas médicas mediante funcionalidades clave como: Gestión de usuarios: Permite crear, listar, editar y eliminar pacientes y doctores, incluyendo soporte para paginación. Lógica de negocio avanzada para la gestión de consultas: Las consultas solo pueden agendarse con al menos 5 horas de anticipación. Las consultas no pueden cancelarse con menos de 40 minutos de anticipación. Si el doctor seleccionado ya tiene una consulta en la misma fecha y horario, el sistema redirige automáticamente al paciente a otro doctor de la misma especialidad disponible. El software fue desarrollado utilizando Java y Spring Boot e incluye las siguientes tecnologías y herramientas: Spring Security: Implementación de autenticación y autorización. Validaciones: Validación de datos para garantizar la integridad y consistencia de la información. JPA (Java Persistence API): Para la gestión de la base de datos PostgreSQL. Flyway: Control de versiones y migraciones de la base de datos. Hibernate: Uso eficiente de ORM. Lambdas y Streams: Para una programación más funcional y moderna en la manipulación de datos.",
    link: "https://github.com/Jerebrrs/Volt-Clinica",
    github: "https://github.com/Jerebrrs/Volt-Clinica",
    skills: [
      { image: "/skills/java.png" },
      { image: "/skills/spring.png" },
      { image: "/skills/postgres.png" },
    ],
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
    skills: [
      { image: "/skills/react.png" },
      { image: "/skills/redux.png" },
      { image: "/skills/javascript.png" },
      { image: "/skills/nodejs.png" },
      { image: "/skills/postgres.png" },
    ],
  },
  {
    image: "/work/conversor.png",
    category: "Java",
    name: "Conversor de Monedas",
    subtitle: "Conversor de Monedas en tiempo real.",
    description:
      "Proyecto backend en Java que consume una API para obtener cotizaciones de divisas en tiempo real. Permite ingresar un monto a convertir, y devuelve el valor convertido en la divisa seleccionada.",
    link: "https://github.com/Jerebrrs/Conversor-De-Monedas-Java",
    github: "https://github.com/Jerebrrs/Conversor-De-Monedas-Java",
    skills: [
      { image: "/skills/java.png" },
    
    ],
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
    name: "Java Orientada a Objetos",
    link: "https://app.aluracursos.com/user/kevinjeremiasbarrios/degree-programacion-primeros-pasos-grupo7-one-15788/certificate",
    image: "/certificate/alura3.png",
  },
  {
    instituto: "Alura",
    name: "Full Stack Web Developer",
    link: "https://app.aluracursos.com/user/kevinjeremiasbarrios/degree-java-grupo7-one-15797/certificate",
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

export interface InfoData {
  text?: string;
  icon?: React.ReactNode; // El tipo adecuado para un elemento JSX
}

// Define el tipo para los datos de educación y experiencia
export interface QualificationItem {
  academia?: string;
  company?: string;
  name?: string;
  image?: string;
  role?: string;
  years?: string;
}

export interface QualificationSection {
  title: string;
  data: QualificationItem[];
}

export const qualificationData: QualificationSection[] = [
  {
    title: "Educacion",
    data: [
      {
        academia: "Alura Latam + Oracle",
        role: "Desarrollador Backend Java + Oracle",
        years: "Jun 2024 - Actualidad.",
      },
      {
        academia: "Soy Henry",
        role: "Desarrollador Web Full Stack",
        years: "Sep 2023 - Abr 2024",
      },
      {
        academia: "Argentina Programa 4.0",
        role: "Backend Developer",
        years: "Ene 2023 - Jul 2023",
      },
    ],
  },
  {
    title: "Experiencia",
    data: [
      {
        company: "Bombieri",
        role: "Full Stack Web Developer",
        years: "Mar 2025 - Jun 2025",
      },
      {
        company: "Edtools",
        role: "Full Stack Web Developer",
        years: "Dic 2024- Feb 2025",
      },
      {
        company: "Sparrow Store",
        role: "Emprendedor",
        years: "Dic 2023 - Actualidad",
      },
      {
        company: "Selplast SA",
        role: "Administrador",
        years: "May 2018 - Oct 2023",
      },
    ],
  },
];

export const skillsData: QualificationSection[] = [
  {
    title: "Backend",
    data: [
      { name: "Nest", image: "/nestjs.png" },
      { name: "NodeJs", image: "/skills/nodejs.png" },
      { name: "Java", image: "/skills/java.png" },
      { name: "Typescript", image: "/skills/typescript.png" },
      { name: "Javascipt", image: "/skills/javascript.png" },
      { name: "Typescript", image: "/skills/Graphql.png" },
      { name: "Postgres", image: "/skills/postgres.png" },
      { name: "MongoDb", image: "/skills/mongo.png" },
      { name: "Docker", image: "/skills/docker.png" },
      { name: "Kubernetes", image: "/skills/kubernetes.png" },
      { name: "Aws", image: "/skills/aws.png" },
      { name: "Spring Boot", image: "/skills/spring.png" },
    ],
  },
  {
    title: "Frontend",
    data: [
      { name: "NextJs", image: "/skills/nextjs.png" },
      { name: "React", image: "/skills/react.png" },
      { name: "Redux", image: "/skills/redux.png" },
      { name: "Talwing", image: "/skills/talwing.png" },
      { name: "HTML", image: "/skills/html.png" },
      { name: "CSS", image: "/skills/css.png" },
    ],
  },
];
