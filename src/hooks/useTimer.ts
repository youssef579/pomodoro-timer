/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useSettings } from "hooks/useSettings";
import { useShallow } from "zustand/react/shallow";
import { useState, useEffect, useMemo } from "react";
// Sounds
import alarmRinging from "/alarm-clock-ringing.mp3";

export default function useTimer() {
    const { updateSettings, isRunning, color, ...settings } = useSettings(
        useShallow((state) => ({
            currentTimer: state.currentTimer,
            pomodoro: state.pomodoro,
            "short break": state["short break"],
            "long break": state["long break"],
            isRunning: state.isRunning,
            color: state.color,
            updateSettings: state.updateSettings,
        })),
    );
    const totalSeconds = settings[settings.currentTimer] * 60;
    const [seconds, setSeconds] = useState(totalSeconds);
    const [, setTimerID] = useState<number | null>(null);
    const ringingSound = useMemo(() => new Audio(alarmRinging), []);

    useEffect(() => {
        setSeconds(totalSeconds);
    }, [
        settings.currentTimer,
        settings.pomodoro,
        settings["short break"],
        settings["long break"],
    ]);

    function pauseTimer() {
        setTimerID((timerID) => {
            clearInterval(timerID!);
            return null;
        });
        updateSettings({ isRunning: false });
    }

    function startTimer() {
        updateSettings({ isRunning: true });
        setTimerID(
            setInterval(
                () =>
                    setSeconds((seconds) => {
                        if (seconds - 1 >= 0) return seconds - 1;

                        pauseTimer();
                        ringingSound.play();
                        return totalSeconds;
                    }),
                1000,
            ),
        );
    }

    return {
        seconds,
        color,
        percent: (totalSeconds - seconds) / totalSeconds,
        isRunning,
        startTimer,
        pauseTimer,
    };
}
