import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Monark University – Backend & Deployment System',
        description: "Contributed to the backend development and deployment of Monark University's official website by building a secure and scalable Node.js + Express.js infrastructure. Key responsibilities included implementing role-based access control (RBAC) for admin, faculty, and students, integrating Cloudinary for media storage, and developing a robust file upload system using Multer with validation. Also set up logging and monitoring using Morgan and custom utilities, and supported VPS deployment with PM2 and Nginx for efficient server management. This work enhanced system security, scalability, and deployment efficiency.",
        tools: ['Express', 'MongoDB', 'Node js ','JWT', 'Hostinger Vps', 'NodeMailer', 'Joi','PM2', 'Nginx'],
        role: 'Backend Developer',
        code: '',
        demo: 'https://monarkuni.ac.in/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Khushi Namkeen – E-commerce Platform',
        description: '𝗞𝗵𝘂𝘀𝗵𝗶 𝗡𝗮𝗺𝗸𝗲𝗲𝗻 is a modern e-commerce platform built for a traditional snacks business, developed using React.js and Tailwind CSS for a responsive, mobile-first experience. The backend supports complete eCommerce functionality including product listings, filters, cart management, and order processing. Key features include dynamic product browsing, cart updates, and a secure checkout flow. Post-deployment, the platform boosted user engagement and improved order management, resulting in a 35% increase in direct online sales within weeks.',
        tools: ['Tailwind CSS', "TypeScript", "MongoDB", "React.js", "Node.js","Express.js",'JWT',"OAuth"],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://khushinamkeen.com/',
        image: travel,
    },
    {
        id: 3,
        name: 'Lalat Jyotisham',
        description: '𝗟𝗮𝗹𝗮𝘁 𝗝𝘆𝗼𝘁𝗶𝘀𝗵𝗮𝗺 is an astrology-based web platform offering personalized horoscopes and consultations. I developed both the public site and admin panel using HTML, CSS, JavaScript, React.js, and TypeScript. The backend, built with Node.js, Express.js, and MongoDB, includes secure authentication, API integration, and cron jobs for automated updates. The project streamlined astrology content management and boosted user engagement with a responsive UI and scalable backend.',
        tools: ['React', 'Express', 'TypeScript', 'MongoDB', 'Cronjob','Node.js','Tailwind CSS','Material UI','Third-party API' ],
        code: '',
        role: 'Full Stack Developer',
        demo: 'https://lalatjyotisham.com/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Neminath Travels',
        description: "Neminath Travels is a custom-built travel booking platform developed using React.js and Tailwind CSS for a fast, mobile-responsive frontend. The backend, built without third-party APIs, features tailored booking and query management systems to handle route-based travel logic. This focused, full-stack solution improved user experience and led to a 40% increase in booking conversions post-launch.",
        tools: ['MongoDB', 'Material UI', 'Redux', 'Node.js', 'React.js'],
        code: '',
        demo: 'https://neminathtravels.com/',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },