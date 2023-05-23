//TODO: CALL
const information = {
  firstName: 'Ankush',
  lastName: 'Thakur',
  printName: function (state, hometown) {
    console.log(this.firstName + ' ' + this.lastName + ' is From ' + state + ', ' + hometown);
  },
};

information.printName('Himachal Pradesh', 'Shimla');

let info2 = {
  firstName: 'Hitesh',
  lastName: 'Choudhary Sir',
};

// Function Borrowing
information.printName.call(info2, 'Jaipur', 'Rajasthan');

// TODO: APPLY
information.printName.apply(info2, ['India', 'India']);

//TODO: BIND
let printInfo = information.printName.bind(info2, 'Himachal Pradesh', 'Himachal Pradesh');
printInfo();
