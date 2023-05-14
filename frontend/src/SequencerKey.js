import {React, useState} from 'react';
import * as Tone from 'tone'

const SequencerKey = (props) => {

    const [enabled, setEnabled] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const sampler = new Tone.Sampler({
        urls: {
            A1: "Eject%20Text.mp3?raw=true",
        },
        onload: () => {
            setIsLoaded(true);
        },
        baseUrl: "https://lin2.github.io/note-like/",
    }).toDestination();

    const playSound = () => {
        Tone.start();
        Tone.getDestination().volume.rampTo(-10, 0.001)
        Tone.Transport.start();
        sampler.triggerAttackRelease(["A1"], 0.5);
    }

    return (
        <div>
            <button type="button" onClick={playSound} enabled={isLoaded.toString()}></button>
        </div>
    );


}

export default SequencerKey;