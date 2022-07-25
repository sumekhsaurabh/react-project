
import './App.css';
import './Nav.css'
import Header from './Components/Header'
import Advertisement from './Components/Advertisement';
import Manufacturing from './Components/Manufacturing';
import Card from './Components/Card'
import Editor from './Components/Editor';
import TwiterSection from './Components/TwiterSection';
import AboutCard from "./Components/AboutCard.js";
import data from './Apis/limitedPartne';
import Vccircle from './Vccircle';
import Events from './Components/Events';
import Founderdata from './Apis/founderData';
import Vcc from './Components/Vcc';
import smallcarddata from './Apis/tmtData';
import Inputbox from "./Components/Inputbox"
import Techcircledata from "./Apis/techCircle";
import mergersdata  from "./Apis/mergersData";
import financialdata from "./Apis/financilaData";
import Morestories from "./Components/Morestories"
import Footer from './Components/Footer'
import SmallAdver from './Components/SmallAdver';

function App() {

 
  return (
    <div className="App">
    <Header/>
    <Advertisement src={'./Imagesss/adver1.png'} style={{width:'80%'}}/>
    <Manufacturing/>
    <Card/>
    <Advertisement src={'./Imagesss/adver2.png'} style={{width:'60%'}}/>
    <SmallAdver/>
    <Editor  heading={ "Editor's Pick"}  title_1={"ECONOMY"} title_2={'FINANCE'} title_3={'TMT'} title_4={'CONSUMER'} img_1={'./Imagesss/editor-pic.png'} img_2={'./Imagesss/editor-2.png'} img_3={'./Imagesss/editor-1.png'} img_4={'./Imagesss/editor-3.png'} para_1={'EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall'} para_2={'RIL invests Rs 7600 crores in acquisitions to strengthen retail arm'} para_3={'Dailyhunt parent raises close to $28 mn at $3.1 bn valuation'} para_4={'Delivery race among Indian grocery startups brings road safety risks'}/>
    <TwiterSection/>
    <AboutCard data={data} boxSize={{height :'260px',width:'240px',backgroundColor: "#FAFAFA",padding :'10px', border: "1px solid #EDEDED"}} updatedate={{margin:"0px 0px 0px 9px"}} imageStyle={{margin: "5px 5px 0px 4px"}} paraStyle ={{paddingLeft:"7px"}}  updateSection={{margineTop:"10px", fontSize:'11px'}} updateSec2={{marginLeft:'4px'}} updateSec3={{marginLeft:'10px'}}  heading={'Limited Partner'} display={{display:"none"}} primStyle={{top:"110px",right:'20px'}}/>
    <Advertisement src={'./Imagesss/adver2.png'} style={{width:'60%'}}/>
    <SmallAdver/>
    <Vccircle/>
    <Events/>
    <AboutCard data={Founderdata} boxSize={{height :'260px',width:'240px',backgroundColor: "#FAFAFA",padding :'6px', border: "1px solid #EDEDED"}} imageStyle={{margin: "5px 5px 0px 4px"}} updatedate={{margin:"0px 0px 0px 9px"}} paraStyle ={{paddingLeft:"7px"}}  updateSection={{margineTop:"10px,0px 0px 9px", fontSize:'11px'}} updateSec2={{marginLeft:'4px'}} updateSec3={{marginLeft:'10px'}}  heading={'Founders'} display={{display:"none"}} primStyle={{top:"106px",right:'22px'}}/> 
    <Advertisement src={'./Imagesss/adver2.png'} style={{width:'60%'}}/>
    <SmallAdver/>
    <Editor heading={ 'Most Popular'}   title_1={"TMT"} title_2={'CONSUMER'} title_3={'ECONOMY'} title_4={'MANUFACTURE'} img_1={'./Imagesss/most-popular-1.png'} img_2={'./Imagesss/most-popular-2.png'} img_3={'./Imagesss/most-popular-3.png'} img_4={'./Imagesss/most-popular-4.png'} para_1={'Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax'} para_2={'Consumer firm Madbow bags $2 mn funding at $13 mn valuation'} para_3={'Indian shares hit three-week lows in broad-based selling'} para_4={'HDFC Capital marks initial close at $1.88 bn for its affordable housing fund 3'}/>
    <Advertisement src={'./Imagesss/adver2.png'} style={{width:'60%'}}/>
    <Vcc/>
    <AboutCard data={smallcarddata} boxSize={{height :'230px',width:'220px',backgroundColor: "#FFFFFF",padding :'5px', border: "1px solid none"}} imageStyle={{margin: "-9px 5px 0px -9px"}} paraStyle ={{paddingLeft:"0px"}}  updateSection={{margineTop:"8px,0px 0px 9px", fontSize:'11px'}} updateSec2={{marginLeft:'2px'}} updateSec3={{marginLeft:'5px'}}  heading={'TMT'} display={{display:"block"}}/>
    <Inputbox/>
    <AboutCard data={Techcircledata} boxSize={{height :'230px',width:'220px',backgroundColor: "#FFFFFF",padding :'5px', border: "1px solid none"}} imageStyle={{margin: "-9px 5px 0px -9px"}} paraStyle ={{paddingLeft:"0px"}}  updateSection={{margineTop:"8px,0px 0px 9px", fontSize:'11px'}} updateSec2={{marginLeft:'2px'}} updateSec3={{marginLeft:'5px'}}  heading={'TechCircle'} display={{display:"block"}}/>
    <SmallAdver/>
    <Advertisement src={'./Imagesss/adver2.png'} style={{width:'60%'}}/>
    <AboutCard data={mergersdata} boxSize={{height :'230px',width:'220px',backgroundColor: "#FFFFFF",padding :'5px', border: "1px solid none"}} imageStyle={{margin: "-9px 5px 0px -9px"}} paraStyle ={{paddingLeft:"0px"}}  updateSection={{margineTop:"8px,0px 0px 9px", fontSize:'11px'}} updateSec2={{marginLeft:'2px'}} updateSec3={{marginLeft:'5px'}}  heading={'Mergers & Acquisitions'} display={{display:"block"}}/> 
    <AboutCard data={financialdata} boxSize={{height :'230px',width:'220px',backgroundColor: "#FFFFFF",padding :'5px', border: "1px solid none"}} imageStyle={{margin: "-9px 5px 0px -9px"}} paraStyle ={{paddingLeft:"0px"}}  updateSection={{margineTop:"8px,0px 0px 9px", fontSize:'11px'}} updateSec2={{marginLeft:'2px'}} updateSec3={{marginLeft:'5px'}}  heading={'Financials'} display={{display:"block"}}/>
    <Morestories/>
    <Footer/>
    </div>
  );
}

export default App;
