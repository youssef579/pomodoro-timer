// Zustand
import { create } from "zustand";
import { persist } from "zustand/middleware";
// Utils
import type { Timer, Font, Color } from "utils/settings";

type Settings = {
    color: Color;
    font: Font;
    currentTimer: Timer;
    isRunning: boolean;
} & Record<Timer, number>;

type Handlers = {
    updateSettings(newSettings: Partial<Settings>): void;
};

export const useSettings = create<Settings & Handlers>()(
    persist(
        (set) => ({
            color: "rgb(248, 112, 112)",
            font: "Kumbh Sans Variable",
            pomodoro: 25,
            "short break": 5,
            "long break": 15,
            isRunning: false,
            currentTimer: "pomodoro",
            updateSettings(newSettings: Partial<Settings>) {
                set(newSettings);
            },
        }),
        {
            version: 4,
            name: "settings",
            partialize(state) {
                return Object.fromEntries(
                    Object.entries(state).filter(
                        ([key]) =>
                            key !== "currentTimer" && key !== "isRunning",
                    ),
                );
            },
        },
    ),
);
