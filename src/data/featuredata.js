import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faCodeBranch, faTasks, faShareAlt } from '@fortawesome/free-solid-svg-icons'; // Importing relevant icons

export const featureList = [
    {
        title: "Intuitive interface",
        description: "Easily navigate and control settings with a user-friendly, intuitive design.",
        icon: <FontAwesomeIcon icon={faUserCog} style={{ color: "#ffffff" }} />, // User settings icon
        color: "#581b98",
        link: 'Learn More'
    },
    {
        title: "Version control",
        description: "Effortlessly track changes and manage different versions of your project.",
        icon: <FontAwesomeIcon icon={faCodeBranch} style={{ color: "#ffffff" }} />, // Code branch icon
        color: "#30e3ca",
        link: 'Learn More'
    },
    {
        title: "Assign tasks",
        description: "Delegate and manage tasks seamlessly to keep your project on track.",
        icon: <FontAwesomeIcon icon={faTasks} style={{ color: "#ffffff" }} />, // Tasks icon
        color: "#3f3b3b",
        link: 'Learn More'
    },
    {
        title: "Transfer control",
        description: "Easily transfer project control and responsibilities with secure ownership.",
        icon: <FontAwesomeIcon icon={faShareAlt} style={{ color: "#ffffff" }} />, // Share icon
        color: "#cb3b3b",
        link: 'Learn More'
    }
];

