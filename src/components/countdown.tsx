import { useState, useEffect } from "react";

function calculateTimeLeft( eventDate ) {
    const now = new Date().getTime();
    const target = new Date(eventDate).getTime();
    const difference = target - now;

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

function Countdown({ eventDate }) {
    const [timeLeft, setTimeLeft] = useState(() =>
        calculateTimeLeft(eventDate)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const next = calculateTimeLeft(eventDate);
            setTimeLeft(next);

            if (
                next.days === 0 &&
                next.hours === 0 &&
                next.minutes === 0 &&
                next.seconds === 0
            ) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    return (
        <div className="rounded-xl border border-yellow-900 bg-orange-950/40 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-amber-200">
                A Festa do Pato começa em:
            </h2>
            <div className="flex justify-center gap-8">
                <div className="flex flex-col items-center gap-1">
                    <span className="text-4xl font-extrabold text-amber-200">
                        {timeLeft.days}
                    </span>
                    <span className="text-[0.85rem] tracking-[0.05em] text-white uppercase">
                        Dias
                    </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-4xl font-extrabold text-amber-200">
                        {timeLeft.hours}
                    </span>
                    <span className="text-[0.85rem] tracking-[0.05em] text-white uppercase">
                        Horas
                    </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-4xl font-extrabold text-amber-200">
                        {timeLeft.minutes}
                    </span>
                    <span className="text-[0.85rem] tracking-[0.05em] text-white uppercase">
                        Minutos
                    </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-4xl font-extrabold text-amber-200">
                        {timeLeft.seconds}
                    </span>
                    <span className="text-[0.85rem] tracking-[0.05em] text-white uppercase">
                        Segundos
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
