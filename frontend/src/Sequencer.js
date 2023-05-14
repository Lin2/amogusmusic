import {useEffect, useRef, useState} from 'react';
import SequencerRow from "./SequencerRow";
import * as Tone from 'tone';
import { NUM_STEPS } from './Constants';
import styles from './Sequencer.css'

const Sequencer = () => {
    const ref_music_1 = useRef();
    const ref_music_2 = useRef();
    const ref_music_3 = useRef();
    const ref_music_4 = useRef();
    const ref_music_low_1 = useRef();
    const ref_music_low_2 = useRef();
    const ref_emergency = useRef();
    const ref_suryan = useRef();
    let beat = 0;
    const [highlight, setHighlight] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const sounds = {
        emergency: {B1: "iconic%20maybe/Alarm%20Emergency%20Meeting.mp3"},
        beep: {G5: "note-like/Eject%20Text.mp3"},
        beep_low: {D3: "note-like/Panel%20Boarding%20Start%20Scan.mp3"},
        suryan: {C3: "iconic%20maybe/suryan.mp3"},
    }

    useEffect(() => {
        setHighlight(beat);
    }, [beat])

    const repeat = (time) => {
        try {
            ref_music_1.current.playSound(beat);
            ref_music_2.current.playSound(beat);
            ref_music_3.current.playSound(beat);
            ref_music_4.current.playSound(beat);
            ref_emergency.current.playSound(beat);
            ref_music_low_1.current.playSound(beat);
            ref_music_low_2.current.playSound(beat);
            ref_suryan.current.playSound(beat);
            beat = (beat + 1) % NUM_STEPS;
            console.log(beat);
        } catch(error) {
            console.log(error);
        }
    }

    const startStopPlaying = () => {
        if (!hasStarted) {
            Tone.start();
            Tone.getDestination().volume.rampTo(-10, 0.001)
            setHasStarted(true);

            Tone.Transport.bpm.value = 114;
            Tone.Transport.scheduleRepeat(repeat, "8n");
        }
        if (!isPlaying) {
            setIsPlaying(true);
            Tone.Transport.start();
        } else {
            beat = 0;
            setIsPlaying(false);
            Tone.Transport.stop();
        }
    }

    return (
        <div>
            <div></div>
            <button className = "playButton" onClick={startStopPlaying} text={isPlaying.toString()} style={{padding:"5px 40px", fontFamily: "Impostograph", fontSize:"60px"}} disabled={hasStarted}>PLAY</button>
            <div className="rowGroupHeader">Beep</div>
            <SequencerRow ref={ref_music_1} sound={sounds.beep} note="C5" name="C5" beat={highlight}/>
            <SequencerRow ref={ref_music_2} sound={sounds.beep} note="A4" name="A4" beat={highlight}/>
            <SequencerRow ref={ref_music_3} sound={sounds.beep} note="F4" name="F4" beat={highlight}/>
            <SequencerRow ref={ref_music_4} sound={sounds.beep} note="D4" name="D4" beat={highlight}/>
            <div className="rowGroupHeader">Low Beep</div>
            <SequencerRow ref={ref_music_low_1} sound={sounds.beep_low} note="G2" name="G2" beat={highlight}/>
            <SequencerRow ref={ref_music_low_2} sound={sounds.beep_low} note="B1" name="B1" beat={highlight}/>
            <div className="rowGroupHeader">Emergency Button</div>
            <SequencerRow ref={ref_emergency} sound={sounds.emergency} note="B1" beat={highlight}/>
            <div className="rowGroupHeader">AAA</div>
            <SequencerRow ref={ref_suryan} sound={sounds.suryan} note="C3" duration={5} beat={highlight}/>
        </div>
    );
}

export default Sequencer;