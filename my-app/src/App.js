import logo from './logo.svg';

import styles from "./App.module.scss";
import ButtonAppBar from './header/header';
import { Card } from '@mui/material';
import ImageSlider from './imageSlider/imageSlider';
import HomeDescription from './body';
import Services from './services';
import Location  from './location';
import Footer from './footer/footer';
import ContactUs from './testimonial';

function App() {
  return (
    <div >
      <ButtonAppBar></ButtonAppBar>
      <header className="App-header"></header>
      <Card>
        <ImageSlider></ImageSlider>
      </Card>
      <HomeDescription></HomeDescription>
      {/* <Services></Services> */}
      {/* <ContactUs></ContactUs> */}
      {/* <Location></Location> */}
      {/* <Footer></Footer> */}

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
   
    </div>
  );
}
// adsfafads


export default App;
