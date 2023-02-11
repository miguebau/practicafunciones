function greet() {
    console.log("hello");

}

let logGreeting = (miParametro) => miParametro();
logGreeting(greet);

let logGreeting1 = (miNombre, miColor) => {
    console.log("hola" + miNombre + "buenos dias! Tu color favorito es " + miColor);
}
logGreeting1("carlos", "azul");