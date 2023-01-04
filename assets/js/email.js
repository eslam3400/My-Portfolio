const successMessage = document.getElementById('mail-success');
const failMessage = document.getElementById('mail-fail');
const invalidMessage = document.getElementById('mail-invalid');
const name = document.getElementById("client-name");
const subject = document.getElementById("client-subject");
const email = document.getElementById("client-email");
const number = document.getElementById("client-number");
const message = document.getElementById("client-message");

hideMessages();

function sendMail() {

    hideMessages();

    const data = {
        name: name.value,
        subject: subject.value,
        email: email.value,
        number: number.value,
        message: message.value,
    };

    if (!isEmailInputsValid(data)) return invalidMessage.style.display = "block";

    emailjs.send('default_service', 'default_template', data, "P5OurJAMzck84a831")
        .then(res => successMessage.style.display = 'block',
            err => failMessage.style.display = 'block'
        );
}

function isEmailInputsValid(obj) {
    for (var key in obj)
        if (obj[key] == null || obj[key].trim() == "") return false;
    return true;
}

function hideMessages() {
    successMessage.style.display = 'none';
    failMessage.style.display = 'none';
    invalidMessage.style.display = 'none';
}