import SideBar from './components/SideBar';
import InfoSection from './components/InfoSection'
import ProjectSection from './components/ProjectSection';
import {homeData,aboutData, contactData} from './components/InfoSection/Data'
import {projectsData} from './components/ProjectSection/Data'
import Cloud3D from './components/3dCloud'
import Form from './components/Form'
import AboutSection from './components/About'
import ContactSection from './components/Contact'
function App() {
  return (
    <div className="">
      <SideBar />
      <InfoSection {...homeData}/>
      <AboutSection {...aboutData}/>
      <ProjectSection {...projectsData}/>
      <ContactSection {...contactData}/>
    </div>
  );
}

export default App;
