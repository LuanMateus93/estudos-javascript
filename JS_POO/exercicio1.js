/* Treinando a Criação de Classes
um atributo fullname, atribuível na instanciação
um atributo email, atribuível na instanciação
um atributo password, atribuível na instanciação
um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não*/

class Pessoa {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password) {
        if (this.email == email && this.password == password) {
            console.log("Usuário logado com sucesso");
        }else{
            console.log("Usuário ou senha incorreto");
        }
    }
}

const pessoa1 = new Pessoa("Luan Mateus Cenci Alchieri", 'email@dominio.com', 12345678);
// console.log(pessoa1);
pessoa1.login('email@dominio.com', 12345678);

const pessoa2 = new Pessoa("João", 'email1@dominio.com', 123456);
// console.log(pessoa2);
pessoa2.login('email@dominio.com', 12345678);

/*============================================================================================= 

um atributo name, atribuível na instanciação
um atributo description, atribuível na instanciação
um atributo price, atribuível na instanciação
um atributo inStock, inicializado sempre em 0
um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado */

class Produto {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;  
        this.inStock = 0; 
    }

    addToStock(quantity) {
        this.inStock += quantity;
    }

    calculateDiscount(discountPercent) {
        if (discountPercent < 0 || discountPercent > 100) {
            return "Erro: O valor da porcentagem deve ser entre 0 e 100";
        }else{
            let discount = this.price - (this.price * (discountPercent / 100));
            return Number(discount.toFixed(2));
        }
    }
}

const produto1 = new Produto("Whey Protein", "Wey Protein Isolado para alta performance", 56.89);
produto1.addToStock(30);
console.log(produto1.calculateDiscount(-3));
console.log(produto1.calculateDiscount(200));
console.log(produto1.calculateDiscount(40));
console.log(produto1.calculateDiscount(40.56));
console.log(produto1);