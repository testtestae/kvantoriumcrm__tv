import './App.sass';
import './grid.css'

import Timetable from "./components/timetable/Timetable";
import PhotoGallery from "./components/photogallery/PhotoGallery";
import BulletinBoard from "./components/bulletinboard/BulletinBoard";
import Watch from "./components/watch/Watch";
import OrgLogo from "./components/orglogo/OrgLogo";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

        <PhotoGallery />
        <BulletinBoard/>
        <OrgLogo />
        <Watch />
        <Timetable />

    </div>
  );
}

export default App;
