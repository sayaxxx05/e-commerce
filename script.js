const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}

const toggleTheme = document.getElementById('toggle-theme');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
}

document.querySelectorAll('.bi-bag-plus').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        showToast('🛍️ Product added to cart!');
    });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.pro');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        products.forEach(product => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

