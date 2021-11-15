import SideBar from './components/SideBar';
import InfoSection from './components/MainComp/Hero'
import ProjectSection from './components/ProjectSection';
import {homeData,aboutData, contactData} from './components/MainComp/Data'
import {projectsData} from './components/ProjectSection/Data'
import MainComp from './components/MainComp/MainComp'
function App() {
  return (
    <>
      <SideBar />
      <InfoSection {...homeData}/>
      <MainComp {...aboutData}/>
      <ProjectSection {...projectsData}/>
      <MainComp {...contactData}/>
    </>
  );
}

export default App;
