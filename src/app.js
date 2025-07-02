import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


// Declaro los palos y numeros
const palos = ['♦', '♥', '♠', '♣'];
const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Creo la funcion que randomiza los palos y los numeros y crea los divs con innerHtml. 
// despues se le agregan los colores
const generarCarta = () => {

	
	const paloRandomizado = palos[Math.floor(Math.random() * palos.length)];
	const numeroRandomizado = numeros[Math.floor(Math.random() * numeros.length)];

	const headerCarta = document.getElementById('paloSuperior');
	headerCarta.innerHTML = paloRandomizado;

	const cardNumber = document.getElementById('numeroCarta');
	cardNumber.innerHTML = numeroRandomizado

	const footerCarta = document.getElementById('paloInferior');
	footerCarta.innerHTML = paloRandomizado;

	const color = (paloRandomizado === '♦' || paloRandomizado === '♥') ? 'red' : 'black';
	headerCarta.style.color = color;
	footerCarta.style.color = color;
	cardNumber.style.color = color;
}

// Añadimos el listener del boton para generar manuealmente la carta
const botonGeneraCarta = () => {
	const miBoton = document.querySelector('#botonAleatorio');
	miBoton.addEventListener('click', () => {
		generarCarta();
	})
}

// Establecemos las funciones una vez se cargue la pagina para generar automaticamente, manuelmente, y en intervalos de 10s
window.onload = function () {

	generarCarta();
	botonGeneraCarta();
	setInterval(() => {
		generarCarta();
	}, 10000)
};