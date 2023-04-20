function getMeData(){
    return fetch('http://127.0.0.1:3001/me').then(res=>res.json());
}

export {getMeData};