import {React, forwardRef, useImperativeHandle, useState} from 'react';
import * as Tone from 'tone'

const SequencerRow = forwardRef(function SequenceRow(props, ref) {

    const [enabled, setEnabled] = useState(Array(32).fill(false));
    const sampler = new Tone.Sampler({
        urls: props.sound,
        baseUrl: "https://lin2.github.io/",
    }).toDestination();

    useImperativeHandle(ref, () => ({
        playSound(index) {
            if (enabled[index]) {
                sampler.triggerAttackRelease([props.note], 0.5);
            }
        }
    }));
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
       } style={{backgroundColor: enabled[i] ? 'green': 'white', padding: '15px 15px'}} >
   </button>
)
}
    return (
        <div>
            {/* <button type="button"></button> */}
            {/* <button onClick={activateButton}>   */}
            {/* </button> */}
            {paging}
        </div>
    );


});

export default SequencerRow;