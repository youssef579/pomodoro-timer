// Components
import TimerSelector from "components/TimerSelector";
import SettingsMenu from "components/SettingsMenu";
import Timer from "components/Timer";
import Toaster from "components/Toaster";
// Hooks
import { useSettings } from "hooks/useSettings";

export default function App() {
    const selectedFont = useSettings((state) => state.font);

    return (
        <main
            style={{ fontFamily: `${selectedFont}, sans-serif` }}
            className="flex flex-col items-center"
        >
            <h1 className="py-8 text-3xl font-bold">pomodoro</h1>
            <TimerSelector />
            <Timer />
            <SettingsMenu />
            <Toaster id="root" />
        </main>
    );
}
