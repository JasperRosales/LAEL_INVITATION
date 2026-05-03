import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F3E4C9] relative overflow-hidden">
      {/* Floating Background Images */}
      {isOpen && (
        <>
          <motion.img
            src="/lael.png"
            alt="background"
            animate={{ y: [0, -30, 0], x: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-32 -left-32 w-80 h-80 object-cover opacity-50 pointer-events-none"
          />
          <motion.img
            src="/lael.png"
            alt="background"
            animate={{ y: [0, 30, 0], x: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-32 -right-32 w-72 h-72 object-cover opacity-50 pointer-events-none"
          />
          <motion.img
            src="/lael.png"
            alt="background"
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute top-1/3 -right-40 w-64 h-64 object-cover opacity-50 pointer-events-none"
          />
        </>
      )}

      <div className="w-full max-w-md relative z-20">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, rotateY: 90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <div className="relative w-full aspect-[4/3]">
                <motion.div
                  className="absolute inset-0 bg-[#A77F60] rounded-xl shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    initial={{ rotateX: 0 }}
                    whileHover={{ rotateX: -15 }}
                    className="absolute top-0 left-0 right-0 h-1/2 bg-[#8A5F41] origin-top"
                    style={{
                      clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                      transformStyle: "preserve-3d",
                    }}
                  />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-[#CCD67F] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                      <div className="w-16 h-16 bg-[#F3E4C9] rounded-full flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#CCD67F] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-0 right-0 text-center text-[#F3E4C9] font-medium text-sm">
                    Click to Open
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-full bg-[#F3E4C9] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
            >
              {/* Main Content */}
              <div className="flex-1 p-6 sm:p-8 space-y-5 flex flex-col justify-between relative z-10">
                {/* Top Section */}
                <div className="space-y-5">
                  {/* Title */}
                  <motion.h1
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-2xl sm:text-3xl font-serif font-bold text-[#8A5F41]"
                  >
                    Baptism Invitation
                  </motion.h1>

                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 }}
                    className="h-px bg-[#A77F60] mx-auto w-1/3"
                  />

                  {/* Subtitle */}
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-[#A77F60] text-sm"
                  >
                    You are invited to celebrate
                  </motion.p>

                  {/* Main Image */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center"
                  >
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden shadow-lg border-2 border-[#8A5F41]">
                      <img
                        src="/lael.png"
                        alt="Lael"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Name */}
                  <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-3xl sm:text-4xl font-serif font-bold text-[#8A5F41]"
                  >
                    Lael Ezekiel
                  </motion.h2>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.65 }}
                    className="text-center text-[#A77F60] text-sm -mt-2"
                  >
                    1 Year Old
                  </motion.p>
                </div>

                {/* Invitation Text */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-4"
                >
                  <p className="text-[#8A5F41] text-sm leading-relaxed text-left">
                    <span className="font-semibold">Hello Reader,</span>
                  </p>
                  <p className="text-[#8A5F41] text-sm leading-relaxed text-justify">
                    You and your family are officially invited to attend the
                    baptism of <span className="font-semibold">Lael Ezekiel</span>.  
                    This meaningful and joyous occasion will be held on{" "}
                    <span className="font-semibold">May 28, 2026</span>, at{" "}
                    <span className="font-semibold">2:00 PM</span>, in{" "}
                    <span className="font-semibold">Bagong Tubig</span>.
                    We would be honored by your presence as we celebrate this
                    special milestone and share in this moment of faith, love,
                    and blessing.
                  </p>

  

                  <p className="text-[#8A5F41] text-sm leading-relaxed text-justify">
                    Kindly join us as we gather together with family and friends
                    to witness and commemorate this sacred event.
                  </p>
                  <p className="text-[#8A5F41] text-xs mt-4 text-right">
                    - From{" "}
                    <span className="font-semibold text-[#8A5F41]">
                      Mr. & Mrs. Villaranda
                    </span>
                  </p>
                </motion.div>

                {/* Message */}
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-center text-[#A77F60] text-xs leading-relaxed"
                >
                  We would love for you to join us for this special occasion
                </motion.p>
              </div>

              {/* Close Button Footer */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="w-full bg-[#F3E4C9] border-t border-[#A77F60] text-[#8A5F41] py-3 font-medium transition-all hover:bg-[#E8D5B7] text-sm relative z-10"
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
