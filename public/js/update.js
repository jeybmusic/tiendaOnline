const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit',(e)=>{
	e.preventDefault();
    const id = loginForm.dataset.id;
	const data = new FormData(loginForm);
	const codigo = data.get('codigo');
	const asignatura = data.get('asignatura');
	const horasT = data.get('horasT');
	const horasP = data.get('horasP');
	const horasS = data.get('horasS');
	const uc = data.get('uc');
	const prelaciones = data.get('prelaciones');

	fetch('/updatePostPensum',{
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},
		body:JSON.stringify({codigo,asignatura,horasT,horasP,horasS,uc,prelaciones,id})
	})
	.then(res=>res.json())
	.then(res =>{
		if(res.response){
          Swal.fire('¡Registro Actualizado correctamente!')
                .then(()=>{
                window.location.href='/list';         
                });
		}else{
          Swal.fire('¡Error al actualizar Registro!')
                .then(()=>{
                window.location.href=`/updateGetPensum/${id}`;         
                });
		}
	})

});