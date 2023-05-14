import {React, useImperativeHandle, useState} from 'react';
import * as Tone from 'tone'

const SequencerRow = (props, ref) => {

    const [enabled, setEnabled] = useState(Array(10).fill(false));
    const sampler = new Tone.Sampler({
        urls: {
            G5: "Eject%20Text.mp3",
        },
        baseUrl: "https://lin2.github.io/note-like/",
    }).toDestination();

    useImperativeHandle(ref, () => ({
        playSound(index) {
            if (enabled[index]) {
                sampler.triggerAttackRelease(["D4"], 0.5);
            }
        }
    }));

    return (
        <div>
            <button type="button"></button>
        </div>
    );


}

export default SequencerRow;