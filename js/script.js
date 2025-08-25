// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animação dos links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Navbar Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 0);
});

// Carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.prev')?.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.querySelector('.next')?.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Auto-advance carousel
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Produtos - Galeria
const produtos = [
    {
        nome: "Nike Air Max 1 Patta Black",
        descricao: "Clássico moderno com conforto e estilo.",
        preco: "R$ 1.550,00",
        imagem: "images/1.png"
    },
    {
        nome: "Adidas Ozrah x Jeremy Scott (Blue Hair)",
        descricao: "Design ousado e cores vibrantes.",
        preco: "R$ 1.350,00",
        imagem: "images/2.png"
    },
    {
        nome: "Nike Crater Impact",
        descricao: "Tênis sustentável feito com materiais reciclados.",
        preco: "R$ 550,00",
        imagem: "images/3.png"
    },
    {
        nome: "Air Jordan 1 Retro High OG 'Chicago'",
        descricao: "Edição icônica com design atemporal.",
        preco: "R$ 2.200,00",
        imagem: "images/4.png"
    },
    {
        nome: "Adidas Ultraboost 22",
        descricao: "Tecnologia de amortecimento para máximo conforto.",
        preco: "R$ 799,00",
        imagem: "images/image5.png"
    },
    {
        nome: "Nike court Vision Low",
        descricao: "Estilo clássico para uso diário.",
        preco: "R$ 349,00",
        imagem: "images/image6.png"
    },
    {
        nome: "Nike ZoomX Vaporfly Next%",
        descricao: "Desempenho de corrida de elite.",
        preco: "R$ 1.999,00",
        imagem: "images/image7.png"
    }
    
];  

const grid = document.getElementById("produtosGrid");

if (grid) {
    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("produto-item");
        card.innerHTML = `
            <div class="produto-img">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <div class="produto-overlay">
                    <button class="btn">Ver Detalhes</button>
                </div>
            </div>
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <span class="price">${produto.preco}</span>
        `;
        grid.appendChild(card);
    });
}

// Efeito hover nas camisetas
const produtoItems = document.querySelectorAll('.produto-item');

produtoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const img = item.querySelector('img');
        img.style.transform = 'scale(1.1)';
        item.querySelector('.produto-overlay').style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('img');
        img.style.transform = 'scale(1)';
        item.querySelector('.produto-overlay').style.opacity = '0';
    });
});

// Animação ao rolar a página
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.destaque-item, .produto-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Definir estilos iniciais para a animação
document.querySelectorAll('.destaque-item, .produto-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
function verDetalhes(id) {
    window.location.href = `detalhes.html?id=${id}`;
}
