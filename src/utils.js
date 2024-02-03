export function getGeneralData(data) {
    let dates = [];
    let forecast = [];


    for (let i = 0; i < 40; i++) {
        const datetime = data["list"][i]["dt_txt"].split(" ");

        if (dates.includes(datetime[0])) {
            forecast[forecast.length - 1].data.push({
                time: datetime[1].split(":").slice(0, 2).join(":"),
                temp: Math.round(data["list"][i]["main"]["temp"]),
                feelLike: Math.round(data["list"][i]["main"]["feels_like"]),
                pressure: data["list"][i]["main"]["pressure"],
                humidity: data["list"][i]["main"]["humidity"],
                wind: data["list"][i]["wind"]["speed"],
                icon: data["list"][i]["weather"][0]["icon"],
            })


        } else {
            dates.push(datetime[0])
            forecast.push({
                date: formatDate(datetime[0]),
                data: [{
                    time: datetime[1].split(":").slice(0, 2).join(":"),
                    temp: Math.round(data["list"][i]["main"]["temp"]),
                    feelLike: Math.round(data["list"][i]["main"]["feels_like"]),
                    pressure: data["list"][i]["main"]["pressure"],
                    humidity: data["list"][i]["main"]["humidity"],
                    wind: data["list"][i]["wind"]["speed"],
                    icon: data["list"][i]["weather"][0]["icon"],
                }]
            })

        }
    }

    if (forecast.length > 5) {
        forecast.pop();
    }

    for (let i = 0; i < forecast.length; i++) {
        let minTemp = forecast[i]["data"][0]["temp"];
        let maxTemp = forecast[i]["data"][0]["temp"];

        let middleIndex = Math.ceil(forecast[i]["data"].length / 2) - 1;

        for (let j = 1; j < forecast[i]["data"].length; j++) {
            if (forecast[i]["data"][j]["temp"] < minTemp) {
                minTemp = forecast[i]["data"][j]["temp"];
            } else if (forecast[i]["data"][j]["temp"] > maxTemp) {
                maxTemp = forecast[i]["data"][j]["temp"];
            }
        }

        forecast[i]["minTemp"] = minTemp;
        forecast[i]["maxTemp"] = maxTemp;
        forecast[i]["icon"] = forecast[i]["data"][middleIndex]["icon"];
        forecast[i]["index"] = middleIndex
    }


    return forecast;
}


function formatDate(inputDate) {
    const options = { month: 'long', day: 'numeric' };
    const dateObj = new Date(inputDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    return formattedDate;
}