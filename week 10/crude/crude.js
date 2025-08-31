let products = [];

function displayProducts() {
    const productsList = document.getElementById('products');
    productsList.innerHTML = '';
    products.forEach((product, index) => {
        const productElement = document.createElement('li');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating}</p>
            </div>
            <div class="actions">
                <button onclick="editProduct(${index})">Edit</button>
                <button onclick="deleteProduct(${index})">Delete</button>
            </div>
        `;
        productsList.appendChild(productElement);
    });
}

function addProduct(event) {
    event.preventDefault();
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;
    const rating = document.getElementById('product-rating').value;
    const imageInput = document.getElementById('product-image');
    const image = imageInput.files.length > 0 ? URL.createObjectURL(imageInput.files[0]) : 'default-image.jpg';

    const product = {
        name,
        price,
        description,
        rating,
        image
    };

    products.push(product);
    displayProducts();
    document.getElementById('product-form').reset();
}

function editProduct(index) {
    const product = products[index];
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-rating').value = product.rating;

    const form = document.getElementById('product-form');
    form.onsubmit = function(event) {
        event.preventDefault();
        product.name = document.getElementById('product-name').value;
        product.price = document.getElementById('product-price').value;
        product.description = document.getElementById('product-description').value;
        product.rating = document.getElementById('product-rating').value;
        if (document.getElementById('product-image').files.length > 0) {
            product.image = URL.createObjectURL(document.getElementById('product-image').files[0]);
        }
        displayProducts();
        form.reset();
    };
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

document.getElementById('product-form').addEventListener('submit', addProduct);
displayProducts();