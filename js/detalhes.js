// Lista de produtos
const produtos = [
    { id: 1, nome: "Air Max 95", descricao: "Tênis confortável e estiloso.", preco: 900.00, imagem: "images/image1.jpg" },
    { id: 2, nome: "Adidas Forum Low", descricao: "Visual retrô e conforto.", preco: 750.00, imagem: "images/image2.jpg" },
    { id: 3, nome: "Puma Suede XL", descricao: "Estilo retrô e cabedal premium.", preco: 610.00, imagem: "images/image3.png" }
];

// Pega o ID do URL
function getProdutoId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}

// Mostra os detalhes
function mostrarDetalhes() {
    const id = getProdutoId();
    const produto = produtos.find(p => p.id === id);

    if(!produto){
        document.querySelector(".produto-detalhes .container").innerHTML = "<p>Produto não encontrado!</p>";
        return;
    }

    document.getElementById("produtoImg").src = produto.imagem;
    document.getElementById("produtoNome").textContent = produto.nome;
    document.getElementById("produtoDescricao").textContent = produto.descricao;
    document.getElementById("produtoPreco").textContent = `R$ ${produto.preco.toFixed(2)}`;

    // Adicionar ao carrinho
    document.getElementById("btnComprar").addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const exists = cart.find(item => item.id === produto.id);

        if (exists) {
            exists.quantidade += 1;
        } else {
            cart.push({...produto, quantidade:1});
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Produto adicionado ao carrinho!");
    });
}

window.addEventListener("load", mostrarDetalhes);
