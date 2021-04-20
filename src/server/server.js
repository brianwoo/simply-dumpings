import { getRandomRange } from "../data/utils";

export const submitReservation = (date, time, numOfPeople, firstName, lastName, phone, email, occasion, specialRequest) => {

    // Simulating submit reservation to server.
    return {confirmationNum: getRandomRange(1000000, 9999999)};
}


export const submitCateringInquery = (cateringInquery) => {

    // Simulating submit catering inquery to server.
    console.log("submitCateringInquery Server");
    return true;
}


export const submitContactInquery = (contactInquery) => {

    // Simulating submit contact inquery to server.
    return true;
}