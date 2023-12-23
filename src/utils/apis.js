
import { max_tokens, model, stream, temperature,messageConfig, apiUrl } from "./apiConstants";

export const fetchResponse = async (message,id)=>{
    const postData = {
      temperature: temperature,
      messages: [
        messageConfig,
        {
          role: "user",
          content: message
        }
      ],
      model: model,
      stream: stream,
      max_tokens: max_tokens
    }
    try{
      const data = await fetch(apiUrl,{
                      method:"POST",
                      headers:{
                        "Content-Type":'application/json'
                      },
                      body:JSON.stringify(postData)
                    })
      const jsonData = await data.json();
      return jsonData
    }
    catch(err){
      throw err
    }
}
