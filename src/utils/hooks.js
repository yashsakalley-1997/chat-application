export const returnChats = (obj)=>{
    let arr = []
    Object.keys(obj).forEach((elem)=>{
        arr.push({
            "question":obj[elem].question,
            "response":obj[elem].response
        })
    })

    return arr
}


export const returnCity = (str)=>{
    const match = str.match(/"([^"]*)"/);
    return match ? match[1] : null;
}

export const returnWeatherDetails = (object)=>{
    let arr = [];
    for(let key in object){
        if(object[key] && object[key] !== 0){
            arr.push({
                key:key,
                value:object[key]
            })
        }
    }
    return arr;
}

export const returnDate = ()=>{
    const today = new Date();
  
    today.setMonth(today.getMonth() - 1);
  
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
  
    const oneMonthBefore = `${year}-${month}-${day}`;
    return oneMonthBefore;
}