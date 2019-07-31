getAPIData().then((sales) => {
    for (const sale of sales) {
        let salesPersonData = sale.sales_agent
        const salesPersonFirstName = salesPersonData.first_name
        const salesPersonLastName = salesPersonData.last_name
        const grossProfitList = sale.gross_profit
        
       
        console.log(grossProfitList)
    }
})