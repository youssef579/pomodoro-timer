// State management
import { useSettings } from "hooks/useSettings";
import { useShallow } from "zustand/react/shallow";
// Utils
import { timers } from "utils/settings";
import { cn } from "utils/cn";

export default function TimerSelector() {
    const { currentTimer, color, setTimer } = useSettings(
        useShallow((state) => ({
            currentTimer: state.currentTimer,
            color: state.color,
            setTimer: state.updateSettings,
        })),
    );

    return (
        <div className="relative m-auto grid w-fit grid-cols-3 rounded-full bg-dark-blue-2 p-2">
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
                    onClick={() => setTimer({ currentTimer: timer })}
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
