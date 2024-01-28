export const timers = ["pomodoro", "short break", "long break"] as const;
export const fonts = [
    "Kumbh Sans Variable",
    "Roboto Slab Variable",
    "Space Mono",
] as const;
export const colors = [
    "rgb(248, 112, 112)",
    "rgb(112, 243, 248)",
    "rgb(216, 129, 248)",
] as const;

export type Timer = (typeof timers)[number];
export type Font = (typeof fonts)[number];
export type Color = (typeof colors)[number];
