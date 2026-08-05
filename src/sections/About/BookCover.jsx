import { motion } from "framer-motion";

export default function BookCover({ opened, onOpen }) {
  return (
    <motion.div
      onClick={() => {
        if (!opened) onOpen();
      }}
      className="
        absolute
        inset-0
        z-30
        cursor-pointer
      "
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "left center",
      }}
      initial={false}
      animate={{
        rotateY: opened ? -160 : 0,
      }}
      transition={{
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Front Cover */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1/2
          rounded-r-2xl
          bg-[#3b2415]
          border
          border-yellow-700/30
          shadow-2xl
        "
      >
        {/* Spine */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-4
            sm:w-6
            lg:w-8
            bg-[#241508]
          "
        />

        <div className="flex h-full items-center justify-center text-center px-4 sm:px-6 md:px-8">
          <div>
            <p className="tracking-[0.25em] sm:tracking-[0.35em] lg:tracking-[0.4em] text-yellow-500 sm:text-xs lg:text-sm">
              THE STORY OF
            </p>

            <h1 className="mt-4 sm:mt-5 lg:mt-6 text-2xl sm:text-4xl lg:text-5xl font-serif text-yellow-400">
              KATMAN
            </h1>

            <p className="mt-3 sm:mt-5 lg:mt-6 italic text-gray-300 sm:text-sm lg:text-base">
              A journey written in code
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}