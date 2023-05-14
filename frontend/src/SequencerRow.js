import {React, forwardRef, useImperativeHandle, useState} from 'react';
import * as Tone from 'tone'

const SequencerRow = forwardRef(function SequenceRow(props, ref) {

    const [enabled, setEnabled] = useState(Array(10).fill(true));
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

    return (
        <div>
            <button type="button"></button>
        </div>
    );


});

export default SequencerRow;