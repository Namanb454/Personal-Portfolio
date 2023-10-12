import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = () => {
    return (
        <a href='#contact'>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="gradient-border relative lg:text-lg text-sm lg:w-40 w-20 h-10 bg-black/[0.8] tracking-widest font-semibold hover:bg-neutral"
            >
                Hire Me
            </motion.button>
        </a>
    );
};

export default AnimatedButton;
