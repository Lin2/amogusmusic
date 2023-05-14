import {useRef, useState} from 'react';
import SequencerRow from "./SequencerRow";
import * as Tone from 'tone';

const Sequencer = () => {
    const ref = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const startPlaying = () => {
        let beat = 0;
        console.log("test");
        setIsPlaying(true);
        Tone.start();
        Tone.getDestination().volume.rampTo(-10, 0.001)

        const repeat = (time) => {
            console.log("hi");
            ref.current.playSound(beat);
            beat = (beat + 1) % 8;
        }

        Tone.Transport.bpm.value = 120;
        Tone.Transport.scheduleRepeat(repeat, "8n");
        Tone.Transport.start();
    }

    return (
        <div>
            <button onClick={startPlaying} text={isPlaying.toString()}></button>
            <SequencerRow ref={ref}/>
        </div>
    );
}

export default Sequencer;