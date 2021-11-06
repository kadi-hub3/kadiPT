import SideBar from './components/SideBar';
import InfoSection from './components/Hero'
import ProjectSection from './components/ProjectSection';
import {homeData,aboutData, contactData} from './components/Data'
import {projectsData} from './components/ProjectSection/Data'
import AboutSection from './components/About'
import ContactSection from './components/Contact'
function App() {
  return (
    <div>
      <SideBar />
      <InfoSection {...homeData}/>
      <AboutSection {...aboutData}/>
      <ProjectSection {...projectsData}/>
      <ContactSection {...contactData}/>
    </div>
  );
}

export default App;
