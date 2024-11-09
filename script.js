// Data restoran dan harga
const restaurantItems = [
    { name: 'Restoran A', price: 10000, id: 'resto-a' },
    { name: 'Restoran B', price: 20000, id: 'resto-b' },
    { name: 'Restoran C', price: 15000, id: 'resto-c' }
  ];
  
  // Menyimpan keranjang
  let cart = [];
  
  // Menambahkan item ke keranjang
  function addToCart(item) {
    cart.push(item);
    updateCart();
  }
  
  // Mengupdate tampilan keranjang
  function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = ''; // Kosongkan daftar keranjang
  
    if (cart.length === 0) {
      cartList.innerHTML = '<li>Keranjang kosong</li>';
    } else {
      // Tampilkan setiap item yang ada di keranjang
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartList.appendChild(li);
      });
    }
  
    // Update total harga
    updateTotalPrice();
  }
  
  // Menghitung total harga
  function updateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toLocaleString();
  }
  
  // Event listener untuk tombol "Pesan Sekarang"
  document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', (event) => {
      const restaurantId = event.target.parentElement.id;
      const selectedRestaurant = restaurantItems.find(item => item.id === restaurantId);
  
      if (selectedRestaurant) {
        addToCart(selectedRestaurant);
      }
    });
  });
  
  // Event listener untuk tombol checkout
  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Keranjang Anda kosong. Silakan pilih restoran terlebih dahulu.');
    } else {
      alert('Pesanan berhasil diproses. Terima kasih!');
      cart = [];  // Kosongkan keranjang setelah checkout
      updateCart(); // Update tampilan keranjang
    }
  });
  