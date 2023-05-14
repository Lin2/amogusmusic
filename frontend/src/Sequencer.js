import {useRef, useState} from 'react';
import SequencerRow from "./SequencerRow";
import * as Tone from 'tone';
import { NUM_STEPS } from './Constants';

const Sequencer = () => {
    const ref_music_1 = useRef();
    const ref_music_2 = useRef();
    const ref_music_3 = useRef();
    const ref_music_4 = useRef();
    const ref_emergency = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const sounds = {
        emergency: {B1: "iconic%20maybe/Alarm%20Emergency%20Meeting.mp3"},
        beep: {G5: "note-like/Eject%20Text.mp3"},
        beep_low: {D3: "note-like/Panel%20Boarding%20Start%20Scan"},
    }

    const startStopPlaying = () => {
        let beat = 0;
        setIsPlaying(true);
        Tone.start();
        Tone.getDestination().volume.rampTo(-10, 0.001)

        const repeat = (time) => {
            try {
                ref_music_1.current.playSound(beat);
                ref_music_2.current.playSound(beat);
                ref_music_3.current.playSound(beat);
                ref_emergency.current.playSound(beat);
                beat = (beat + 1) % NUM_STEPS;
            } catch(error) {
                console.log(error);
            }
        }

        Tone.Transport.bpm.value = 114;
        Tone.Transport.scheduleRepeat(repeat, "8n");
        Tone.Transport.start();
    }

    return (
        <div>
            <div></div>
            <button onClick={startStopPlaying} text={isPlaying.toString()} style={{padding:"20px 50px", fontFamily: "Impostograph", fontSize:"60px"}}>PLAY</button>
            <div className="rowGroupHeader">Beep</div>
            <SequencerRow ref={ref_music_1} sound={sounds.beep} note="C5"/>
            <SequencerRow ref={ref_music_2} sound={sounds.beep} note="A5"/>
            <SequencerRow ref={ref_music_3} sound={sounds.beep} note="F4"/>
            <SequencerRow ref={ref_music_4} sound={sounds.beep} note="D4"/>
            <div className="rowGroupHeader">Emergency Button</div>
            <SequencerRow ref={ref_emergency} sound={sounds.emergency} note="B1"/>
        </div>
    );
}

export default Sequencer;