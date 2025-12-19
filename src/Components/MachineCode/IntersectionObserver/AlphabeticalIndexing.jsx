import React, { useEffect, useRef, useState } from 'react'
const indianCities = [
    "Agartala",
    "Agra",
    "Ahmedabad",
    "Aizawl",
    "Ajmer",
    "Akola",
    "Aligarh",
    "Allahabad",
    "Alwar",
    "Amravati",
    "Amritsar",
    "Aurangabad",

    "Ballari",
    "Bareilly",
    "Belagavi",
    "Bengaluru",
    "Bhagalpur",
    "Bhavnagar",
    "Bhopal",
    "Bhubaneswar",
    "Bikaner",
    "Bilaspur",
    "Bokaro",
    "Bulandshahr",

    "Chandigarh",
    "Chennai",
    "Chhindwara",
    "Chittoor",
    "Coimbatore",
    "Cuttack",

    "Darbhanga",
    "Davanagere",
    "Dehradun",
    "Delhi",
    "Dhanbad",
    "Durg",
    "Durgapur",

    "Erode",
    "Eluru",

    "Faridabad",
    "Fatehpur",
    "Firozabad",

    "Gandhinagar",
    "Ghaziabad",
    "Gorakhpur",
    "Guntur",
    "Gurugram",
    "Guwahati",
    "Gwalior",

    "Haldwani",
    "Haridwar",
    "Hisar",
    "Hoshiarpur",
    "Howrah",
    "Hubballi",
    "Hyderabad",

    "Imphal",
    "Indore",
    "Itanagar",

    "Jabalpur",
    "Jaipur",
    "Jalandhar",
    "Jalgaon",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jhansi",
    "Jodhpur",

    "Kadapa",
    "Kakinada",
    "Kalaburagi",
    "Kalyan",
    "Kanpur",
    "Karnal",
    "Kochi",
    "Kolhapur",
    "Kolkata",
    "Kota",

    "Lucknow",
    "Ludhiana",

    "Madurai",
    "Mangaluru",
    "Meerut",
    "Moradabad",
    "Mumbai",
    "Mysuru",

    "Nagpur",
    "Nashik",
    "Noida",

    "Patna",
    "Pune",

    "Raipur",
    "Rajkot",
    "Ranchi",

    "Salem",
    "Siliguri",
    "Surat",

    "Thane",
    "Thiruvananthapuram",
    "Tiruchirappalli",
    "Udaipur",
    "Ujjain",

    "Vadodara",
    "Varanasi",
    "Vijayawada",
    "Visakhapatnam",

    "Warangal",

    "Zirakpur"
];

const alphabet = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z"
];




// useEffect(() => {
//     console.log(itemRef)
// }, [itemRef])

function AlphabeticalIndexing() {

    const [activeLetter, setActiveLetter] = useState("A")


    console.log(activeLetter)

    const itemRef = useRef([])
    console.log(itemRef)


    const handleAlphabetClick = (letter) => {
        setActiveLetter(letter);

        const index = indianCities.findIndex(
            city => city[0].toUpperCase() === letter
        );

        if (index !== -1 && itemRef.current[index]) {
            itemRef.current[index].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let cityName = entry.target.textContent;

                    // console.log("cityName= ", cityName)
                    const firstLetter = String(cityName).split("")[1];
                    // console.log("firstLetter= ", firstLetter)
                    setActiveLetter(firstLetter)
                }
            })
        })

        itemRef.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [])

    return (
        <div className='flex bg-violet-800'>
            <div className='flex flex-col gap-1 fixed right-5'>
                {
                    alphabet.map((letter, index) => {
                        return (
                            <div
                                onClick={() => handleAlphabetClick(letter)}
                                className={`h-5 ${activeLetter.toLowerCase() === letter.toLowerCase() ? "bg-green-400 w-7" : "w-5"}  cursor-pointer text-[8px] bg-green-100 shadow rounded flex justify-center items-center`} key={index}>
                                {
                                    letter
                                }
                            </div>
                        )
                    })
                }
            </div>

            <div className='w-[90%]'>
                {
                    indianCities.map((city, index) => {
                        return (
                            <div

                                ref={(reference) => itemRef.current.push(reference)}
                                key={index} className='p-4 m-4 text-white border rounded shadow '> {city}</div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AlphabeticalIndexing
