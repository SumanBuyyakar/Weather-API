// let key= "95bcedf1c7c20be2aca17456a78ba7c1";
// let api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let fetchData=async()=>{
        let key= "95bcedf1c7c20be2aca17456a78ba7c1";
        let place=document.getElementById("location").value
        let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput=await data.json();
        console.log(finalOutput)

        let tempValue=document.querySelector(".temp_value")
        let humidValue=document.querySelector(".humid_value")
        let weatherCondition=document.querySelector("#weather_condition")

        let finalTemp=Math.round(finalOutput.main.temp-273)
        let finalHumid=(finalOutput.main.humidity)
        let finalCondition=(finalOutput.weather[0].main)

        tempValue.innerHTML=`${finalTemp}<sup>o</sup>C`
        humidValue.innerHTML=`${finalHumid} KMPH`
        weatherCondition.innerHTML=`${finalCondition}`

        let weatherImage=document.querySelector("#image")
        let background=document.querySelector("#main_container")

        switch(finalCondition){
            case "Haze":
                weatherImage.src='./ASSETS/haze.webp';
                background.style.backgroundImage="url(./ASSETS/background_haze.gif)"
                break;
            case "Rain":
                weatherImage.src='./ASSETS/rain.jpg';
                background.style.backgroundImage="url(./ASSETS/background_rain.gif)"
                break;
            case "Dust":
                weatherImage.src='./ASSETS/dust.png';
                background.style.backgroundImage="url(./ASSETS/background_dusty.gif)"
                break;  
            case "Clouds":
                weatherImage.src='./ASSETS/cloudy.jpg';
                background.style.backgroundImage="url(./ASSETS/background_clouds.gif)"
                break; 
            case "Fog":
                weatherImage.src='./ASSETS/fog.webp'
                background.style.backgroundImage="url(./ASSETS/background_fog.gif)"
                break;
            case "mist":
                weatherImage.src='./ASSETS/mist.jpg'
                background.style.backgroundImage="url(./ASSETS/background_mist.gif)"   
                break;
            case "Sunny":
                weatherImage.src='./ASSETS/sunny.jpg';
                background.style.backgroundImage="url(./ASSETS/background_sunny.gif)"
                break;
            case "Snow":
                weatherImage.src='./ASSETS/snow.webp';
                background.style.backgroundImage="url(./ASSETS/background_snow.gif)"
                break;

            case "default":
                weatherImage.src='./ASSETS/weather image.png'
                background.style.backgroundImage="url(./ASSETS/background_weather.gif)"
                break;          

        }
        
    }
    fetchData()

})