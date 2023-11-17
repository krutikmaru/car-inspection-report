import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const OverallScore = () => {
  const overallScores = {
    scores: [
      { title: "Exterior Body Damage Diagram", score: 70 },
      { title: "Steering, Suspension & Brakes", score: 54 },
      { title: "Car Specs", score: 100 },
      { title: "Front Right Wheel And Tyre", score: 70 },
      { title: "Rear Left Wheel And Tyre", score: 70 },

      { title: "Engine & Transmission", score: 80 },
      { title: "Interior, Electicals & AirConditioner", score: 51 },
      { title: "Front Left Wheel And Tyre", score: 70 },
      { title: "Rear Right Wheel And Tyre", score: 70 },
      { title: "Spare Wheel And Tyre", score: 0 },
    ],
  };
  return (
    <div className="mt-10 ">
      {/* Title ⬇️ */}
      <div>
        <h1 className="text-4xl text-gray-800 font-semibold">Overall Score</h1>
      </div>
      {/* Scores⬇️ */}
      <div className="w-full md:min-h-[380px] mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-start p-5 rounded-md border-2 border-gray-200">
        <div className="min-h-[320px] w-full ">
          {overallScores.scores.map((s, index) => {
            if (index < 5) {
              return <Score title={s.title} score={s.score} />;
            }
            return undefined;
          })}
        </div>
        <div className="min-h-[320px] w-full ">
          {overallScores.scores.map((s, index) => {
            if (index >= 5) {
              return <Score title={s.title} score={s.score} />;
            }
            return undefined;
          })}
        </div>
      </div>
    </div>
  );
};

const Score = ({ score, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const progressBarTailwind = `h-full rounded-full bg-${
    score >= 80 ? "green-400" : "carzilla-purple-primary"
  }`;

  return (
    <div ref={ref} className=" flex-col w-full h-20">
      {/* Title ⬇️ */}
      <div className="text-sm text-gray-600 mb-2">{title}</div>
      {/* Progress ⬇️ */}
      <div className="w-full flex  items-center justify-between">
        {/* Progress Bar ⬇️ */}
        <div className="bg-gray-300 h-3 w-[80%] rounded-full overflow-hidden">
          <motion.div
            className={progressBarTailwind}
            initial={{ width: 0 }}
            animate={{
              width: inView ? `${score}%` : 0,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          ></motion.div>
        </div>
        {/* Percentage ⬇️ */}
        <div className="text-lg font-semibold mr-5 text-gray-700">{score}%</div>
      </div>
    </div>
  );
};
