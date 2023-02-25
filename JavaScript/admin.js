
let data = [];

async function fetchData() {
    try{
        let response = await fetch('https://beautify-com-repo.onrender.com/data');
        let jsonData = await response.json();
        this.data = jsonData;
        renderDataTable(jsonData);
    }catch (error) {
        console.log(error);
    }
}

function renderDataTable(data) {
    let tableBody = document.getElementById('data-table-body');
    let rows = data.map((item,index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${index+1}</td>
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

async function addData() {
    let name = document.getElementById('name').value;
    let size = document.getElementById('size').value;
    let price = document.getElementById('price').value;
    let categories = document.getElementById('categories').value;
    let discount = document.getElementById('discount').value;
    let avatar = document.getElementById('avatar').value;
    let rate = document.getElementById('rate').value;
    const d = new Date().getTime();
    const rn = Math.floor((Math.random()*100))
    let id = d+""+rn;

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
    }catch (error) {
        console.log(error);
    }
}

document.getElementById("submit").addEventListener("click", ()=>{
    addData()
})

async function deleteData(id) {
    alert('Do You Want To Delete Product')
    // Find item with matching id
    // console.log("id",id);
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
      fetchData()
    // showEditModal(id)
     
    } catch (error) {
      console.error(error);
    }
  }
  



function showEditModal(id) {
    // Find item with matching id
    let item = data.find(i => i.id === id);
    //  console.log(data)
    // Populate form fields with item data
    document.getElementById('name').value = item.name;
    document.getElementById('size').value = item.size;
    document.getElementById('price').value = item.price;
    document.getElementById('categories').value = item.categories;
    document.getElementById('discount').value = item.discount;
    document.getElementById('avatar').value = item.avatar[0];
    document.getElementById('rate').value = item.rating.rate;
}
function showAddModal() {
let modal = document.getElementById('add-modal');
modal.style.display = 'block';
}

function closeEditModal() {
    let modal = document.getElementById('edit-modal');
    modal.style.display = 'none';
}









