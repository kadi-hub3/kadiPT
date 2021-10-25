import SideBar from './components/SideBar';
import InfoSection from './components/InfoSection'
import {homeData} from './components/InfoSection/Data'

function App() {
  return (
    <div className="">
      <SideBar />
      <InfoSection {...homeData}/>
      <InfoSection {...homeData}/>
    </div>
  );
}

export default App;
