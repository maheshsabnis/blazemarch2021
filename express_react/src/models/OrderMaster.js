export class OrderMaster {
    constructor(){
        this.OrderId =0;
        this.CustomerRowId = 0;
        this.OrderDate = new Date();
        this.TotalAmount  =0;
        this.ExpectedDeliveryDate = new Date();
        this.ActualDeliveryDate = new Date();
    }
}