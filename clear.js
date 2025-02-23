document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("clearBtn").addEventListener("click", function() {
        localStorage.removeItem("cartItems"); // Make sure "cartItems" matches the stored key
        console.log("Local storage cleared!");
        location.reload(); // Optional: Refresh the page to reflect changes
    });
});
