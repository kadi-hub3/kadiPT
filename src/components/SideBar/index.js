import { BsGearFill,BsFillLightningFill,BsPlus  } from 'react-icons/bs';
import {IoPerson } from 'react-icons/io5';
import {Container,IconsContainer,Logo, NavContainer} from './index.styles'
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import twitter from 'react-useanimations/lib/twitter'
import logo from '../../images/logo.png'

const SideBar = () => {
  return (
    <Container>
      <Logo src={logo} alt='logo'/>
      <NavContainer>
        <SideBarIcon icon={<BsFillLightningFill  size="22" />} text='✨ Home '/>
        <SideBarIcon icon={<IoPerson size="22" />} text='👱‍♀️ A Short Intro About Me '/>
        <SideBarIcon icon={<BsGearFill size="22"/>} text='📦 🚀 My Side Projects' />
        <SideBarIcon icon={<BsPlus size="22"/>}  text='Contact Me for Any Inquiries 📨'/>
        </NavContainer>
        <IconsContainer>
        <UseAnimations animation={github} size={30} wrapperStyle={{ stroke: '#fff' }} />
        <UseAnimations animation={linkedin} size={30} wrapperStyle={{ color: 'white' }} />
        <UseAnimations animation={twitter} size={30} wrapperStyle={{ color: 'white' }} />
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