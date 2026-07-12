import { useEffect, useState } from "react";

const bootSequence = [
    "Booting KatmanOS...",
    "Initializing Environment...",
    "Loading Projects...",
    "Loading Technologies...",
    "Connecting Creativity...",
    "Preparing Experience...",
    "Access Granted."
];
export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    onComplete();
                    return 100;
                }
                const nextProgress = prev + 1;

                const logIndex = Math.floor(nextProgress / 15);

                // if (
                //     logIndex < bootSequence.length &&
                //     message === bootSequence[logIndex - 1]
                // ) {
                //     setMessage(bootSequence[logIndex]);
                // }

                return nextProgress;
                // return prev + 1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-[700px] rounded-xl overflow-hidden border border-green-500/20 shadow-2xl shadow-green-500/10">

            <div className="bg-zinc-900 px-4 py-2 border-b border-green-500/20 flex justify-between">

                <span className="text-sm text-green-400 font-mono">
                    KatmanOS v1.0
                </span>

                <span className="text-gray-500 text-sm">
                    ● ● ●
                </span>

            </div>

            <div className="bg-black p-6 min-h-[350px]">

                {/* Terminal logs go here */}
                <div className="mt-6 text-left font-mono text-green-400 space-y-2">
                    {bootSequence.slice(0, Math.floor(progress / 15) + 1).map((log, index) => (
                        <p key={index}>
                            &gt; {log}
                        </p>
                    ))}

                    <span className="animate-pulse">█</span>
                </div>

            </div>

        </div>
    );
}