import { BsGearFill,BsFillLightningFill,BsPlus  } from 'react-icons/bs';
import {IoPerson } from 'react-icons/io5';
import { animateScroll as scroll } from "react-scroll";
import {Container,IconsContainer,Logo, NavContainer,IconLink, NavLink} from './index.styles'
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import twitter from 'react-useanimations/lib/twitter'
import logo from '../../images/logo.png'

const SideBar = () => {
  const scrollHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Container>
      <Logo to="/" onClick={scrollHome}><img src={logo}/></Logo>
      <NavContainer>
        <NavLink to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                >
          <SideBarIcon icon={<BsFillLightningFill  size="22" />} text='✨ Home '/>
        </NavLink>
        <NavLink to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                >
          <SideBarIcon icon={<IoPerson size="22" />} text='👱‍♀️ A Short Intro About Me '/>
        </NavLink>
        <NavLink to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                >
         <SideBarIcon icon={<BsGearFill size="22"/>} text='📦 🚀 My Side Projects'/>
        </NavLink>
        <NavLink to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                >
          <SideBarIcon icon={<BsPlus size="22"/>}  text='Contact Me for Any Inquiries 📨'/>
        </NavLink>
        </NavContainer>
        <IconsContainer>
         <IconLink href='https://www.github.com/kadi-hub3' target='_blank'>
        <UseAnimations animation={github} size={24}  />
        </IconLink>
        <IconLink href='https://www.linkedin.com/in/kadi-moudarrif/' target='_blank'>
        <UseAnimations animation={linkedin} size={24} />
        </IconLink>
        <IconLink href='https://www.twitter.com/' target='_blank'>
        <UseAnimations animation={twitter} size={24} />
        </IconLink>
        </IconsContainer>
    </Container>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon">
    {icon}
    <span class="sidebar-tooltip">
      {text}
    </span>
  </div >
);



export default SideBar;