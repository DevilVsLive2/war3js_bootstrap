import { GetIssuedOrderId, GetOrderPointX, GetOrderPointLoc, GetOrderPointY, Location } from "../../utils/common.js";
import { TriggerUnitEvent } from "./Event.js";

export class TriggerUnitEventIssuedPointOrder extends TriggerUnitEvent<"issuedPointOrder"> {
    readonly issuedOrderId: number;
    readonly orderPointX: number;
    readonly orderPointY: number;
    readonly orderPointLoc: Location;
    constructor() {
        super("issuedPointOrder");
        this.issuedOrderId = GetIssuedOrderId();
        this.orderPointX = GetOrderPointX();
        this.orderPointY = GetOrderPointY();
        this.orderPointLoc = GetOrderPointLoc();
    }
}