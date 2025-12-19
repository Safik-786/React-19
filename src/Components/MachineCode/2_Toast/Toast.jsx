// Show toast on button click
// Support multiple toast types (success, error, info, warning)
// Auto-dismiss after fixed duration
// Maximum stack limit
// Pause on hover
// Animated entry and exit
// Progress bar synced with duration
// 2️⃣ Decide the Architecture


import React, { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ================= CONFIG ================= */
/**
 * Centralized toast configuration
 * duration   → auto-dismiss time (ms)
 * maxToasts  → maximum toasts shown at once (stack limit)
 */
const TOAST_CONFIG = {
  duration: 4000,
  maxToasts: 3,
};

/* ================= STYLES ================= */
/**
 * Tailwind classes mapped by toast type
 * Each toast uses a different background color
 */
const typeStyles = {
  success: "bg-green-600",
  error: "bg-red-600",
  info: "bg-blue-600",
  warning: "bg-yellow-500 text-black",
};

/* ================= COMPONENT ================= */
export default function ToastDemo() {

  /**
   * State to store active toasts
   * Each toast → { id, message, type }
   */
  const [toasts, setToasts] = useState([]);

  /**
   * useRef is used to store timers without causing re-renders
   * timers.current = { [toastId]: timeoutId }
   */
  const timers = useRef({});

  /**
   * Create and display a toast
   * @param {string} message - Toast message
   * @param {string} type - success | error | info | warning
   */
  const showToast = (message, type) => {
    const id = Date.now(); // unique toast id

    setToasts((prev) => {
      // Enforce stack limit
      if (prev.length >= TOAST_CONFIG.maxToasts) {
        prev.shift(); // remove oldest toast
      }
      return [...prev, { id, message, type }];
    });

    // Start auto-dismiss timer, pass id to uiquly identify the timer 
    startTimer(id);
  };

  /**
   * Starts the auto-dismiss timer for a toast
   */
  const startTimer = (id) => {
    // Store the timer ID and timer reference for the remove the timer, because when user stop the timer still timer is run in the browser.
    timers.current[id] = setTimeout(() => {
      removeToast(id);
    }, TOAST_CONFIG.duration);
  };

  /**
   * Pause auto-dismiss when user hovers on toast
   */
  const pauseTimer = (id) => {
    clearTimeout(timers.current[id]);
  };

  /**
   * Resume auto-dismiss when hover ends
   */
  const resumeTimer = (id) => {
    startTimer(id);
  };

  /**
   * Remove toast manually or after timeout
   */
  const removeToast = useCallback((id) => {
    clearTimeout(timers.current[id]); // clear timer
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <div className="p-8 space-y-6">

      {/* ================= BUTTONS ================= */}
      {/* Each button triggers a different toast type */}
      <div className="flex gap-4">
        <button
          onClick={() => showToast("Success message", "success")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Success
        </button>

        <button
          onClick={() => showToast("Error occurred", "error")}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Error
        </button>

        <button
          onClick={() => showToast("Information toast", "info")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Info
        </button>

        <button
          onClick={() => showToast("Warning alert", "warning")}
          className="px-4 py-2 bg-yellow-500 text-black rounded"
        >
          Warning
        </button>
      </div>

      {/* ================= TOAST CONTAINER ================= */}
      {/* Fixed container positioned at top-right */}
      <div className="fixed top-5 right-5 space-y-3 z-50">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}

              /* Entry animation */
              initial={{ opacity: 0, x: 80 }}

              /* Visible state */
              animate={{ opacity: 1, x: 0 }}

              /* Exit animation */
              exit={{ opacity: 0, x: 80 }}

              transition={{ duration: 0.25 }}

              /* Pause timer on hover */
              onMouseEnter={() => pauseTimer(toast.id)}
              onMouseLeave={() => resumeTimer(toast.id)}

              className={`relative min-w-[260px] px-4 py-3 rounded shadow-lg text-white ${typeStyles[toast.type]}`}
            >
              {/* Toast content */}
              <div className="flex justify-between items-center">
                <span className="text-sm">{toast.message}</span>

                {/* Manual close button */}
                <button
                  onClick={() => removeToast(toast.id)}
                  className="font-bold"
                >
                  ×
                </button>
              </div>

              {/* ================= PROGRESS BAR ================= */}
              {/* Shrinks from full width to zero during duration */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{
                  duration: TOAST_CONFIG.duration / 1000,
                  ease: "linear",
                }}
                className="absolute bottom-0 left-0 h-[3px] bg-white/70"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
