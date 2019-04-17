//create event listener for button
document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
    //Create xhr object
    const xhr = new XMLHttpRequest();
    // OPEN (type of request, file name, async (t/f))
    xhr.open('GET', 'customer.json', true);
    xhr.onload = function() {
        // check status, 200=ok
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML = output;
        };
    }
    xhr.send();
}

function loadCustomers(e) {
    //Create xhr object
    const xhr = new XMLHttpRequest();
    // OPEN (type of request, file name, async (t/f))
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function() {
        // check status, 200=ok
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = "";
            customers.forEach(function(customer) {
                //append new customer onto output
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `
            });
            document.getElementById('customers').innerHTML = output;
        };
    }
    xhr.send();
}