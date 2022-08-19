// step 1: create objects
// step 2: write a display function that will take an object
// step 3: invoke the function

const carObject = {
    vehicle: "Car",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    farePerKilo: 3,
    capacity: 4,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

var boatObject = {
    vehicle: "Car",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    farePerKilo: 3,
    capacity: 4,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

const bikeObject = {
    vehicle: "Bike",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60", 
    farePerKilo: 2,
    capacity: 2,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

const busObject = {
    vehicle: "Bus",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo: 3,
    capacity: 30,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

function displayService(object) {
    const mainSectionElement = document.getElementById('main-section');
    const singleDiv = document.createElement('div');
    singleDiv.innerHTML = `
        <div class="card mt-3  mx-auto" style="max-width: 800px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${object.imageUrl}" class="img-fluid rounded-start h-100" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Transport Mood ${object.vehicle}</h5>
                        <p class="card-text">${object.description}</p>
                        <p class="card-text"><small class="text-muted">Fare per kilo ${object.farePerKilo}</small> <small class="text-muted">Capacity ${object.capacity}</small></p>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='showModal(${JSON.stringify(object)})' data-bs-target="#exampleModal">
                            see details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    mainSectionElement.appendChild(singleDiv);
}

const objArray = [carObject, boatObject, bikeObject, busObject];

for (let i = 0; i < objArray.length; i++) {
    displayService(objArray[i]);
}

function showModal(object) {
    const modalBodyElement = document.getElementById('modal-body');
    modalBodyElement.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
            <img src=${object.imageUrl} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Vehicle Mood : ${object.vehicle}</h5>
                <p class="card-text">${object.description}</p>
                <p class="card-text"><small class="text-muted">Fare per kilo ${object.farePerKilo}</small> <small
                        class="text-muted">Capacity ${object.capacity}</small></p>
                <div class="d-flex flex-column" role="search">
                    <p>Fare: <small class="text-muted" id="fare"></small> </p>
                    <p>tax: <small class="text-muted" id="tax"></small> </p>
                    <p>Total-cost: <small class="text-muted" id="total-cost"></small> </p>
                    <input class="form-control m-2" id="distance-input" type="number" placeholder="Koto kilo jaba?"
                        aria-label="Search" />
                    <input class="form-control m-2" type="number" id="quantity-input" placeholder="koita gari lagbe?"
                        aria-label="Search" />
                    <button class="btn btn-outline-success" id="search-btn" aria-label=" type="submit"
                        onclick='calculateFare(${JSON.stringify(object)})'>submit</button>
                </div>
            </div>
        </div>
    `;
}

function calculateFare(object) {
    const quantity = document.getElementById("quantity-input").value;
    const distance = document.getElementById("distance-input").value;
    const taxElement = document.getElementById("tax");
    const grandTotalElement = document.getElementById("total-cost");
    const fareDiv = document.getElementById("fare");
    const totalAmount = quantity * distance * object.farePerKilo;
    const tax = totalAmount * .15;
    const grandTotal = totalAmount + tax;
    fareDiv.innerHTML = totalAmount;
    taxElement.innerText = tax.toFixed(2);
    grandTotalElement.innerText = grandTotal.toFixed(2);
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchValue = document.getElementById('search-value').value;
    for (let i = 0; i < objArray.length; i++) {
        if (searchValue.toLowerCase() === objArray[i].vehicle.toLowerCase()) {
            document.getElementById('main-section').innerHTML = '';
            displayService(objArray[i]);
        }
    }
});