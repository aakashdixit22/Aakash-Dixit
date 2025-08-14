import one from '../assets/svg/projects/talx.png';
import two from '../assets/svg/projects/scribe.png';
import three from '../assets/svg/projects/image.png';
import four from '../assets/svg/projects/connzen.png';

export const projectsData = [
    {
        id: 1,
        projectName: 'TALX-AI POWERED JOB PORTAL',
        projectDesc: 'Talx is a comprehensive job portal featuring job posting and management, resume submissions, applicant tracking, AI-driven resume analysis, and a dynamic news feed delivering real-time updates across technology, business, and other domains. Includes an AI-powered Chat Assistant for platform guidance and career support.',
        tags: ['Reactjs', 'TailwindCSS', 'Nodejs', 'Expressjs', 'MongoDB', 'llama', 'Gemini'],
        code: 'https://github.com/aakashdixit22/talx-frontend',
        demo: 'https://talx.vercel.app/',
        image: one
    },
    {
        id: 2,
        projectName: 'SCRIBEAI',
        projectDesc: 'ScribeAI is an AI-powered web app built with Next.js that simplifies note-taking from PDFs. Users can upload PDFs, ask questions about the content, and let the AI generate accurate notes with a rich text editor. Features contextual search powered by Google’s Text Embedding 004 and Gemini Flash.',
        tags: ['Nextjs', 'TailwindCSS', 'AcertinityUI', 'ConvexDB', 'Gemini', 'LangChain'],
        code: 'https://github.com/aakashdixit22/scribeai',
        demo: 'https://scribeai-lake.vercel.app/',
        image: two
    },
    {
        id: 3,
        projectName: 'FINANSMART',
        projectDesc: 'FinanSmart is an AI-powered full-stack web application enabling users to efficiently track expenses, manage incomes, and set customizable budgets with real-time updates and an intuitive, responsive user interface. Integrates Google Generative AI and Gemini API for personalized financial advice.',
        tags: ['Nextjs', 'PostgreSQL', 'ShadcnUI', 'Gemini', 'NeonDB'],
        code: 'https://github.com/aakashdixit22/finansmart',
        demo: 'https://finansmart-ai.vercel.app/',
        image: three
    },
    {
        id: 4,
        projectName: 'CONNZEN-CHAT APP',
        projectDesc: 'ConnZen is a real-time chat application with instant messaging, file sharing, emoji reactions, and offline SMS notifications using React.js, Node.js, Socket.IO, and Twilio API. Features message editing, deletion, and live updates across all devices.',
        tags: ['Reactjs', 'Javascript', 'Nodejs', 'Expressjs', 'Socket.io'],
        code: 'https://github.com/aakashdixit22/chat-frontend',
        demo: 'https://chat-frontend-mu-flax.vercel.app/',
        image: four
    }
];