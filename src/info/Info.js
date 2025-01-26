import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import resumePDF from "../components/Resume/myresume.pdf";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: " Muhammad Ahsan",
    lastName: "Mushtaq",
    initials: "js", 
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Pakistan'
        },
        {
            emoji: "💼",
            text: "MernStack Developer"
        },
        {
            emoji: "📧",
            text: "Ahsanmushtaq172@gmail.com"
        },
        {
            emoji: "📄",
            text: (
                <>
                Here Is My <a 
                    href={resumePDF} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary text-decoration-underline" 
                    style={{ 
                        color: "oklch(65.69% 0.196 275.75 / 1)",
                    textDecoration: "underline"
                    }} 
                >
                    Resume
                </a>
            </>
            )
        }
    ],
    socials: [
        {
            link: "https://facebook.com/ahsan.mushtaq",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/i_am_ahsanmushtaq/#",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/dedsec047",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ahsan-mushtaq-2b2341157/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Ahsan. I'm starting my career in MernStack developer (more intrested in backend then frontend). I have my bachelor's degree in ComputerScience. I am an introvert and like spending time with my laptop or gaming, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills: {
        proficientWith: ['javascript', 'react', 'MongoDB', 'Express', 'bootstrap', 'Node', 'html5', 'css3', 'AntD'],
        exposedTo: ['VScode', 'VisualStudio', 'Microsoft Office', 'Filmora']
    },
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'driving',
            emoji: '🚴'
        }
    ],
    portfolio: [
        {
            title: "Collaborative Study",
            live: "https://LearningAntd.web.app",
            source: "https://github.com/dedsec047/Collaborative-Study-Notes-App",
            image: mock1
        },
        {
            title: "Br Project",
            live: "https://bootstrap-bay-tau.vercel.app",
            source: "https://https://github.com/dedsec047/Bootstrap",
            image: mock2
        },
        {
            title: "Calculator",
            live: "https://calculator-psi-dun-46.vercel.app",
            source: "https://github.com/dedsec047/calculator",
            image: mock3
        }
    ]
}
