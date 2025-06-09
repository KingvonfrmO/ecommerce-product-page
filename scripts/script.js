document.addEventListener('DOMContentLoaded', function(){
    const cart_icon = document.getElementById('cart-icon');
    const cart_window = document.getElementById('cart-window');
    const cart_content = document.getElementById('cart-content');
    const add_cart = document.querySelector('.add-to-cart');
    const qnt_val = document.querySelector('.qty-value');
    
    let cart_quantity = 0;

    cart_icon.addEventListener('click', function(){
        cart_window.classList.toggle('active');
    });

    add_cart.addEventListener('click', function(){
        const quantity = parseInt(qnt_val.textContent, 10);
        if (quantity > 0){
            cart_quantity = quantity;
            update_cart();
        }
    });

    function update_cart(){
        if (cart_quantity === 0){
            cart_content.innerHTML = `<p>Your cart is empty</p>`;
            return;
        }
        const price = 125;
        const total = price * cart_quantity;
        cart_content.innerHTML = `
            <div class="cart-item" style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
                <img src="images/image-product-1-thumbnail.jpg" alt="product" style="width: 50px; border-radius: 8px;">
                <div style="flex:1;">
                <div style="font-size: 14px; color: #68707d;">Fall Limited Edition Sneakers</div>
                <div style="font-size: 14px; color: #68707d;">
                    $${price.toFixed(2)} x ${cart_quantity} <b style="color: #222;">$${total.toFixed(2)}</b>
                </div>
                </div>
                <img src="images/icon-delete.svg" alt="delete" id="delete-cart-item" style="width: 16px; cursor: pointer;">
            </div>
            <button style="width:100%;background:hsl(26,100%,55%);color:#fff;font-weight:700;padding:16px 0;border:none;border-radius:8px;cursor:pointer;font-size:16px;">
                Checkout
            </button>
        `;
        document.getElementById('delete-cart-item').onclick = function() {
            cart_quantity = 0;
            update_cart();
        };
    }

    document.querySelectorAll('.qty-btn').forEach((btn, i) => {
        btn.addEventListener('click', function(){
            let current = parseInt(qnt_val.textContent, 10);
            if (btn.textContent === '-' && current > 0){
                current --;
            }
            if (btn.textContent === '+'){
                current ++;
            }
            qnt_val.textContent = current;
        });
    });

    document.querySelectorAll('.thumb').forEach((thumb, i) => {
        thumb.addEventListener('click', function() {
            document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            const mainImage = document.querySelector('.product-image-1');
            const images = [
                'images/image-product-1.jpg',
                'images/image-product-2.jpg',
                'images/image-product-3.jpg',
                'images/image-product-4.jpg'
            ];
            if (mainImage) {
                mainImage.src = images[i];
            }
        });
    });

    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const closeNav = document.getElementById('close-nav');

    if (hamburger && mobileNav && closeNav) {
    hamburger.addEventListener('click', () => {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeNav.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    mobileNav.addEventListener('click', (e) => {
        if (e.target === mobileNav) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
        }
    });
    
    const galleryImage = document.querySelector('.product-image-1');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const lightboxThumbs = document.querySelectorAll('.lightbox-thumb');

    const images = [
      'images/image-product-1.jpg',
      'images/image-product-2.jpg',
      'images/image-product-3.jpg',
      'images/image-product-4.jpg'
    ];

    let currentIndex = 0;

    function showLightbox(index) {
      currentIndex = index;
      lightboxImage.src = images[currentIndex];
      lightboxThumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentIndex);
      });
      lightboxOverlay.style.display = 'flex';
    }

    if (galleryImage) {
      galleryImage.addEventListener('click', () => showLightbox(0));
    }
    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => lightboxOverlay.style.display = 'none');
    }
    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showLightbox(currentIndex);
      });
    }
    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showLightbox(currentIndex);
      });
    }
    lightboxThumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => showLightbox(i));
    });

    if (lightboxOverlay) {
      lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) lightboxOverlay.style.display = 'none';
      });
    }
  }
});