export const authService = (url, email, password, method = 'POST') => {
    fetch(url, {
        method,
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(apiResponse => {
            console.log(apiResponse);
        })
        .catch(err => console.log(err));
};
