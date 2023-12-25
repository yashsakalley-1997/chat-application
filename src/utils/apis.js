
import axios from "axios";
import { max_tokens, model, stream, temperature,messageConfig, apiUrl, weatherApi, newsApi } from "./apiConstants";
import { returnCity } from "./hooks";

export const fetchResponse = async (message)=>{
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

export const fetchWeather = async (message)=>{
  const postData = {
    temperature: temperature,
    messages: [
      messageConfig,
      {
        role: "user",
        content: "Extract and return in double inverted commas the city name from the following statement: "+message
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
    let str = returnCity(jsonData?.choices[0]?.message?.content);
    if(str){
      const weatherData = await getWeather(str);
      return weatherData
    }
    throw "Unable to find weather with the given input";
  }

  catch(err){
    throw "Unable to find weather with the given input";
  }
}

export const fetchNews = async (message)=>{
  const postData = {
    temperature: temperature,
    messages: [
      messageConfig,
      {
        role: "user",
        content:`Extract proper nouns from the following text: ${message} and return each proper noun inside double quotes.`
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
    let str = returnCity(jsonData?.choices[0]?.message?.content);
    if(str){
      const newsData = await getNews(str);
      return newsData?.data?.articles
    }
    throw "Unable to find news articles with the given input";
  }

  catch(err){
    throw "Unable to find news with the given input";
  }
}

export const scheduleTasks = async (message)=>{
  const postData = {
    temperature: temperature,
    messages: [
      messageConfig,
      {
        role: "user",
        content:`Perform Intent recognition and detect if the following message wants us to do something (answer "Yes it is" in double quotes if its true, else "We cant schedule a task with the given input" in case its false) ${message}`
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
    let flag = jsonData?.choices[0]?.message?.content.includes("Yes it is");
    return flag?"Yes":jsonData?.choices[0]?.message?.content;
  }
  catch(err){
    throw "Unable to schedule tasks with the given input";
  }
}


export const getWeather = async (str)=>{
  try{
    const res = await axios.get(weatherApi(str));
    return res?.data?.data?.values
  }
  catch(err){
    throw err
  }
}


export const getNews = async (str)=>{
  try{
    const res = await axios.get(newsApi(str))
    return res
  }
  catch(err){
    throw err;
  }
}