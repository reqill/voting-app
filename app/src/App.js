import { useState, useEffect } from 'react';
import './styles/App.css';
import BeforeTime from './components/BeforeTime'
import BeforeVoting from './components/BeforeVoting'
import DuringVoting from './components/DuringVoting'
import AfterVoting from './components/AfterVoting'
import AfterTime from './components/AfterTime'
import { baseApiLink } from './commonData';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const colorScheme = {
  primary: "#e6710b",
  secondary: "",
  bgPage: "#f5a21c",
  bgCard: "#FAFAFA",
  header: "#111111",
  description: "#666666"
}

const App = () => {
  const [colors, setColors] = useState(colorScheme)
  const [currentCard, setCurrentCard] = useState("before-time")
  const [token, setToken] = useState();
  const [settings, setSettings] = useState({ startTime: { _seconds: 16325877560 }, endTime: { _seconds: 163258775600 } });
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {

    console.log("DOWNLOADING");
    fetch(baseApiLink + "/settings").then(response => response.json()).then(data => {
      if (data.startTime !== undefined && data.endTime !== undefined) {
        setSettings(data);
        setLoaded(true);
      }

    })
  }, [])
  return (
    <div style={{ backgroundColor: colors.bgPage }} className="background">
      <main style={{ backgroundColor: colors.bgCard }}>
        <div className="upper-row" style={{ backgroundColor: colors.bgPage }} />
        <div className="center" style={{ padding: "20px 20px 15px 20px", position: "relative" }}>
          <h1 style={{ color: colors.header }}>
            Głosowanie na Marszałka
          </h1>
          <h2 style={{ color: colors.description }}>
            I Liceum Ogółnokształcące w Gliwicach
          </h2>
          {
            !loaded ? <div style={{ margin: "40px" }}><Loader type="Bars" color={colors.primary} height={40} width={40} /></div> :
              currentCard === "before-time" ?
                <BeforeTime colors={colors} changeCard={setCurrentCard} endDate={settings.startTime._seconds * 1000} /> :
                currentCard === "before-voting" ?
                  <BeforeVoting colors={colors} changeCard={setCurrentCard} setToken={setToken} endDate={settings.endTime._seconds * 1000} /> :
                  currentCard === "during-voting" ?
                    <DuringVoting colors={colors} changeCard={setCurrentCard} endDate={settings.endTime._seconds * 1000} token={token} /> :
                    currentCard === "after-voting" ?
                      <AfterVoting colors={colors} changeCard={setCurrentCard} endDate={settings.endTime._seconds * 1000} /> :
                      currentCard === "after-time" ?
                        <AfterTime colors={colors} /> :
                        <p>WTF</p>
          }
          <p className="signed" style={{ color: colors.description }}>{'By: Maciuga Adam & Mrózek Mikołaj'}</p>
        </div>


      </main>
    </div>
  );
}

export default App;
