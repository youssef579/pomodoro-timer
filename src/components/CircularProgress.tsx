type Props = {
    color: string;
    percent: number;
};

const CircularProgress = ({ color, percent }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute inset-2.5 -z-10 aspect-square -rotate-90"
    >
        <circle
            cx="50%"
            cy="50%"
            r="calc(50% - 12.5px)"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={`calc((50% - 12.5px) * ${2 * Math.PI})`}
            strokeDashoffset={`calc((50% - 12.5px) * ${-2 * Math.PI * percent})`}
            strokeWidth={12.5}
            stroke={color}
            style={{ transition: "stroke-dashoffset 0.3s" }}
        />
    </svg>
);
export default CircularProgress;
