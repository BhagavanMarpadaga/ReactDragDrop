import DropArea from "../DropArea";
import "./RenderCard.css";
interface RenderCardProps {
    name: string;
    setActiveCard: (cardId: string) => void;
    handleDrop: (index: number, section: string) => void;
    sectionName: string;
    index: number;
  }
export default function RenderCard(props: RenderCardProps) {
  const { name, setActiveCard, handleDrop, sectionName,index } = props;

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div
        className="card"
        draggable
        onDragStart={() => {
          setActiveCard(`${sectionName}-${name}`);
        }}
      >
        {name}
      </div>
      <DropArea  index={index} section={sectionName} handleDrop={handleDrop} />

    </div>
  );
}
