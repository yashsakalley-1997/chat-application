export const returnChats = (obj)=>{
    let arr = []
    Object.keys(obj).forEach((elem)=>{
        arr.push({
            "question":obj[elem].question,
            "resonse":obj[elem].response
        })
    })

    return arr
}
