import { getRandomRange } from "./utils";

export const timeDataMap = new Map()
                    .set("1700", "5:00pm")
                    .set("1730", "5:30pm")
                    .set("1800", "6:00pm")
                    .set("1830", "6:30pm")
                    .set("1900", "7:00pm")
                    .set("1930", "7:30pm")
                    .set("2000", "8:00pm")
                    .set("2030", "8:30pm")
                    .set("2100", "9:00pm")
                    .set("2130", "9:30pm")
                    .set("2200", "10:00pm")
                    .set("2230", "10:30pm")
                    .set("2300", "11:00pm")
                    .set("2330", "11:30pm");


function generateOneTimeData() {
    let hours = getRandomRange(16, 24);
    
    let minutesDigit = getRandomRange(0, 2);
    let minutes = ""
    if (minutesDigit === 0)
        minutes = "00";
    else
        minutes = "30";

    return hours + minutes;
}



 export const randomTimeData = () => {

    // Make sure we don't have duplicate
    let randomTimeSet = new Set([generateOneTimeData(), 
                                 generateOneTimeData(), 
                                 generateOneTimeData(),
                                 generateOneTimeData(),
                                 generateOneTimeData()]);

    // sort and remove undefined ones.                                 
    let randomTimeArray = [...randomTimeSet].sort().map((eachTime) => {
        return {id: eachTime, time: timeDataMap.get(eachTime)};
    })
    .filter((value) => {
        return (typeof value.time !== 'undefined');
    })

    return randomTimeArray;
 }