/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {useState, useEffect} from "react";
import { Image, Layer, Stage, Transformer } from "react-konva";

export default function URLImage(props) {
    const [imagePosition, setImagePosition] = useState({
        isDragging: false,
        x: props.x,
        y: props.y
    })

    const [image, setImage] = useState(null);
        useEffect(() => {
        loadImage();
    }, [props.src]);
        
    function loadImage() {
        const image = new window.Image();
        image.src = props.src;
        image.onload = () => {
        setImage(image);
        };
    }

    return (
        <Stage width={window.innerWidth - 50} height={window.innerHeight - 50}>
            <Layer>
                <Image 
                    image={image} 
                    x={props.x} 
                    y={props.y}
                    scale={{x:0.9, y:0.9}}
                    shadowColor="black"
                    shadowBlur={imagePosition.isDragging ? 10 : 0}
                    shadowOpacity={0.6}
                    shadowOffsetX={imagePosition.isDragging ? 5 : 0}
                    shadowOffsetY={imagePosition.isDragging ? 5 : 0}
                    draggable
                    onDragStart={() => {
                        setImagePosition((prevPosition) => {
                            return {
                                ...prevPosition,
                                isDragging: true
                            }
                        })
                    }}
                    onDragEnd={(e) => {
                        setImagePosition((prevPosition) => {
                            return {
                                isDragging: false,
                                x: e.target.x(),
                                y: e.target.y()
                            }
                        })
                    }}
                >
                </Image>
                <Transformer />
            </Layer>
        </Stage>
    );
}