import {useRef, useState} from 'react';
import SequencerRow from "./SequencerRow";
import * as Tone from 'tone';

const Sequencer = () => {
    const ref_music_1 = useRef();
    const ref_music_2 = useRef();
    const ref_music_3 = useRef();
    const ref_music_4 = useRef();
    const ref_emergency = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const sounds = {
        emergency: {B1: "iconic%20maybe/Alarm%20Emergency%20Meeting.mp3"},
        music: {G5: "note-like/Eject%20Text.mp3"}
    }

    const startPlaying = () => {
        let beat = 0;
        setIsPlaying(true);
        Tone.start();
        Tone.getDestination().volume.rampTo(-10, 0.001)

        const repeat = (time) => {
            try {
                // ref_music_1.current.playSound(beat);
                // ref_music_2.current.playSound(beat);
                ref_music_3.current.playSound(beat);
                // ref_emergency.current.playSound(beat);
                beat = (beat + 1) % 8;
            } catch(error) {
                console.log(error);
            }
        }

        Tone.Transport.bpm.value = 60;
        Tone.Transport.scheduleRepeat(repeat, "8n");
        Tone.Transport.start();
    }

    return (
        <div>
            <button onClick={startPlaying} text={isPlaying.toString()}></button>
            {/* <SequencerRow ref={ref_music_1} sound={sounds.music}/> */}
            {/* <SequencerRow ref={ref_music_2} sound={sounds.music}/> */}
            <SequencerRow ref={ref_music_3} sound={sounds.music} note="C5"/>
            <SequencerRow ref={ref_music_4} sound={sounds.music} note="C5"/>
            {/* <SequencerRow ref={ref_emergency} sound={sounds.emergency} note="B1"/> */}
        </div>
    );
}

export default Sequencer;