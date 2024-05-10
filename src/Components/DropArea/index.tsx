import { useState } from "react";
import "./DropArea.css";

interface DropAreaProps {
    handleDrop: (index: number, section: string) => void;
    index: number;
    section: string;
    isFullHeight?: boolean;
  }

export default function DropArea(props:DropAreaProps) {
  const {handleDrop,index,section,isFullHeight} = props
  const [showDrag, setShowDrag] = useState<boolean>(false);
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <section
    //   style={}
      onDrop={()=>{
        console.log('dropped ')
        setShowDrag(false)
        handleDrop(index,section)
      }}
      onDragOver={handleDragOver}
      onDragEnter={() => {
        console.log("Entered");
        setShowDrag(true);
      }}
      onDragLeave={() => {
        setShowDrag(false);
      }}
      style={{ height:isFullHeight ? "80vh":"50px"}}
      className={showDrag ? "drop-area" : "hide-area"}
    >
      {showDrag ? "Drop Area" : ""}
    </section>  
  );
}
