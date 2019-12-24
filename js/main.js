function contact_res(){
	res = {
		'name': $('input[name="name"]').val(),
		'email': $('input[name="email"]').val(),
		'msg': $('textarea[name="msg"]').val(),
	};
	if(res.name == null || res.name == ""){
		$('#name').addClass('is-invalid');
		return false;
	}
	else if(res.email == null || res.email == ""){
		$('#email').addClass('is-invalid');
		return false;
	}
	else if(res.msg == null || res.msg == ""){
		$('#msg').addClass('is-invalid');
		return false;
	}
	else{
		var MySubmit = "https://docs.google.com/forms/d/e/1FAIpQLSfaHXeVe4A3HSClMwpfWz7BTMIJEGNY_Ni5MmgekxmaS7l8zA/formResponse?usp=pp_url&entry.1032238395=" + res.name + "&entry.134233867=" + res.email + "&entry.938639045=" + res.msg;
		$.ajax({
			url: MySubmit,
			complete: function(res){
				$('input[name="name"]').val('');
				$('input[name="email"]').val('');
				$('textarea[name="msg"]').val('');
				$('#contact').modal('hide');
				$('#ack').modal('show');
			}
		})
	}
}