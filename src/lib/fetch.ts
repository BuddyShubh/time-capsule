function SendData(url: string, data: object) {
    return fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

async function GetData(url: string) {
    return await fetch(url, { cache: 'no-store' })
        .then(response => response.json())
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

export { SendData, GetData }