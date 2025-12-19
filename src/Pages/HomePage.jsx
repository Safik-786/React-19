import React from 'react';
import { motion } from 'framer-motion';

function HomePage() {
    return (
        <>
            <div id='banner' className='h-screen bg-red-50 flex items-center justify-center text-4xl'>
                Hero Banner
            </div>

            <div id='cta' className='h-screen  bg-green-50 flex  gap-10 items-center justify-center text-4xl'>
                CTA Section

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }} 
                    className="w-64 h-64 mt-10 bg-black text-white flex items-center justify-center rounded-xl"
                >
                    Animated Box
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }} 
                    className="w-64 h-64 mt-10 bg-black text-white flex items-center justify-center rounded-xl"
                >
                    Animated Box
                </motion.div>
            </div>

            <div id='testimonial' className='h-screen bg-orange-50 flex items-center justify-center text-4xl'>
                Testimonial
            </div>
        </>
    );
}

export default HomePage;
