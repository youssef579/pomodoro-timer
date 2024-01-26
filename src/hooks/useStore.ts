import { create } from "zustand";
import { persist } from "zustand/middleware";

type Settings = {
    color: "#f87070";
    font: "Kumbh Sans Vairable" | "Roboto Slab" | "Space Mono";
    currentTimer: "pomodoro" | "short break" | "long break";
};

type Handlers = {
    updateSettings(newSettings: Partial<Settings>): void;
};

export const useSettings = create<Settings & Handlers>()(
    persist(
        (set) => ({
            color: "#f87070",
            font: "Kumbh Sans Vairable",
            currentTimer: "pomodoro",
            updateSettings(newSettings: Partial<Settings>) {
                set(newSettings);
            },
        }),
        {
            name: "settings",
        },
    ),
);
