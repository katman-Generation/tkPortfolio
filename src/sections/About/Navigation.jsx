import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Navigation({
    next,
    previous,
    current,
    total,
    }) {

    return (

        <div className="mt-8 flex justify-center gap-6">

            <button
                onClick={previous}
                disabled={current === 0}
                className="rounded-full bg-white/10 p-4 hover:bg-white/20 disabled:opacity-30"
            >
                <FaChevronLeft />
            </button>

            <button
                onClick={next}
                disabled={current === total - 1}
                className="rounded-full bg-white/10 p-4 hover:bg-white/20 disabled:opacity-30"
            >
                <FaChevronRight />
            </button>

        </div>

    );

}