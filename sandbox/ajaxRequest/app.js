// const endpoint = 'https://api.airportels.ninja/api/google/makesend/invoice/getDraftList';
const endpoint = 'https://api.airportels.local/api/google/makesend/invoice/publish';
let data = {
    lastInvoiceDatetime: "2020-12-10 07:33:28"
};

postRequest();
function postRequest() {
    fetch(endpoint, {
        method: 'post',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(function (data) {
            // console.log(data.lastInvoiceDatetime);
            // console.log(data.invoiceDraftList);
            // console.log(Object.keys(data.invoiceDraftList[0]).length);
            // console.log('headers', Object.keys(data.invoiceDraftList[0]));
            // let invoices = data.invoiceDraftList.map(function (invoice) {
            //     return Object.values(invoice);
            // });
            // console.log('invoices', Object.values(invoices));
            console.log(data);
        })
        .catch(err => console.log('Error message: ', err));
}