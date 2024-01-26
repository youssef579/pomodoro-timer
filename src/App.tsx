import TimerSelector from "components/TimerSelector";
import { useSettings } from "hooks/useStore";

export default function App() {
    const selectedFont = useSettings((state) => state.font);

    return (
        <main style={{ fontFamily: `${selectedFont}, sans-serif` }}>
            <h1 className="py-8 text-center text-3xl font-bold">pomodoro</h1>
            <TimerSelector />
        </main>
    );
}
