const formulario = document.querySelector('#loginForm');
const formulario2 = document.querySelector('#registerForm');	

formulario.addEventListener('submit',(e)=>{
	e.preventDefault();
	const data = new FormData(formulario);

	const codigo = data.get('codigo');
	const asignatura = data.get('asignatura');
	const horasT = data.get('horasT');
	const horasP = data.get('horasP');
	const horasS = data.get('horasS');
	const uc = data.get('uc');
	const prelaciones = data.get('prelaciones');

	fetch('/create',{
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({codigo,asignatura,horasT,horasP,horasS,uc,prelaciones})
	})
	.then(res=>res.json())
	.then(res=>{
		if(res.response){
			Swal.fire('¡Registro creado correctamente!')
                .then(()=>{
                window.location.href='/list';         
                });
		}else{
			Swal.fire('¡No se pudo completar el registro!')
                .then(()=>{
                window.location.href='/create';         
                });
		}
	})

});
/////////////////////////////////////////////////////////////////////////////////////
formulario2.addEventListener('submit',(e)=>{
	e.preventDefault();
	const data = new FormData(formulario2);

	const codigo = data.get('codigo');
	const asignatura = data.get('asignatura');
	const pensumId = data.get('pensumId');
	
	fetch('/createPrelacion',{
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({codigo,asignatura,pensumId})
	})
	.then(res=>res.json())
	.then(res=>{
		if(res.response){
			Swal.fire('¡Registro creado correctamente!')
                .then(()=>{
                window.location.href='/prelaciones';         
                });
		}else{
			Swal.fire('¡No se pudo completar el registro!')
                .then(()=>{
                window.location.href='/create';         
                });
		}
	})

});

