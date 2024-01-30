// Hooks
import { memo } from "react";
import useTimer from "hooks/useTimer";
// Components
import CircularProgress from "./CircularProgress";

export default memo(function Timer() {
    const { color, seconds, percent, isRunning, startTimer, pauseTimer } =
        useTimer();

    return (
        <div className="my-14 grid aspect-square w-[clamp(300px,70vw,450px)] place-items-center rounded-full bg-dark-blue-2 bg-timer shadow-timer">
            <div className="relative isolate grid aspect-square w-[calc(100%-70px)] place-content-center place-items-center rounded-full bg-dark-blue-2 max-sm:w-[calc(100%-35px)]">
                <CircularProgress color={color} percent={percent} />
                <p className="text-[clamp(3rem,14vw,6rem)] font-bold text-white">
                    {Math.floor(seconds / 60)
                        .toString()
                        .padStart(2, "0")}
                    :{(seconds % 60).toString().padStart(2, "0")}
                </p>
                <button
                    onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "white")
                    }
                    onClick={isRunning ? pauseTimer : startTimer}
                    className="font-semibold uppercase tracking-[0.75rem] text-white transition-colors"
                >
                    {isRunning ? "Pause" : "Start"}
                </button>
            </div>
        </div>
    );
});
