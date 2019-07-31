const getAPIData = (event) => {
    return fetch("http://localhost:8088/sales")
    .then(data => data.json())
}