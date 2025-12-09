let res = fetch('https://jsonplaceholder.typicode.com/users');
    //console.log(res); 
    res.then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log("Error:", error);
    });

    