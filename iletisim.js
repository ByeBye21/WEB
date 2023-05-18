function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");

    var namePattern = /^[A-Za-zğüşıöçĞÜŞİÖÇ]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namePattern.test(nameInput.value)) {
        nameError.innerText = "Sadece Harf Kullanabilirsiniz.";
        return false;
    } else {
        nameError.innerText = "";
    }

    if (!emailPattern.test(emailInput.value)) {
        emailError.innerText = "Geçerli Bir Email Adresi Giriniz.";
        return false;
    } else {
        emailError.innerText = "";
    }

    return true;
}