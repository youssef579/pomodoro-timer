// State management
import { useSettings } from "hooks/useSettings";
import { useShallow } from "zustand/react/shallow";
// Utils
import { cn } from "utils/cn";
import type { Color } from "utils/settings";
// Icons
import { Check } from "lucide-react";

export default function ColorInput({ color }: { color: Color }) {
    const { currentColor, setColor } = useSettings(
        useShallow((state) => ({
            currentColor: state.color,
            setColor: state.updateSettings,
        })),
    );

    return (
        <button
            onClick={() => setColor({ color })}
            style={{ backgroundColor: color }}
            className="grid aspect-square w-10 place-content-center rounded-full outline-1 outline-offset-[5px] outline-black/10 transition-all hover:outline active:outline-offset-2"
        >
            <Check
                size={20}
                className={cn(
                    "transition-transform",
                    currentColor === color ? "scale-100" : "scale-0",
                )}
            />
        </button>
    );
}
