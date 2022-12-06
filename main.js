fetch('https://dummyjson.com/products').then(res => {
    return res.json();
})
    .then(data => {
        console.log(data.products)
        let placeHolder = document.querySelector("#data-output");
        let out = '';

        for (let product of data.products) {
            out += `
    <tr>
        <td>${product.brand}</td>
        <td>${product.category}</td>
        <td>${product.description}</td>
        <td>${product.discountPercentage}</td>
        <td>${product.id}</td>
        <td>${product.images}</td>
        <td>${product.price}</td>
        <td>${product.rating}</td>
        <td>${product.stock}</td>
        <td>${product.thumbnail}</td>
    </tr>
    `;
        }
        placeHolder.innerHTML = out;
    })
