// State management
import { useSettings } from "hooks/useSettings";
import { useShallow } from "zustand/react/shallow";
// Utils
import { Timer } from "utils/settings";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function MinutesInput({ label }: { label: Timer }) {
    const { timer, setTimer } = useSettings(
        useShallow((state) => ({
            timer: state[label],
            setTimer: state.updateSettings,
        })),
    );

    return (
        <div className="flex flex-col gap-2 max-sm:gap-1">
            <label
                htmlFor={label}
                className="select-none text-xs font-bold text-black/40"
            >
                {label}
            </label>
            <div className="grid grid-cols-2 rounded-lg bg-light-grey px-4 py-1.5">
                <input
                    type="number"
                    className="bg-transparent text-sm font-semibold outline-none"
                    readOnly
                    value={timer}
                    id={label}
                />
                <div className="flex flex-col justify-self-end">
                    <button
                        onClick={() => setTimer({ [label]: timer + 1 })}
                        className="opacity-50 transition-opacity hover:opacity-100"
                    >
                        <ChevronUp size={20} />
                    </button>
                    <button
                        onClick={() => setTimer({ [label]: timer - 1 })}
                        className="opacity-50 transition-opacity hover:opacity-100"
                    >
                        <ChevronDown size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
