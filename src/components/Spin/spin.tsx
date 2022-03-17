import React from "react";
import BallBeat from "./BallBeatSpin/ball_beat_spin";
import BallClipRotate from "./BallClipRotateSpin/ball_clip_rotate_spin";
import BallPulse from "./BallPulseSpin/ball_pulse_spin";
import BallPulseSync from "./BallPulseSyncSpin/ball_pulse_sync_spin";
import BallScale from "./BallScaleSpin/ball_scale_spin";
import BallScaleMultiple from "./BallScaleMultipleSpin/ball_scale_multiple";
import BallSpinFadeLoader from "./BallSpinFadeLoaderSpin/ball_spin_fade_loader_spin";
import LineScale from "./LineScaleSpin/line_scale_spin";
import LineScaleParty from "./LineScalePartySpin/line_scale_party_spin";
import LineScalePulseOut from "./LineScalePulseOutSpin/line_scale_pulse_out_spin";
import LineSpinFadeLoader from "./LineSpinFadeLoaderSpin/line_spin_fade_loader_spin";
import Square from "./SquareSpin/square_spin";

class Spin extends React.Component{
    static BallBeat: typeof BallBeat;
    static BallClipRotate: typeof BallClipRotate;
    static BallPulse: typeof BallPulse;
    static BallPulseSync: typeof BallPulseSync;
    static BallScale: typeof BallScale;
    static BallScaleMultiple: typeof BallScaleMultiple;
    static BallSpinFadeLoader: typeof BallSpinFadeLoader;
    static LineScale: typeof LineScale;
    static LineScaleParty: typeof LineScaleParty;
    static LineScalePulseOut: typeof LineScalePulseOut;
    static LineSpinFadeLoader: typeof LineSpinFadeLoader;
    static Square: typeof Square;
}


Spin.BallBeat = BallBeat;
Spin.BallClipRotate = BallClipRotate;
Spin.BallPulse = BallPulse;
Spin.BallPulseSync = BallPulseSync;
Spin.BallScale = BallScale;
Spin.BallScaleMultiple = BallScaleMultiple;
Spin.BallSpinFadeLoader = BallSpinFadeLoader;
Spin.LineScale = LineScale;
Spin.LineScaleParty = LineScaleParty;
Spin.LineScalePulseOut = LineScalePulseOut;
Spin.LineSpinFadeLoader = LineSpinFadeLoader;
Spin.Square = Square;


export default Spin;