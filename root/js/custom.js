$(document).ready(function() {
	$('.sidenav').sidenav();
});
//Parallax
$(document).ready(function() {
	$('.parallax').parallax();
});
// Gallery
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
$(document).ready(function() {
	$('.materialboxed').materialbox();
});
<!--   Smooth scrolling    -->
$(document).ready(function() {
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});
$(document).ready(function() {
      $('#submit').click(function(e){
        e.preventDefault();

         var first_name = $("#first_name").val();
         var last_name = $("#last_name").val();
			var phone_number = $("#phone_number").val();
			var email = $("#email").val();
         var message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "php/form_new.php",
            dataType: "json",
            data: {first_name:first_name, last_name:last_name, phone_number:phone_number, email:email, message:message},
            success : function(data){
				console.log(data);

                if (data.code == "200"){
					alert('Dėkojame. Užklausa sėkmingai pateikta.');
					console.log("Pateikta užklausa sėkmingai. Formos duomenys: " + data.msg);
					$('#form')[0].reset();  // Reset all form data
					$(".display-error").css("display","none"); // Hide all errors
					$("#submit").prop("disabled", true); // Disable submit button (avoiding sending twice and etc.)
                } else {
                    $(".display-error").html("<ul>"+data.msg+"</ul>");
                    $(".display-error").css("display","block");
                }
            }
        });

      });
  });
