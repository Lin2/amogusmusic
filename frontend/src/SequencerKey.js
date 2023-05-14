import {React, useState} from 'react';
import * as Tone from 'tone'

const SequencerRow = (props) => {

    const [enabled, setEnabled] = useState(Array(10).fill(false));
    const [isLoaded, setIsLoaded] = useState(false);
    const sampler = new Tone.Sampler({
        urls: {
            G5: "Eject%20Text.mp3",
        },
        onload: () => {
            setIsLoaded(true);
        },
        baseUrl: "https://lin2.github.io/note-like/",
    }).toDestination();

    const playSound = () => {
        sampler.triggerAttackRelease(["D4"], 0.5);
    }

    return (
        <div>
            <button type="button" onClick={playSound} enabled={isLoaded.toString()}></button>
        </div>
    );


}

export default SequencerRow;