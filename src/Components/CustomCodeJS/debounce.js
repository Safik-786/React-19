function debounce(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer=setTimeout(()=>{
            fn.apply(this, args)
        }, delay)
    }
}

const fetchdata= (query)=>{
    console.log(`fetching data for ${query}`)
}   

const debouce =debounce(fetchdata, 1000)

input.addEventListener("input", debounce(fetchdata,1000))