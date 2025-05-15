import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const floatVariants = {
    float: {
      y: [0, -15],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row relative overflow-hidden">
      <motion.div
        className="hero-map absolute inset-0 bg-gradient-to-r from-gray-900/30 to-transparent"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <motion.div
        className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={floatVariants}
          className="absolute left-[-5px] top-[-30px]"
        >
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="w-10 lg:w-[50px] drop-shadow-lg"
          />
        </motion.div>

        <motion.h1
          className="bold-52 lg:bold-88 bg-gradient-to-r from-green-50 to-green-100 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Shivapuri Camping Area Kathmandu
        </motion.h1>

        <motion.p
          className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]"
          variants={itemVariants}
        >
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </motion.p>

        <motion.div
          className="my-11 flex flex-wrap gap-5"
          variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image
                    src="/star.svg"
                    alt="star"
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform"
                  />
                </motion.div>
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col w-full gap-3 sm:flex-row"
          variants={itemVariants}
        >
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
            whileHover={{
              backgroundColor: "#f0fdf4",
              transition: { duration: 0.3 },
            }}
            iconAnimation={{
              rotate: 360,
              transition: { duration: 0.5, repeat: Infinity },
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative flex flex-1 items-start"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 backdrop-blur-lg bg-opacity-90 shadow-2xl">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <motion.div
                whileHover={{ rotate: 90 }}
                className="cursor-pointer"
              >
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </motion.div>
            </div>
            <motion.p
              className="bold-20 text-white mt-2"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            >
              Aguas Calientes
            </motion.p>
          </div>

          <motion.div
            className="flexBetween"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 z-10" />
    </section>
  );
};

export default Hero;
