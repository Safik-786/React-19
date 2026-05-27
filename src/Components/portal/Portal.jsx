import React from 'react'
import { createPortal } from "react-dom";
import { motion } from 'framer-motion';
function Portal({ children, setIsOpen }) {
    const portalRoot = document.getElementById("portal");
    return createPortal(
        <>
            <div className='fixed inset-0 bg-black/70  flex justify-end items-center'>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.4, ease: "linear" }}
                    className='w-lg bg-white relative shadow p-10 rounded-2xl h-screen'
                >
                    <div onClick={() => setIsOpen(false)} className='absolute cursor-pointer hover:text-red-500 top-0 text-[40px] rotate-45 right-2'>
                        +
                    </div>
                    {children}
                </motion.div>
            </div>
            
        </>
        , portalRoot);
}

export default Portal;