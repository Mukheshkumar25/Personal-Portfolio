// script.js
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
}


function sendMail(params){
  var tempParams = {
      from_name: document.getElementById("fromName").value,
      email_sender: document.getElementById("emailSender").value,
      subject_sender: document.getElementById("subjectSender").value,
      message_sender: document.getElementById("message").value,
  };
  emailjs.send('service_q67a2a2','template_i51q5cx',tempParams)
   .then(function(res){
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Mail Sent Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
   });
}