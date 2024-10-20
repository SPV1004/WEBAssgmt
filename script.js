function showMessage() {
    alert("Hello, welcome to my page!");
}

document.getElementById("profile-pic").addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "#e0f7fa";
});

document.getElementById("profile-pic").addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "#f0f8ff";
});
