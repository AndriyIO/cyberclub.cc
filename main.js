document.addEventListener("DOMContentLoaded", function() {
    closeLogin();
});




function goToTournamnet() {
    document.getElementById("tournamnet").scrollIntoView({
        behavior: "smooth"
    });
}

function goToContact(){
    document.getElementById("contacts").scrollIntoView({
        behavior: "smooth"
    });
}

function goToTakeplace(){
    document.getElementById("takepalce").scrollIntoView({
        behavior: "smooth"
    });
}

function goToNews(){
    document.getElementById("news").scrollIntoView({
        behavior: "smooth"
    });
}

function goToCourses(){
    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });
}

function goToGames(){
    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });
}

function goToPrice(){
    document.getElementById("price").scrollIntoView({
        behavior: "smooth"
    });
}

function goToHomepage(){
    document.getElementById("homepage").scrollIntoView({
        behavior: "smooth"
    });
}


function openLogin() {

    document.getElementById("loginWindow").style.display = "flex";

}


function closeLogin() {

    document.getElementById("loginWindow").style.display = "none";

}

document.getElementById("loginWindow").style.display = "none";


function loginUser() {

    let login = document.getElementById("login").value;

    let password = document.getElementById("password").value;

    if (login !== "" && password !== "") {

        document.querySelector(".s10").textContent = login;

        closeLogin();

    } else {

        alert("Введіть логін і пароль");

    }

}

// ВІКНО ДЛЯ БРОНЮВАННЯ
let selectedSeat = null;


// Знаходимо всі місця

let seats = document.querySelectorAll(".butn");


// Додаємо подію на кожне місце

seats.forEach(function(seat) {

    seat.addEventListener("click", function() {

        // Якщо місце вже заброньоване,
        // нічого не робимо

        if (seat.classList.contains("booked")) {
            return;
        }


        // Запам'ятовуємо вибране місце

        selectedSeat = seat;


        // Показуємо номер місця

        document.getElementById("selectedSeat").textContent =
            seat.textContent;


        // Відкриваємо вікно

        document.getElementById("bookingWindow").style.display = "flex";

    });

});

// зАКРИТТЯ
function closeBooking() {

    document.getElementById("bookingWindow").style.display = "none";

}


function bookSeat() {

    let login = document.getElementById("userLogin").value;

    let date = document.getElementById("bookingDate").value;

    let payment = document.querySelector(
        'input[name="payment"]:checked'
    );


    // Перевірка логіну

    if (login === "") {

        alert("Введіть логін!");

        return;
    }


    // Перевірка дати

    if (date === "") {

        alert("Виберіть дату!");

        return;
    }


    // Перевірка оплати

    if (!payment) {

        alert("Виберіть спосіб оплати!");

        return;
    }


    // Робимо місце червоним

    selectedSeat.classList.add("booked");


    // Закриваємо вікно

    closeBooking();


    // Очищаємо форму

    document.getElementById("userLogin").value = "";

    document.getElementById("bookingDate").value = "";

    payment.checked = false;


    alert(
        "Місце №" + selectedSeat.textContent +
        " успішно заброньовано!"
    );

}