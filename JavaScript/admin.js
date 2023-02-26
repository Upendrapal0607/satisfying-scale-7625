
var data = [];
var changeTitle = document.getElementById("add-edit");
document.getElementById('add-modal').style.display = 'none';
let formData = document.getElementById("add-form");
async function fetchData() {
    try {
        let response = await fetch('https://beautify-com-repo.onrender.com/data');
        let jsonData = await response.json();
        this.data = jsonData;
        renderDataTable(jsonData);
    } catch (error) {
        console.log(error);
    }
}

function renderDataTable(data) {
    let tableBody = document.getElementById('data-table-body');
    let rows = data.map((item, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td> <img src="${item.avatar[0]}" width="100" height="100"></td>
            <td>${item.name}</td>
            <td>${item.size}</td>
            <td>Rs.${item.price}</td>
            <td>${item.categories}</td>
            <td>${item.discount}%</td>
            <td>
                <button id="deletebtn" onclick="deleteData(${item.id})">Delete</button>
             </td>
            <td>
                <button id="editbtn" onclick="showEditModal(${item.id})">Edit</button>
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

async function addData() {
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let categories = document.getElementById('categories').value;
    let discount = document.getElementById('discount').value;
    let avatar = document.getElementById('avatar').value;
    let rate = document.getElementById('rate').value;
    const d = new Date().getTime();
    const rn = Math.floor((Math.random() * 100))
    let id = d + "" + rn;

    let newItem = {
        id: id,
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
    // console.log("newdata",newItem)
    data.push(newItem);

    try {
        let response = await fetch('https://beautify-com-repo.onrender.com/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem)
        });
        if (!response.ok) {
            throw new Error('Failed to add item to API');
        }
        fetchData()
        closeAddModal();
        formData.reset();
 
    } catch (error) {
        console.log(error);
    }
}
// submitting form.......
document.getElementById("submit").addEventListener("click", () => {
    addData()
})

async function deleteData(id) {
    // Find item with matching id
    // console.log("id", data);
    alert('Do You Want To Delete This Product')
    let item = data.find(i => i.id === id);
    // Remove item from data array
    data.splice(data.indexOf(item), 1);

    try {
        // Remove item from API
        let response = await fetch(`https://beautify-com-repo.onrender.com/data/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
            // body: JSON.stringify(item)
        });
        if (!response.ok) {
            throw new Error('Failed to delete item from API');
        }
        // Remove item from table
        let tableRow = document.querySelector(`#data-table-body tr[data-id="${id}"]`);
        tableRow.remove();

        // showAddModal()

    } catch (error) {
        console.error(error);
    }

    fetchData()
    closeAddModal();
}

function showEditModal(id) {
    // console.log("dataid",id)
    // console.log("dataa=",data);
    let item = data.find(ele => ele.id == id)
    //  console.log("ele.id === id",id, ele.id === id)
    //  console.log("item",item);

    changeTitle.innerText = "Edit Item"

    // Populate form fields with item data
    document.getElementById('name').value = item.name;
    document.getElementById('size').value = item.size;
    document.getElementById('price').value = item.price;
    document.getElementById('categories').value = item.categories;
    document.getElementById('discount').value = item.discount;
    document.getElementById('avatar').value = item.avatar[0];
    document.getElementById('rate').value = item.rating.rate;
    document.getElementById('id').value = item.id;
}

function showAddModal() {
    let modal = document.getElementById('add-modal');
    modal.style.display = 'block';
}

function closeEditModal() {
    let modal = document.getElementById('edit-modal');
    modal.style.display = 'none';
}

function editData() {
    // Get form data
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let categories = document.getElementById('categories').value;
    let discount = document.getElementById('discount').value;
    let avatar = document.getElementById('avatar').value;
    let rate = document.getElementById('rate').value;
    let id = document.getElementById('id').value;
    // console.log("id=",id);

    // Find item with matching id
    // console.log("dataa=",data);

    let item = data.find(i => i.id == id);
    // console.log("item", item)
    // Update item data
    item.name = name;
    item.size = size;
    item.price = price;
    item.categories = categories;
    item.discount = discount;
    item.avatar = [avatar];
    item.rating.rate = rate;

    // Update item in API
    fetch(`https://beautify-com-repo.onrender.com/data/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update item in API');
            }

            // Close the modal
            // window.location.reload();
            fetchData()
            closeEditModal();
            formData.reset();
        })
        .catch((error) => {
            console.error(error)
        });

    changeTitle.innerText = "Add Item"

}


// editing form......
document.getElementById("edit").addEventListener("click", () => {
    editData()
})







