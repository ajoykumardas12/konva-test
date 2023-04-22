// import { Layer, Rect, Stage } from "react-konva"

import URLImage from "./components/URLImage"

function App() {
  return (
    <>
      {/* <Stage 
        width={window.innerWidth - 50} 
        height={window.innerHeight - 50}
      >
        <Layer>
          <Rect 
            x={20}
            y={50}
            width={100}
            height={100}
            fill="#003344"
          />
        </Layer>
      </Stage> */}
      <URLImage  
        x={100}
        y={100}
        src="/canvas.png"
      />
    </>
  )
}

export default App
