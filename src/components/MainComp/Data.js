import svg1 from "../../images/hero.svg";
import contactSvg from '../../images/contact.svg'
import {Link} from './MainComp.styles'
import Cloud3D from '../3dCloud'
import {Img} from './MainComp.styles'
import Form from '../Form'
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown'

const heroBtn = <>About Me <UseAnimations animation={arrowDown} size={30} className='btn-hero'/></>

const aboutParagraph = <> Proactive and easygoing self-taught developer with a problem solving mindset and a passionate eye for innovative, simplistic UI design. Curious about the full-spectrum of IT, more so the web and network development.<br/><br/>
Building and maintaining medium to large web/ mobile apps using React, Redux, Angular, JavaScript along with plugins, features, animations and coding interactive layouts.<br/><br/><br/>
I'm interested in web developement, especially front-end development opportunities and willing to learn more technologies to add to my skill set.<br/><br/>
Visit my <a href="https://www.linkedin.com/in/kadi-m/">LinkedIn </a>for more details or just <Link to='contact' smooth={true}> contact</Link> me.</>

export const homeData = {
  id: "home",
  lightBg: false,
  darkBg: false,
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

export const aboutData = {
  id: "about",
  lightBg: true,
  darkBg: true,
  lightText: true,
  headline: "About Me",
  description: aboutParagraph,
  buttonLabel: "Send Your Message",
  imgStart: false,
  img: <Cloud3D/>,
  alt: "",
  dark: true,
  primary: true,
  darkText: true,
  plus: ""
};

export const contactData = {
  id: "contact",
  lightBg: false,
  darkBg: false,
  lightText: true,
  headline: "Contact Me",
  description: (
    <div>
      If you have any requests or questions, don't hesitate to contact me using the form below or via {' '}
      <a href="https://www.linkedin.com/in/kadi-m/">LinkedIn</a>.
    </div>
  ),
  buttonLabel: "Send Your Message",
  imgStart: false,
  img: <Img src={contactSvg} alt="Contact SVG"/>,
  alt: "transactions",
  dark: true,
  primary: true,
  darkText: true,
  plus: <Form/>
};

