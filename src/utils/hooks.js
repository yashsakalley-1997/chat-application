
export const returnChats = (obj)=>{
    let arr = []
    Object.keys(obj).forEach((elem)=>{
        arr.push({
            "id":obj[elem].id,
            "question":obj[elem].question,
            "response":obj[elem].response,
            "timeStamp":obj[elem].timeStamp
        })
    })

    return arr
}

export const returnTaskChats = (obj)=>{
    let arr = [];
    Object.keys(obj).forEach((elem)=>{
        arr.push({
            "id":obj[elem].id,
            "question":obj[elem].question,
            "response":obj[elem].response,
            "taskCreated":obj[elem].taskCreated
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

export const noLoadingObject = (obj)=>{
    let output = {};
    for(let key in obj){
        if(obj[key].response!=="Responding..."){
            output[key] = obj[key]
        }
    }
    return output
}

export const returnTasksCreated = (obj)=>{
    let output = [];
    for(let key in obj){
        if(obj[key]?.taskCreated){
            output.push(obj[key]?.taskCreated)
        }
    }
    return output;
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


export const returnCurrentTimestamp = ()=>{
    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = String(currentDateTime.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDateTime.getDate()).padStart(2, '0');
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
}

export const currentTime = ()=>{
    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = String(currentDateTime.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(currentDateTime.getDate()).padStart(2, '0');
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDateTime;
}

export const returnFormattedDate = (inputDateTimeString)=>{
    const inputDate = new Date(inputDateTimeString);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(inputDate.getDate()).padStart(2, '0');
    const hours = String(inputDate.getHours()).padStart(2, '0');
    const minutes = String(inputDate.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDateTime
}