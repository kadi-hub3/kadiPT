import { FaEnvelope, FaShoppingBag } from 'react-icons/fa';
import { AiTwotoneHome, } from 'react-icons/ai';
import {IoPerson } from 'react-icons/io5';


const SideBar = () => {
  return (
    <div className="fixed left-0 h-screen w-16 flex items-center  flex-col
                  bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<AiTwotoneHome size="22" />} />
        <SideBarIcon icon={<IoPerson size="22" />} />
        <SideBarIcon icon={<FaShoppingBag size="22" />} />
        <SideBarIcon icon={<FaEnvelope size="22" />} />

    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);



export default SideBar;