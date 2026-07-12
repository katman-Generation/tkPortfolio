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
    const [logs, setLogs] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {

        if (currentLine >= bootSequence.length) {

            setTimeout(() => {

                onComplete();

            },300);

            return;

        }

        const fullText = bootSequence[currentLine];

        let index = 0;

        const typing = setInterval(() => {

            index++;

            setCurrentText(fullText.slice(0,index));

            if(index === fullText.length){

                clearInterval(typing);

                setTimeout(()=>{

                    setLogs((prev)=>[

                        ...prev,

                        fullText

                    ]);

                    setCurrentText("");

                    setCurrentLine((prev)=>prev+1);

                },500);

            }

        },50);

        return ()=>clearInterval(typing);

    },[currentLine]);

    return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">

        <div className="w-[750px] max-w-[90%] rounded-xl overflow-hidden border border-green-500/20 shadow-2xl shadow-green-500/10">
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
                <div className="bg-black p-6 min-h-[350px] font-mono text-green-400">

                    {logs.map((log,index)=>(

                        <p key={index}>
                            &gt; {log}
                        </p>

                    ))}

                    {currentLine < bootSequence.length && (

                        <p>

                            &gt; {currentText}

                            <span className="animate-pulse">█</span>

                        </p>

                    )}

                </div>

            </div>

        </div>

    </div>
);
}