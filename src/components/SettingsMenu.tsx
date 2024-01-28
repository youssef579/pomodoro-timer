// React state
import { useRef, memo } from "react";
// Utils
import { timers, fonts, colors } from "utils/settings";
// Icons
import { Settings } from "lucide-react";
import { X } from "lucide-react";
// Components Inputs
import MinutesInput from "components/Inputs/MinutesInput";
import FontInput from "components/Inputs/FontInput";
import ColorInput from "./Inputs/ColorInput";

export default memo(function SettingsMenu() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <button
                onClick={() => dialogRef.current!.showModal()}
                className="m-auto block transition-transform hover:rotate-180"
            >
                <Settings size={30} strokeWidth={1.5} />
            </button>
            <dialog
                ref={dialogRef}
                onClick={(e) => {
                    if (e.currentTarget === e.target)
                        dialogRef.current!.close();
                }}
                className="relative w-[550px] rounded-3xl backdrop:bg-black/50 open:animate-fade-in open:backdrop:animate-fade-in"
            >
                <div className="flex justify-between p-8 max-sm:p-6">
                    <h1 className="text-3xl font-bold max-sm:text-2xl">
                        Settings
                    </h1>
                    <button
                        onClick={() => dialogRef.current!.close()}
                        className="opacity-50 transition-opacity hover:opacity-100"
                    >
                        <X />
                    </button>
                </div>
                <hr />
                <div className="px-8">
                    <div className="py-5">
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.3rem] max-sm:text-center">
                            Time (Minutes)
                        </h3>
                        <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1">
                            {timers.map((timer) => (
                                <MinutesInput key={timer} label={timer} />
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between gap-2 py-5 max-sm:flex-col">
                        <h3 className="text-sm font-bold uppercase tracking-[0.3rem] max-sm:text-center">
                            Font
                        </h3>
                        <div className="flex gap-4">
                            {fonts.map((font) => (
                                <FontInput key={font} font={font} />
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between gap-2 py-5 max-sm:flex-col">
                        <h3 className="text-sm font-bold uppercase tracking-[0.3rem] max-sm:text-center">
                            Color
                        </h3>
                        <div className="flex gap-4">
                            {colors.map((color) => (
                                <ColorInput key={color} color={color} />
                            ))}
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
});
