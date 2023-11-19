document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('myForm-mob');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		formData.append('image', formImage.files[0]);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('send-mail-mob.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Error");
				form.classList.remove('_sending');
			}
		} else {
			alert('Fill in required fields');
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('.req-mob');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('email-mob')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			}else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	const formImage = document.getElementById('formImageMob');
	const formPreview = document.getElementById('formPreviewMob');
	formImage.addEventListener('change', () => {
		uploadFile(formImage.files[0]);
	});

	function uploadFile(file) {
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Only images allowed');
			formImage.value = '';
			return;
		}
		if (file.size > 2 * 1024 * 1024) {
			alert('File must be less then 2MB');
			return;
		}
		var reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Error');
		};
		reader.readAsDataURL(file);
	}
});