import { useId } from "react";
import Star from "./Star";

type StarRatingProps = {
    value: number;
    max?: number;
    color: string; // e.g. "text-warning" — Star derives the /25 variant internally
    label: string;
    className?: string;
};

const StarRating = (props: StarRatingProps) => {
    const { value, max = 5, color, label, className } = props;
    const uid = useId();

    return (
        <div
            aria-label={`${label}: ${value} out of ${max}`}
            className={`flex flex-col ${className ?? ""}`}>
            <p className={`text-xs ${color} mb-1`}>
                <strong>{label}</strong>
            </p>
            <div className="flex gap-1">
                {[...Array(max)].map((_, i) => {
                    const isFull = i < Math.floor(value);
                    const isHalf = i === Math.floor(value) && value % 1 !== 0;

                    return (
                        <div key={i} className="relative w-5 h-5">
                            <Star
                                id={`${uid}-half-${i}`}
                                fillState={isFull ? "full" : isHalf ? "half" : "empty"}
                                color={color}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StarRating;
