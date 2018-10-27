'use strict';

var SERVER = {
    APP_NAME: 'Ticket Reservation',
    PORTS: {
        LOCAL: 3000
    },
    HOST: '127.0.0.1'
};

var ENV = (process.env.NODE_ENV || 'LOCAL').trim();

var seatPrice;

var seatingStructure = {
    seats: {
        right: 'right',
        left: 'left',
        center: 'center',
        balcony: 'balcony'
    },
    seatNumbers: {
        right: ['A1', 'A2', 'A3', 'A4', 'A5'],
        center: ['A6', 'A7', 'A8', 'A9', 'A10'],
        left: ['A11', 'A12', 'A13', 'A14', 'A15'],
        balcony: ['AA1', 'BB2', 'CC3', 'DD4', 'EE5']
    },
    seatPrice :  seatPrice
};

if (seatingStructure.seats == 'right') {
    seatPrice = 10;
} else if (seatingStructure == 'left') {
    seatPrice = 10;
} else if (seatingStructure == 'center') {
    seatPrice = 5;
} else if (seatingStructure == 'balcony') {
    seatPrice = 15;
}

module.exports = {
    SERVER,
    seatingStructure
};