const title = document.querySelector('#title');


const text = '¡Porfavor complete el formulario!';
let index = 0;
async function typeWriter(){

	if(index < text.length){
		title.classList.add('titulo');
		title.innerHTML += text.charAt(index);
		index++;
		await setTimeout(typeWriter,100);	
	}

}
typeWriter();