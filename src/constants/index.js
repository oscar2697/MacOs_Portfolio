const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
]

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
]

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", 
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", 
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", 
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", 
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", 
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", 
        icon: "trash.png",
        canOpen: true,
    },
]

const blogPosts = [
    {
        id: 1,
        date: "Sep 25, 2025",
        title:
            "AI Genomics: How Artificial Intelligence is Revolutionizing Genetic Research",
        image: "/images/blog1.png",
        link: "https://www.linkedin.com/posts/oscar-lindo-13071319b_ai-genomics-machinelearning-activity-7364843530361397248-JtvS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7p6fQBqCJL139QsZPVWpCJud-OQQenpL0",
    },
    {
        id: 2,
        date: "Sep 9, 2025",
        title: "Deep Learning for Audio: How AI is Revolutionizing Sound Analysis",
        image: "/images/blog2.png",
        link: "https://www.linkedin.com/posts/oscar-lindo-13071319b_deeplearning-audioai-cnn-activity-7362411475367256065-LZBR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7p6fQBqCJL139QsZPVWpCJud-OQQenpL0",
    },
]

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Bootstrap", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "RestAPIs", "Python"],
    },
    {
        category: "Database",
        items: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
        category: "Dev Tools / Cloud",
        items: ["Git", "GitHub", "Docker", "Vercel"],
    },
]

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/oscar2697",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/oscar-lindo-13071319b/",
    },
]

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
]

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
]

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
}

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        {
            id: 5,
            name: "Variant Analysis Evo2 - Genomic AI Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-5",
            children: [
                {
                    id: 1,
                    name: "Variant Analysis Evo2 - Genomic AI Platform.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A powerful genomic analysis platform that leverages AI to interpret genetic variants. The application provides researchers with an intuitive interface for variant analysis, combining clinical data with AI-powered predictions to facilitate advanced genomic research and personalized medicine.",
                        "Implemented real-time variant analysis with 95% accuracy",
                        "Reduced analysis time from hours to seconds using optimized AI models",
                        "Integrated with major genomic databases (ClinVar, UCSC)",
                        "Built responsive visualization tools for complex genomic data",
                        "This project demonstrates expertise in deep learning, full-stack development, and interactive AI-powered web applications.",
                    ],
                },
                {
                    id: 2,
                    name: "Variant Analysis Evo2 - Genomic AI Platform",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://variant-analysis-evo2-livid.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "evo2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "code.git",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/oscar2697/variant_analysis_evo2",
                    position: "top-60 right-20",
                },
            ],
        },
        {
            id: 6,
            name: "Audio CNN - Sound Classification System",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Audio CNN - Sound Classification System Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Audio CNN is a deep learning project for environmental sound classification using a ResNet-based Convolutional Neural Network on the ESC-50 dataset",
                        "Real-time audio classification via a modern React frontend",
                        "Mel-spectrogram processing with data augmenta",
                        "Visualizations of CNN feature maps and predictions",
                        "Serverless deployment for scalable training and inference",
                        "This project demonstrates expertise in deep learning, full-stack development, and interactive AI-powered web applications."
                    ],
                },
                {
                    id: 2,
                    name: "Audio CNN - Sound Classification System",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://cnn-neuralnetwork.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "ai-resume-analyzer.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "code.git",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/oscar2697/cnn_neuralnetwork",
                    position: "top-60 left-5",
                },
            ],
        },
        {
            id: 7,
            name: "BankApp",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "BankApp Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "BankApp is a modern and secure banking application with 200 users, built with the MERN stack (MongoDB, Express.js, React.js, Node.js)",
                        "Role-based authentication and secure JWT-based login.",
                        "Atomic fund transfers with comprehensive validation.",
                        "Real-time notifications and transaction history.",
                        "Elegant React frontend with Tailwind CSS and robust Node.js backend.",
                    ],
                },
                {
                    id: 4,
                    name: "bankapp.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "code.git",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/oscar2697/BankApp",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
}

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/oscar.png",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/oscar-2.png",
        },
        {
            id: 3,
            name: "graduation-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/oscar-3.png",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/oscar.png",
            description: [
                "Hey! I’m Oscar 👋, a Software Engineer dedicated to crafting frontend experiences that are as functional as they are visually clean.",
                "I specialize in the JavaScript ecosystem, particularly React and Next.js, building scalable applications that prioritize performance and user experience.",
                "I’m a firm believer in clean code and Agile methodologies; I love the challenge of bridging the gap between complex backend logic and intuitive UI.",
                "When I’m not debugging or fine-tuning TypeScript components, you’ll likely find me experimenting with cloud deployments on Vercel.",
            ],
        },
    ],
}

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
        },
    ],
}

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
}

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
}

const INITIAL_Z_INDEX = 1000

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }
}

export { INITIAL_Z_INDEX, WINDOW_CONFIG }