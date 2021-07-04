import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Sdata from './sdata';
const App=()=> {
  return (
    <div>
      <h1  className="heading_style">List of top 5 movies in 2021</h1>
      <Card  imgsrc={Sdata[0].imgscr} title={Sdata[0].title}
      sname={Sdata[0].sname} link={Sdata[0].links}/>
      <Card  imgsrc={Sdata[1].imgscr} title={Sdata[1].title}
      sname={Sdata[1].sname} link={Sdata[1].links}/>
      <Card  imgsrc={Sdata[2].imgscr} title={Sdata[2].title}
      sname={Sdata[2].sname} link={Sdata[2].links}/>
      <Card  imgsrc={Sdata[3].imgscr} title={Sdata[3].title}
      sname={Sdata[3].sname} link={Sdata[3].links}/>
      <Card  imgsrc={Sdata[4].imgscr} title={Sdata[4].title}
      sname={Sdata[4].sname} link={Sdata[4].links}/>
       <Card  imgsrc={Sdata[5].imgscr} title={Sdata[5].title}
      sname={Sdata[5].sname} link={Sdata[5].links}/>
      
    </div>
  );
}

export default App;