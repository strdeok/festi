import { motion } from "framer-motion";

export default function PolaroidSection() {
  const images = [
    "/images/sample image (1).jpg",
    "/images/sample image (2).jpg",
    "/images/sample image (3).jpg",
    "/images/sample image (4).jpg",
    "/images/sample image (5).jpg",
    "/images/sample image (6).jpg",
    "/images/sample image (7).jpg",
    "/images/sample image (8).jpg",
    "/images/sample image (9).jpg",
  ];

  const loopedImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-screen h-64 relative">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }} // 왼쪽으로 이동
        transition={{
          ease: "linear",
          duration: 20, // 이동 속도 조절 (작을수록 빠름)
          repeat: Infinity, // 무한 반복
        }}
      >
        {loopedImages.map((img, index) => {
          const random_boolean = Math.random() < 0.5;
          return (
            <div
              key={index}
              className={`w-28 h-36 relative flex justify-center pt-2 shadow-lg mx-3 bg-white
              ${index % 2 === 1 ? "rotate-12 mt-16" : "-rotate-12"}
              `}
            >
              <div
                className={`rounded-full ${
                  random_boolean ? "bg-yellow" : "bg-navy"
                } size-3 absolute z-10`}
              ></div>
              <img
                src={img}
                alt={img}
                className="w-24 h-28 object-fill relative top-1"
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
