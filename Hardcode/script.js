const product = {
  price: 1499000,
  variants: {
    black: { name: 'Black', stock: 10, image: 'images/black-4.png' },
    silver: { name: 'Silver', stock: 8, image: 'images/silver-4.png' }
  }
};

let selectedColor = 'black';
const cart = { black: 0, silver: 0 };

const colorInputs = document.querySelectorAll('input[name="color"]');
const quantityInput = document.getElementById('qtyInput');
const minusButton = document.getElementById('qtyMinus');
const plusButton = document.getElementById('qtyPlus');
const addButton = document.getElementById('addToCartBtn');
const feedback = document.getElementById('actionFeedback');

function formatPrice(price) {
  return 'Rp' + price.toLocaleString('id-ID');
}

function validateQuantity(quantity, stock) {
  if (!Number.isInteger(quantity) || quantity <= 0) {
    return 'Quantity harus berupa bilangan bulat positif.';
  }
  if (quantity > stock) {
    return 'Quantity tidak boleh melebihi stok ' + stock + '.';
  }
  return '';
}

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = 'action-feedback ' + type;
}

function updateSummary() {
  const variant = product.variants[selectedColor];
  const quantity = Number(quantityInput.value);
  const error = validateQuantity(quantity, variant.stock);

  document.getElementById('summaryVariant').textContent = variant.name;
  document.getElementById('quantityError').textContent = error;
  quantityInput.setAttribute('aria-invalid', String(error !== ''));
  minusButton.disabled = quantity <= 1;
  plusButton.disabled = quantity >= variant.stock;
  showFeedback('', '');

  if (error !== '') {
    document.getElementById('summaryQuantity').textContent = 'Tidak valid';
    document.getElementById('selectionSubtotal').textContent = '—';
    return false;
  }

  document.getElementById('summaryQuantity').textContent = quantity;
  document.getElementById('selectionSubtotal').textContent = formatPrice(product.price * quantity);
  return true;
}

function changeVariant(color) {
  selectedColor = color;
  const variant = product.variants[color];
  const image = document.getElementById('productImage');

  document.getElementById('selectedColorName').textContent = variant.name;
  document.getElementById('stockInfo').textContent = variant.stock + ' item tersedia';
  image.src = variant.image;
  image.alt = 'Dynamic M75B ' + variant.name;
  quantityInput.max = variant.stock;
  addButton.setAttribute('aria-label', 'Add Dynamic M75B ' + variant.name + ' to cart');
  updateSummary();
}

function changeQuantity(amount) {
  quantityInput.value = Number(quantityInput.value) + amount;
  updateSummary();
}

function addToCart() {
  if (!updateSummary()) {
    showFeedback('Perbaiki quantity sebelum menambah ke keranjang.', 'error');
    return;
  }

  const variant = product.variants[selectedColor];
  const quantity = Number(quantityInput.value);
  const newQuantity = cart[selectedColor] + quantity;
  const error = validateQuantity(newQuantity, variant.stock);

  if (error !== '') {
    showFeedback('Jumlah ' + variant.name + ' di keranjang akan melebihi stok ' + variant.stock + '.', 'error');
    return;
  }

  cart[selectedColor] = newQuantity;
  document.getElementById('cartBadge').textContent = cart.black + cart.silver;
  showFeedback(quantity + ' item ' + variant.name + ' berhasil ditambahkan ke keranjang.', 'success');
}

for (const input of colorInputs) {
  input.addEventListener('change', function () {
    changeVariant(input.value);
  });
}

quantityInput.addEventListener('input', updateSummary);
plusButton.addEventListener('click', function () {
  changeQuantity(1);
});
minusButton.addEventListener('click', function () {
  changeQuantity(-1);
});
addButton.addEventListener('click', addToCart);

changeVariant(selectedColor);
