import logo from './logo.svg';

import styles from "./App.module.scss";
import ButtonAppBar from './header/header';
import { Card } from '@mui/material';
import ImageSlider from './imageSlider/imageSlider';
import HomeDescription from './body';
import Services from './services';
import Location  from './location';

function App() {
  return (
    <div className={styles.App}>
      <ButtonAppBar></ButtonAppBar>
      <header className="App-header">
        <Card>
          <ImageSlider></ImageSlider>
        </Card>
        <HomeDescription></HomeDescription>
        <Services></Services>
        <Location></Location>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// adsfafads


export default App;
