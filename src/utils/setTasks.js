export const setLocalStorage = (object)=>{
    localStorage.setItem("taskObject",JSON.stringify(object))
}

export const returnLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem("taskObject")) || {}
}