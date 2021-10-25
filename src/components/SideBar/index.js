import { BsGearFill,BsFillLightningFill,BsPlus  } from 'react-icons/bs';
import {IoPerson } from 'react-icons/io5';
import {Container} from './index.styles'

const SideBar = () => {
  return (
    <Container>
        <SideBarIcon icon={<BsFillLightningFill  size="22" />} text='✨ Home '/>
        <SideBarIcon icon={<IoPerson size="22" />} text='👱‍♀️ A Short Intro About Me '/>
        <SideBarIcon icon={<BsGearFill size="22"/>} text='📦 🚀 My Side Projects' />
        <SideBarIcon icon={<BsPlus size="22"/>}  text='Contact Me for Any Inquiries 📨'/>
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