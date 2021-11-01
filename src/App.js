import SideBar from './components/SideBar';
import InfoSection from './components/InfoSection'
import ProjectSection from './components/ProjectSection';
import {homeData} from './components/InfoSection/Data'
import {projectsData} from './components/ProjectSection/Data'
import Cloud3D from './components/3dCloud'
function App() {
  return (
    <div className="">
      <SideBar />
      <InfoSection {...homeData}/>
      <InfoSection {...homeData}/>
      <ProjectSection {...projectsData}/>
      <Cloud3D/>
    </div>
  );
}

export default App;
