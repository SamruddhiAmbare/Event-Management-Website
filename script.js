
const registeredUsers = [];

    function registerUser() {
        var fullname = document.getElementById('fullname').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var email = document.getElementById('email').value;
        var Username = document.getElementById('Username').value;
        var password = document.getElementById('password').value;


        if (!fullname || !phone || !address || !email || !Username || !password) {
            alert('Please fill in all fields.');
            return;
        }

    
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        var phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

            function isUsernameTaken(username) {
                return registeredUsers.some(user => user.username.toLowerCase() === username.toLowerCase());
            
        }
        if (registeredUsers.some(user => user.email === email)) {
            alert('Email already exists. Please use a different email.');
            return;
        }
        console.log("User registered:", { fullname, phone, address, email, Username, password });
            
        alert('Registration Successful\nYou can now login with your credentials.');
        window.location.href="main_login.html";
    }
    function loginUser() {
        const storedUsers = localStorage.getItem('registeredUsers');
        const registeredUsers = storedUsers ? JSON.parse(storedUsers) : [];

        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        const userMatch = registeredUsers.find(user => user.Username === loginUsername && user.password === loginPassword);

        if (userMatch) {
            window.location.href = "entrypg.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    }
function goToCategory(category) {
    window.location.href = `category.html?category=${category}`;
}

function selectCategory(category) {
    var categoryTitleElement = document.getElementById('category-title');
    categoryTitleElement.innerText = category;
}

selectCategory('Category Name'); 
function bookevent()
{
    window.location.href="booking page.html";
}
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const categoryTitle = document.getElementById('category-title');
    categoryTitle.innerText = category.charAt(0).toUpperCase() + category.slice(1);

    const categoryContent = document.getElementById('category-content');

    if (category === 'birthday') {
        categoryContent.innerHTML += "<img src='birthday_idea1.jpg' width=450 height=450  alt='Birthday Idea 1' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='birthday_idea2.jpg' width=450 height=450  alt='Birthday Idea 2' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='birthday_idea3.jpg' width=450 height=450  alt='Birthday Idea 3' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='bday4.jpg' width=450 height=450  alt='Birthday Idea 4' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='bday5.jpg' width=450 height=450  alt='Birthday Idea 5' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='bday6.jpg' width=450 height=450  alt='Birthday Idea 6' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='bday7.jpg' width=450 height=450  alt='Birthday Idea 7' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='bday8.jpg' width=450 height=450  alt='Birthday Idea 8' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='bday9.jpg' width=450 height=450  alt='Birthday Idea 9' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='bd.jpg' width=450 height=450  alt='Birthday Idea 10' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='bday3.jpg' width=450 height=450  alt='Birthday Idea 11' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='bd11.jpg' width=450 height=450  alt='Birthday Idea 12' onclick='showBookingForm()'>";
    } else if (category === 'wedding') {
        categoryContent.innerHTML += "<img src='wedding_idea1.jpg' width=450 height=450  alt='Wedding Idea 1' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wedding_idea2.jpg' width=450 height=450  alt='Wedding Idea 2' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wedding_idea3.jpg' width=450 height=450  alt='Wedding Idea 3' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wedd4.jpg' width=450 height=450  alt='Wedding Idea 4' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wed5.jpg' width=450 height=450  alt='Wedding Idea 5' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wed6.jpg' width=450 height=450  alt='Wedding Idea 6' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wed7.jpg' width=450 height=450  alt='Wedding Idea 7' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wed8.jpg' width=450 height=450  alt='Wedding Idea 8' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wed10.jpg' width=450 height=450  alt='Wedding Idea 9' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wed11.jpg' width=450 height=450  alt='Wedding Idea 10' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wed12.jpg' width=450 height=450  alt='Wedding Idea 11' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='wed112.jpg' width=450 height=450  alt='Wedding Idea 12' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='sun.jpg' width=450 height=450  alt='Wedding Idea 13' onclick='showBookingForm()'>";

    } else if (category === 'corporate') {
        categoryContent.innerHTML += "<img src='cop.jpg' width=450 height=450 alt='Corporate Idea 1' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='cop1.jpg' width=450 height=450 alt='Corporate Idea 2' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='cop3.jpg' width=450 height=450 alt='Corporate Idea 3' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='cop4.jpg' width=450 height=450  alt='Corporate Idea 4' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='cop5.jpg' width=450 height=450 alt='Corporate Idea 5' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='cop6.jpg' width=450 height=450 alt='Corporate Idea 6' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='cop7.jpg' width=450 height=450 alt='Corporate Idea 7' onclick='showBookingForm()'>";
        categoryContent.innerHTML += "<img src='cop8.jpg' width=450 height=450  alt='Corporate Idea 8' onclick='showBookingForm()'>";
    }
});

// booking
function showPopup(title, selectedImageSrc) {
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('selectedImage').src = selectedImageSrc;
    document.getElementById('popup').style.display = 'block';
}

function showBookingForm() {
    document.getElementById('popup').style.display = 'none';
    window.location.href = 'bform.html';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

    
//bform
function submitBooking() {
    var eventName = document.getElementById('eventName').value;
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var eventDate = document.getElementById('eventDate').value;
    var eventTime = document.getElementById('eventTime').value;
    var venue = document.getElementById('venue').value;

    if (!eventName || !fullName || !email || !phone || !eventDate || !eventTime || !venue) {
        alert('Please fill in all details.');
        return;
    }
    
    var newBooking = {
        eventName: eventName,
        fullName: fullName,
        email: email,
        phone: phone,
        eventDate: eventDate,
        eventTime: eventTime,
        venue: venue
    };

    // Retrieve existing bookings from localStorage
    var existingBookings = JSON.parse(localStorage.getItem('eventBookings')) || [];

    // Add the new booking to the existing bookings
    existingBookings.push(newBooking);

    // Save the updated bookings back to localStorage
    localStorage.setItem('eventBookings', JSON.stringify(existingBookings));
    window.alert(" Booking Successfull !");

// Redirect to the booking list page
    redirectToBookingList();
    
    // Clear the form for the next booking
    document.getElementById('eventBookingForm').reset();
}


function redirectToBookingList() {
    window.location.href = 'bookinglist.html';
}
