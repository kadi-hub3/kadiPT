import svg1 from "../../images/svg1.svg";
import contactSvg from '../../images/contact.svg'
import {Link} from './MainComp.styles'
import Cloud3D from '../3dCloud'
import {Img} from './MainComp.styles'
import Form from '../Form'
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown'

const heroBtn = <>About Me <UseAnimations animation={arrowDown} size={30} className='btn-hero'/></>

export const homeData = {
  id: "home",
  lightBg: false,
  lightText: true,
  topLine: "Front-end Engineer | Web Development",
  headline: "Hi,\nI'm Kadi,\na web developer.",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: heroBtn,
  imgStart: false,
  img: svg1,
  alt: "transactions",
  dark: true,
  primary: true,
  darkText: false,
};

const aboutParagraph = <> Self-taught front-end developer, fascinated by IT and curious about the full-spectrum of cybersecurity.<br/><br/>
HTML, CSS, Sass, JS, building small and medium web apps with React, plugins, features, animations and coding interactive layouts.<br/><br/>
Passionate eye for innovative, simplistic UI design and interested in the entire front-end spectrum.<br/><br/>
Visit my <a href="https://www.linkedin.com/in/kadi-moudarrif/">LinkedIn </a>for more details or just <Link to='contact' smooth={true}> contact</Link> me.</>

export const aboutData = {
  id: "about",
  lightBg: true,
  lightText: true,
  headline: "About Me",
  description: aboutParagraph,
  buttonLabel: "Send Your Message",
  imgStart: false,
  img: <Cloud3D/>,
  alt: "",
  dark: true,
  primary: true,
  darkText: false,
  plus: ""
};

export const contactData = {
  id: "contact",
  lightBg: false,
  lightText: true,
  headline: "Contact Me",
  description:
    "I'm interested in web developement, especially front-end development. If you have any request or question, dont't hesitate to contact me using form below.",
  buttonLabel: "Send Your Message",
  imgStart: false,
  img: <Img src={contactSvg} alt="Contact SVG"/>,
  alt: "transactions",
  dark: true,
  primary: true,
  darkText: false,
  plus: <Form/>
};

