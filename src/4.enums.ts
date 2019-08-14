export enum ACTION {
    PLAY,
    PAUSE,
    STOP,
}

function doAction(action: ACTION) {
    console.log(action);
}

doAction(ACTION.PLAY)
