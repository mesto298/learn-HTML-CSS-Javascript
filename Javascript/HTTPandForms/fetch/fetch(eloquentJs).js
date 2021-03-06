fetch("example/data.txt")
    .then(response => { 
        console.log(response.status); // → 200 
        console.log(response.headers.get("Content-Type")); // → text/plain 
    });

fetch("example/data.txt") 
    .then(resp => resp.text()) 
    .then(text => console.log(text)); 
// → This is the content of data.txt

fetch("example/data.txt", {method: "DELETE"})
    .then(resp => { 
        console.log(resp.status); // → 405 
    });

fetch("example/data.txt", {headers: {Range: "bytes=8-19"}}) 
    .then(resp => resp.text()) 
    .then(console.log); 
// → the content



