import SideBar from './components/SideBar';
import InfoSection from './components/InfoSection'
import ProjectSection from './components/ProjectSection';
import {homeData,aboutData} from './components/InfoSection/Data'
import {projectsData} from './components/ProjectSection/Data'
import Cloud3D from './components/3dCloud'
import Form from './components/Form'
import AboutSection from './components/About'
function App() {
  return (
    <div className="">
      <SideBar />
      <InfoSection {...homeData}/>
      <AboutSection {...aboutData}/>
      <ProjectSection {...projectsData}/>
      <Form />
    </div>
  );
}

export default App;
