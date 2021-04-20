import { Fragment } from "react";
import { getReadableDate } from "../data/dateHelper";
import { timeDataMap } from "../data/timeData";


function ReservationBookingInfo(props) {

    return (
        <Fragment>
            <div className="reservation-title">Simply Dumplings - Calgary</div>
            <div>{getReadableDate(props.reserveDate)}</div>
            <div>{timeDataMap.get(props.reserveSelectedTimeSlot)}</div>
            <div>{props.numOfPeopleStr}</div>
        </Fragment>
    );
}

export default ReservationBookingInfo;