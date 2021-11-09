import svg1 from "../images/svg1.svg";
import contactSvg from '../images/contact.svg'
export const homeData = {
  id: "home",
  lightBg: false,
  lightText: true,
  topLine: "Software Engineer | Front-end Development",
  headline: "Hi,\nI'm Kadi,\na web developer.",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Contact Me!",
  imgStart: false,
  img: svg1,
  alt: "transactions",
  dark: true,
  primary: true,
  darkText: false,
};


export const aboutData = {
  id: "about",
  lightBg: false,
  lightText: true,
  headline: "About Me",
  description:
    `Self-taught front-end developer, fascinated by IT and curious about the full-spectrum of cybersecurity.<br/><br/>
    HTML, CSS, Sass, JS, building small and medium web apps with React, plugins, features, animations and coding interactive layouts.<br/><br/>
    Passionate eye for innovative, simplistic UI design and interested in the entire front-end spectrum.<br/><br/>
    Visit my <span>LinkedIn </span>for more details or just contact me.`,
  imgStart: true,
  img: svg1,
  dark: true,
  primary: true,
  darkText: false,
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
  img: contactSvg,
  alt: "transactions",
  dark: true,
  primary: true,
  darkText: false,
};