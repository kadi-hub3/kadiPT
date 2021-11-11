import SideBar from './components/SideBar';
import InfoSection from './components/MainComp/Hero'
import ProjectSection from './components/ProjectSection';
import {homeData,aboutData, contactData} from './components/MainComp/Data'
import {projectsData} from './components/ProjectSection/Data'
import AboutSection from './components/MainComp/About'
import ContactSection from './components/MainComp/Contact'
function App() {
  return (
    <>
      <SideBar />
      <InfoSection {...homeData}/>
      <AboutSection {...aboutData}/>
      <ProjectSection {...projectsData}/>
      <ContactSection {...contactData}/>
    </>
  );
}

export default App;
