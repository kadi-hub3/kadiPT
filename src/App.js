import SideBar from './components/SideBar';
import InfoSection from './components/InfoSection'
import ProjectSection from './components/ProjectSection';
import {homeData} from './components/InfoSection/Data'
import {projectsData} from './components/ProjectSection/Data'
import Cloud3D from './components/3dCloud'
import Form from './components/Form'
function App() {
  return (
    <div className="">
      <SideBar />
      <InfoSection {...homeData}/>
      <InfoSection {...homeData}/>
      <ProjectSection {...projectsData}/>
      <Cloud3D/>
      <Form />
    </div>
  );
}

export default App;
