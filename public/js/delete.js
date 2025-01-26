const del = document.querySelectorAll('.delete');
let id;
del.forEach(item=>{
	item.addEventListener('click',()=>{
	id= item.dataset.id;

    Swal.fire({
  title: '¡Confirmar nuevamente!',
  text: `¿Estás seguro de que deseas eliminar el registro actual?`,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sí, eliminar',
  cancelButtonText: 'No, cancelar'
}).then((result) => {
	if (result.isConfirmed) {
    fetch('/deletePensum',{
			method:'POST',
			headers:{
				'Content-Type':'application/json',
			},
			body:JSON.stringify({id})
		})
		.then(res=>res.json())
		.then(res=>{
			if(res.response){
             Swal.fire('¡Registro Eliminado!')
             .then(()=>{
             	window.location.href='/list';
             })
			}else{
			 Swal.fire('¡Error al eliminar Registro!')
             .then(()=>{
             	window.location.href='/list';
             })	
			}
		})
	}else{
    Swal.fire('No se elimino el registro')
    .then(()=>{
    	window.location.href='/list';
    })
	}
})

		
	});//final de evento click
})//final del forEach
