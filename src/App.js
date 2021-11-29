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
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <ThemeProvider theme={theme==='light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <button onClick={themeToggler}>change the color</button>
      <SideBar />
      <InfoSection {...homeData}/>
      <MainComp {...aboutData}/>
      <ProjectSection projectsData={projectsData}/>
      <MainComp {...contactData}/>
    </ThemeProvider>
  );
}

export default App;
