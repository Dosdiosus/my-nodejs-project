document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
    const product = this.getAttribute('data-product');
    const price = this.getAttribute('data-price');
    console.log(product + " " + price);
    const productModal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    productModal.hide();
    });
    });
    