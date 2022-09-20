// let sum = (a, b) => a + b;
// module.exports = sum;

const Hearts = document.querySelectorAll('.hotels-item__heart-path');
for (var i = 0; i < Hearts.length; i++) {
    let heart = Hearts[i];
    heart.addEventListener("click", function() {
        if (heart.classList.contains("favorited")) {
            heart.classList.remove("favorited");
        }
        else {
            heart.classList.add("favorited");
        }
    });
};


module.exports = Hearts;