const getAPIData = (event) => {
    return fetch("https://github.com/nashville-software-school/the-vault/blob/master/sales.json")
    .then(data => data.json())
}