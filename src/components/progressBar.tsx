import { motion, useScroll, useTransform } from "framer-motion";

function ProgressBar() {
  let { scrollYProgress } = useScroll();
  let width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        style={{ width }}
        className="fixed w-full h-3 bg-red-500"
      ></motion.div>
    </>
  );
}

export default ProgressBar;
