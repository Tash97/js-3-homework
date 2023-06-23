


class parking_garage{
    constructor(tickets, parkingSpaces){
        this.tickets = tickets;
        this.parkingSpaces = parkingSpaces;
        this.paid = false;
        this.cost = 5;
        this.hasTicket = false;
    }
    taketicket(){
        this.tickets.shift();
        this.parkingSpaces.shift();
        this.hasTicket = true;
        this.paid = false;
        return 'ticket recieved!';
    }
    payForParking(){
        if(this.hasTicket == true){
            if(this.paid != true){
                let prompts = prompt(`cost for parking is $${this.cost}`);
                this.cost -= prompts;
                if(this.cost == 0){
                    this.paid = true;
                    return 'ticket has been paid, you have 15 minute to leave garage';
                } else if(this.cost < 0){
                    this.cost = 0;
                    this.paid = true;
                    this.payForParking();
                    return "you overpayed and we're keeping it, thank you :)"
                } else{
                    this.payForParking();
                    return 'ticket has been paid, you have 15 minute to leave garage';
                }
            } else{
                return 'you already paid!';
            }
        } else{
            return 'you dont have a ticket to pay for!';
        }
    }
    leaveGarage(){
        if(this.hasTicket == true){
            if(this.paid == true){
                this.tickets.push('ticket');
                this.parkingSpaces.push('spot');
                this.hasTicket = false;
                return 'Thank you, have a nice day!';

            } else{
                let promp = prompt(`cost for parking is $${this.cost}`);
                this.cost -= promp;
                if(this.cost == 0){
                    this.paid = true;
                    this.leaveGarage();
                    return 'Thank you, have a nice day!';
                } else if(this.cost < 0){
                    this.cost = 0;
                    this.paid = true;
                    this.leaveGarage();
                    return "you overpayed and we're keeping it, thank you :)"
                } else{
                    this.leaveGarage();
                    return 'thank you, have a nice day!';
                }
            }
        } else {
            return 'you dont have a ticket yet!';
        }
    }
}
let currentTicket = new parking_garage(['ticket','ticket','ticket','ticket','ticket'], ['spot','spot','spot','spot','spot']);
