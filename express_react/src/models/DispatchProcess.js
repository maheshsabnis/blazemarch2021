export class DispatchProcess {
    constructor(){
        this.DispatchRowId = 0;
        this.OrderId = 0;
        this.DispatchedDate = new Date();
        this.DelivaryAgentName = '';
        this.AgentContactNumber = 0;
        this.ActualDeliveryDate = new Date();
        this.DispatchStatus = '';
    }
}