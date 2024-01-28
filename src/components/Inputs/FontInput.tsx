// State management
import { useSettings } from "hooks/useSettings";
import { useShallow } from "zustand/react/shallow";
// Utils
import { cn } from "utils/cn";
import type { Font } from "utils/settings";

export default function FontInput({ font }: { font: Font }) {
    const { currentFont, setFont } = useSettings(
        useShallow((state) => ({
            currentFont: state.font,
            setFont: state.updateSettings,
        })),
    );

    return (
        <button
            onClick={() => setFont({ font })}
            style={{ fontFamily: `"${font}", sans-serif` }}
            className={cn(
                "grid aspect-square w-10 place-content-center rounded-full font-bold outline-1 outline-offset-[5px] outline-black/10 transition-all hover:outline active:outline-offset-2",
                currentFont === font
                    ? "bg-dark-blue-2 text-white"
                    : "bg-light-grey",
            )}
        >
            Aa
        </button>
    );
}
