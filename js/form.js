
	    const form = document.getElementById('form');
		const tipo = document.getElementById('#tipo');
		const numero = document.getElementById('numero');
		const usuario = document.getElementById('username');
		const apellido = document.getElementById('apellido');
		const email = document.getElementById('email');
		const telefono = document.getElementById('telefono');
		const password = document.getElementById('password');
		const password2 = document.getElementById('password2');
		
		form.addEventListener('submit', e => {
			e.preventDefault();
			
			checkInputs();
		});
		
		function checkInputs() {
			// trim to remove the whitespaces

			const numeroValue = numero.value.trim();
			const usuarioValue = usuario.value.trim();
			const apellidoValue = apellido.value.trim();
			const emailValue = email.value.trim();
			const telefonoValue = telefono.value.trim();
			const passwordValue = password.value.trim();
			const password2Value = password2.value.trim();
			
			
			if(numeroValue === '') {
				setErrorFor(numero, 'No puede este campo vacio');
			} else if (!isNumero(numeroValue)) {
				setErrorFor(numero, 'solo puede contener entre 7 a 10 digitos');
			} else {
				setSuccessFor(numero);
			}

			if(usuarioValue === '') {
				setErrorFor(usuario, 'No puede quedar este campo vacio');
			}  else if (!isNombre(usuarioValue)) {
				setErrorFor(usuario, 'debe contener minimo 3 digitos maximo 16');
			}else {
				setSuccessFor(usuario);
			}
			if(apellidoValue === '') {
				setErrorFor(apellido, 'No puede quedar este campo vacio');
			}  else {
				setSuccessFor(apellido);
			}
			
			if(emailValue === '') {
				setErrorFor(email, 'No puede quedar este campo vacio');
			} else if (!isEmail(emailValue)) {
				setErrorFor(email, 'No ingreso un email válido');
			} else {
				setSuccessFor(email);
			}
			
			if(telefonoValue === '') {
				setErrorFor(telefono, 'No puede quedar este campo vacio');
			} else if (!isTelefono(telefonoValue)) {
				setErrorFor(telefono, 'debe contener de 7 a 10 digitos');
			} else {
				setSuccessFor(telefono);
			}

			
			if(passwordValue === '') {
				setErrorFor(password, 'No puede quedar este campo vacio.');
			} else if (!isPassword(passwordValue)) {
				setErrorFor(password, 'debe contener de 4 a 12 digitos');
			} else {
				setSuccessFor(password);
			}
			
			if(password2Value === '') {
				setErrorFor(password2, 'No puede quedar este campo vacio');
			} else if(passwordValue !== password2Value) {
				setErrorFor(password2, 'Passwords no coinciden');
			} else{
				setSuccessFor(password2);
			}
		}
		
		function setErrorFor(input, message) {
			const formControl = input.parentElement;
			const small = formControl.querySelector('small');
			formControl.className = 'form-control error';
			small.innerText = message;
		}
		
		function setSuccessFor(input) {
			const formControl = input.parentElement;
			formControl.className = 'form-control success';
		}
		
		function isNumero(numero){
			return /^\d{7,14}$/.test(numero);
		}
		function isNombre(usuario){
			return /^[a-zA-ZÀ-ÿ\s]{3,16}$/.test(usuario);
		}
		function isEmail(email) {
			return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
		}
		function isTelefono(telefono){
			return /^\d{7,10}$/.test(telefono);
		}
		function isPassword(password){
			return /^.{4,12}$/.test(password);
		}


		
		