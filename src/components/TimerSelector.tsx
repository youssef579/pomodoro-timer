// State management
import { useSettings } from "hooks/useSettings";
import { useShallow } from "zustand/react/shallow";
// Utils
import { timers, type Timer } from "utils/settings";
import { cn } from "utils/cn";
import { toast } from "react-toastify";

export default function TimerSelector() {
    const { currentTimer, color, setTimer, isRunning } = useSettings(
        useShallow((state) => ({
            currentTimer: state.currentTimer,
            color: state.color,
            setTimer: state.updateSettings,
            isRunning: state.isRunning,
        })),
    );

    function changeTimer(timer: Timer) {
        if (isRunning)
            return toast.error("The timer cannot be changed while running.", {
                containerId: "root",
            });

        setTimer({ currentTimer: timer });
    }

    return (
        <div className="relative grid grid-cols-3 rounded-full bg-dark-blue-2 p-2">
            <div
                style={{
                    backgroundColor: color,
                    transform: `translateX(calc(${timers.findIndex((t) => t === currentTimer) * 100}% + 8px))`,
                }}
                className="absolute top-2 h-[calc(100%-4*4px)] w-[calc((100%-4*4px)/3)] rounded-full transition-transform"
            ></div>
            {timers.map((timer) => (
                <button
                    key={timer}
                    onClick={() => changeTimer(timer)}
                    className={cn(
                        "relative px-[clamp(0.25rem,2vw,2rem)] py-3.5 text-sm font-bold transition-all",
                        currentTimer !== timer
                            ? "opacity-50 hover:opacity-100"
                            : "text-dark-blue-2",
                    )}
                >
                    {timer}
                </button>
            ))}
        </div>
    );
}
