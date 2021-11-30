import {useState} from 'react';
import SideBar from './components/SideBar';
import InfoSection from './components/MainComp/Hero'
import ProjectSection from './components/ProjectSection';
import {homeData,aboutData, contactData} from './components/MainComp/Data'
import projectsData from './components/ProjectSection/Data'
import MainComp from './components/MainComp/MainComp'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles} from './themes'

function App() {

  return (
    <>
      <SideBar />
      <InfoSection {...homeData}/>
      <MainComp {...aboutData}/>
      <ProjectSection projectsData={projectsData}/>
      <MainComp {...contactData}/>
    </>
  );
}

export default App;
