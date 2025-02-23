import { useEffect, useRef, useState } from "react";

const Watch = () => {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const startTimeRef = useRef<number>(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 100); 
        } else if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
        }

        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        };
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    };

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);

        return `${hours.toString().padStart(2, '0')}
            :${minutes.toString().padStart(2, '0')}
            :${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-5/6 flex justify-between items-center flex-col m-10">
            <div className="w-5/6">
                <p className="text-4xl mb-3 text-center text-white">{
                formatTime(elapsedTime)}
                </p>
            </div>
            <div className="w-4/6 mx-2 flex justify-between ">
            <button 
                className="px-6 py-2 bg-primary-100 text-white font-semibold rounded-lg hover:bg-primary-200 transition-all duration-300"
                onClick={start}
                >
                Start
                </button>
                <button 
                className="px-6 py-2 bg-secondary-300 text-white font-semibold rounded-lg hover:bg-secondary-400 transition-all duration-300"
                onClick={stop}
                >
                Stop
                </button>
                <button 
                className="px-6 py-2 bg-training-100 text-white font-semibold rounded-lg hover:bg-primary-200 transition-all duration-300"
                onClick={reset}
                >
                Reset
                </button>
            </div>
        </div>
    );
};

export default Watch;
