import AES from 'crypto-js/aes';

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePassword = password => {
    return String(password)
        .match(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        )
}

const generateUuid = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
};

const simpleEncrypt = (str) => {
    return AES.encrypt(str, "superdupersecret123").toString();
}

const simpleDecrypt = (str) => {
    return AES.decrypt(str, "superdupersecret123").toString();
}

const generateRandomLogo = (str) => {
    let hash = 0;
    let color = '#';

    for (let i=0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (let i=0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
    }

    return color;
};


export {
    validateEmail,
    validatePassword,
    generateUuid,
    simpleEncrypt,
    simpleDecrypt,
    generateRandomLogo
}