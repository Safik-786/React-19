import React, { useEffect, useRef } from 'react'


// Observer Single Element
function IntersectionObserverComponent() {
    const observeref = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // Entries is an array which gives us the datas
            // console.log(entries)
            entries.forEach((entry) => {
                console.log("entry= ", entry)
                console.log(entry.isIntersecting)
                if (entry.isIntersecting) {
                    console.log(entry.target)

                    entry.target.style.backgroundColor=  "red"
                    console.log("Entries comes to the view...")
                }
            })
        })
        observer.observe(observeref.current)
    }, [])
    return (
        <div>
            <div className="p-50 shadow bg-green-100 m-20">item1</div>
            <div className="p-50 shadow bg-green-100 m-20">item2</div>
            <div ref={observeref} className="p-50 shadow bg-green-100 m-20">item3</div>
            <div className="p-50 shadow bg-green-100 m-20">item4</div>
            <div className="p-50 shadow bg-green-100 m-20">item4</div>
        </div>
    )
}

export default IntersectionObserverComponent


// observer Multiple Element