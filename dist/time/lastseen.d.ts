/** 1604247241_000 -> yesterday */
export declare function lastseen(timestamp: number): string;
export declare const TIMELINE_STATUS: {
    NOT_STARTED: number;
    STARTS_SOON: number;
    STARTED_IN_BETWEEN: number;
    ENDS_SOON: number;
    ENDED: number;
    UNKNOWN: number;
};
/**
 *
 * Important:
 * All timeline is based on GMT
 *
 * This Timeline class is only dynamic when
 * less 24 hours remaining, for rest case static
 * time values is shown.
 *
 * Eg: if 5 days is the timeline the output will
 *     be "Ends in 5d"
 * BUT if 24h is only remaining then output will
 *     be like "7h 23m" ... after 1 min "7h 22m"
 *     and so on ...
 */
export declare class Timeline {
    /** It is time when it switches from 60s interval to 1s interval
     *  and this gives awesome ux, so if you provide value 120 it means
     * if 120 or less seconds remaining then update every 1s
     */
    private SWITCH_SECONDS;
    private replacer;
    private STATUS;
    private time;
    private interval;
    private timeString;
    private start_time;
    private finish_time;
    private intervaler;
    constructor(start_time: string, finish_time: string, 
    /** It is time when it switches from 60s interval to 1s interval
     *  and this gives awesome ux, so if you provide value 120 it means
     * if 120 or less seconds remaining then update every 1s
     */
    SWITCH_SECONDS?: number, replacer?: string[]);
    private sleep;
    private start;
    private update;
    private finish;
    restart(start_time: string, finish_time: string): void;
    /** Call this function to stop the timeline
     *  and clear all timers
     */
    private kill;
    private _onStart?;
    onStart(callback: Function): {
        onUpdate: (callback: (result: {
            time: string;
            status: number;
        }) => any) => {
            onFinish: (callback: Function) => {
                start: (nolog?: boolean) => () => void;
            };
            start: () => () => void;
        };
        start: () => () => void;
    };
    private _onUpdate?;
    onUpdate(callback: (result: {
        time: string;
        status: number;
    }) => any): {
        onFinish: (callback: Function) => {
            start: (nolog?: boolean) => () => void;
        };
        start: () => () => void;
    };
    private _onFinish?;
    onFinish(callback: Function): {
        start: (nolog?: boolean) => () => void;
    };
    private toDoubleDigit;
    static getStatus(start_time: string, finish_time: string): number;
}
//# sourceMappingURL=lastseen.d.ts.map