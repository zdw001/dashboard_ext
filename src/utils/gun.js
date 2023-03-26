import GUN from 'gun/gun';
import SEA from 'gun/sea';

const gun = GUN({
    peers: ['https://arcane-sierra-12302.herokuapp.com/gun']
});

const sea = SEA;


let pair = localStorage.getItem('pair');

if (pair) {
    sessionStorage.setItem('pair', pair);
}

let user = gun.user().recall({ sessionStorage: true });

export {
    gun,
    sea,
    user
}