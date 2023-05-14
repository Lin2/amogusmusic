import {React, forwardRef, useImperativeHandle, useState, useEffect} from 'react';
import * as Tone from 'tone'
import { NUM_STEPS } from './Constants';

const SequencerRow = forwardRef(function SequenceRow(props, ref) {

    const [enabled, setEnabled] = useState(Array(NUM_STEPS).fill(false));
    const [buttonBorderColor, setButtonBorderColor] = useState(Array(NUM_STEPS).fill("black"));
    const sampler = new Tone.Sampler({
        urls: props.sound,
        baseUrl: "https://lin2.github.io/",
    }).toDestination();

    useImperativeHandle(ref, () => ({
        playSound(index) {
            if (enabled[index]) {
                sampler.triggerAttackRelease([props.note], props.duration ?? 0.5);
            }
        }
    }));
    useEffect(() => {
        let temp = Array(NUM_STEPS).fill("black");
        temp[props.beat] = "yellow";
        setButtonBorderColor(temp);
    }, [props.beat]);

    let copyE = []
    const activateButton = (i) => {
        copyE = [...enabled]
        copyE[i] = !copyE[i]
        setEnabled(copyE);
        // console.log(i)
    }
    const paging = []
    //let currentPage = 0;
    for (let i= 0;i<32; i++){
        paging.push(
           <button 
           onClick={() => {
           activateButton(i);
           //currentPage = i
           }
       } style={{backgroundColor: enabled[i] ? '#41E1DC': 'white', padding: '15px 15px', border: '2px solid', borderColor: buttonBorderColor[i]}} >
        
   </button>
)
}
    return (
        <div>
            {/* <button type="button"></button> */}
            {/* <button onClick={activateButton}>   */}
            {/* </button> */}
            {paging}
            {props.name}
        </div>
    );


});

export default SequencerRow;