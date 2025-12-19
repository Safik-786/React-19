// Step-1 create empty array with n number
// step2- render and design the box using input with maxLength=1
// step-3 use onmouseDown Event
// step-4 Ge the Key press, validate number using isNAN()
// step-5 dont setthe existing state array use the new copied array so that virtual dom can recognize
// step-6 next field focus feature, store the referenceinside e useref using index


import { number } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

function Otp({ otpLength = 6, initialotp = "123456" }) {

    const [otpField, setOtpFields] = useState(new Array(otpLength).fill(""))

    // This will store the current reference 
    const inputRef = useRef([])


    console.log(otpField)

    // useEffect(() => {
    //     setOtpFields(initialotp.split(""))
    // }, [initialotp])

    useEffect(() => {
        inputRef.current[0].focus()
    }, [])

    const handleKeyDown = (e, index) => {
        const key = e.key

        console.log(key)
        if (key === "KeyV") {
            console.log("e.clipboard= ", e.clipboard)
            return
        }



        if (key === "ArrowRight") {
            if (index + 1 < otpField.length) {
                inputRef.current[index + 1].focus()
            }
            return
        }
        if (key === "ArrowLeft") {
            if (index > 0) {
                inputRef.current[index - 1].focus()
            }
            return
        }
        if (key === "Backspace") {
            // Empty the current field
            const copyOtpField = [...otpField]
            copyOtpField[index] = ""
            // Move the focus to previous field if exists
            if (index > 0) {
                console.log("index= ", index)
                inputRef.current[index - 1].focus()
            }
            setOtpFields(copyOtpField)
            return
        }
        if (isNaN(key)) {
            if (/^[a-zA-Z]$/.test(key)) {
                // alert("Please enter only number")
                console.log("Please Enter Only number")

                // it's a letter
            }
            return
        }
        // Here copy due to react think that this value remain same so it doesnot rerender
        // What happens here?
        // You modify the same array reference
        // React compares old vs new state using reference equality
        // Since the reference did not change:
        // prevState === nextState // true
        // ➡ React assumes nothing changed
        // ➡ Component may not re-render

        //  What changes?
        // [...otpField] creates a new array reference
        // React now sees:
        // prevState !== nextState // true
        // ➡ React triggers a re-render
        // ➡ UI updates correctly
        const copyOtpField = [...otpField]
        copyOtpField[index] = key

        if (index + 1 < otpField.length) {

            inputRef.current[index + 1].focus()
        }
        setOtpFields(copyOtpField)
    }

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text');
        if (!/^\d+$/.test(pastedText)) return;
        const otp = pastedText.slice(0, otpField.length).split('');
        setOtpFields(otp);
        // otp.forEach((_, i) => {
        //     inputRef.current[i]?.focus();
        // });
    };

    return (
        <div className='border h-[50vh] flex justify-center items-center'>
            {
                otpField.map((fieldValue, index) => {
                    return (
                        <input key={index}
                            ref={(currentInput) => (inputRef.current[index] = currentInput)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={handlePaste}
                            type="text"
                            maxLength={1}
                            value={fieldValue}
                            readOnly
                            className='w-10 h-10 border text-center mx-1' />
                    )
                })
            }

        </div>
    )
}

export default Otp
