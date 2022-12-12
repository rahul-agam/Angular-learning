interface Address {
    street : string ;
    city? : string ; // to make it OPTIONAL using ?
    state : string ;
    pin : string ;
};

let addr : Address = {street : "MCH", state : "TEL", pin : "500060"};
 