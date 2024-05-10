import { useState } from "react";
import "./App.css";
import RenderCard from "./Components/RenderCard";
import DropArea from "./Components/DropArea";
interface ListType  {
  [key: string]: string[];
};

function App() {
  
  const [list, setList] = useState<ListType>({
    section1: ["Next.js", "Nest.js", "Kubernetes","Docker"],
    section2: ["Java Script", "React.js", "Node.js"],
    section3: ["Express", "JQuery"],
  });

  const [activeCard, setActiveCard] = useState<string>();
  const handleDrop = (index: number, section: string) => {
    if (!activeCard) {
      return;
    }
    
    console.log('card dropping at ',index,section)
    const updatedList ={...list}
    const cardTakenFromSection = activeCard.split("-")[0];
    const cardTaken = activeCard.split("-")[1];
    const cardTakenIndex = list[cardTakenFromSection].indexOf(cardTaken);
    console.log('cardTakenFromSection ',cardTakenFromSection)
    console.log('cardTaken index is ',cardTakenIndex)
    updatedList[cardTakenFromSection].splice(cardTakenIndex,1)

    const cardDroppingAtSection = section
    const cardDroppingIndex = index
    updatedList[cardDroppingAtSection].splice(cardDroppingIndex,0,cardTaken)
    console.log('updated lis t',updatedList)
    
    setList(updatedList)
    
  };

  return (
    <>
     <p style={{textAlign:"center", fontWeight:"bold",color:"red"}}>Arrange the technolgies in right section</p>
      <div
        className="app"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div className="section section1">
          <h3 style={{textAlign:'center'}}>Frontend</h3>
        <DropArea index ={0} section={"section1"} handleDrop={handleDrop} isFullHeight={list.section1.length==0?true:false}/>
          {list &&
            list.section1.map((card:any,index:number) => {
              return (
                <RenderCard
                  name={`${card}`}
                  index={index}
                  setActiveCard={setActiveCard}
                  handleDrop={handleDrop}
                  sectionName="section1"
                />
              );
            })}
        </div>
        <div className="section section2">
        <h3 style={{textAlign:'center'}}>Backend</h3>
        <DropArea index ={0} section={"section2"} handleDrop={handleDrop} isFullHeight={list.section2.length==0?true:false}/>
          {list &&
            list.section2.map((card:any,index:number) => {
              return (
                <RenderCard
                  name={`${card}`}
                  index={index}
                  setActiveCard={setActiveCard}
                  handleDrop={handleDrop}
                  sectionName="section2"
                />
              );
            })}
        </div>
        <div className="section section3">
        <h3 style={{textAlign:'center'}}>Cloud</h3>
        <DropArea index ={0} section={"section3"} handleDrop={handleDrop} isFullHeight={list.section3.length==0?true:false}/>
          {list &&
            list.section3.map((card:any,index:number) => {
              return (
                <RenderCard
                  name={`${card}`}
                  index={index}
                  setActiveCard={setActiveCard}
                  handleDrop={handleDrop}
                  sectionName="section3"
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
