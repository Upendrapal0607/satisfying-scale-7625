
var data = [];

async function fetchData() {
    try {
        let response = await fetch('https://json-mock-vmzp.onrender.com/data');
        let jsonData = await response.json();
        this.data = jsonData;
        console.log("jdata", jsonData);
        renderDataTable(jsonData);
    } catch (error) {
        console.log(error);
    }
}

function renderDataTable(data) {
    let tableBody = document.getElementById('data-table-body');
    let rows = data.map(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td> <img src="${item.avatar[0]}" width="100" height="100"></td>
            <td>${item.name}</td>
            <td>${item.size}</td>
            <td>${item.price}</td>
            <td>${item.categories}</td>
            <td>${item.discount}</td>
            <td>
                <button id="deletebtn" onclick="deleteData(${item.id})">Delete</button>
            </td>
        `;
        return row;
    });
    tableBody.innerHTML = "";
    tableBody.append(...rows);
}

function showAddModal() {
    document.getElementById('add-modal').style.display = 'block';
}

function closeAddModal() {
    document.getElementById('add-modal').style.display = 'none';
}

async function addData(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let categories = document.getElementById('categories').value;
    let discount = document.getElementById('discount').value;
    let avatar = document.getElementById('avatar').value;
    let rate = document.getElementById('rate').value;
    let newItem = {
        id: data.length + 1,
        name: name,
        size: size,
        price: price,
        categories: categories,
        discount: discount,
        avatar: [avatar],
        rating: {
            rate: rate,
        }
    };
    data.push(newItem)
    try {
        let response = await fetch('https://json-mock-vmzp.onrender.com/data',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newItem)
        });
        if(!response.ok){
            throw new Error('Failed to add item to API');
        }
        renderDataTable(data);
        closeAddModal();
    } catch(error) {
        console.error(error);
    }
}

// function showAddModal() {
//     document.getElementById('add-modal').style.display = 'block';
// }

// function closeAddModal() {
//     document.getElementById('add-modal').style.display = 'none';
// }

