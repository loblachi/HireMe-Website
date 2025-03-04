
document.querySelector(".send-btn").addEventListener("click", () => {
    let message =  document.querySelector(".text-area").value;  
    document.querySelector(".text-area").value = "";
    if(message){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully",
            showConfirmButton: false,
            timer: 2000
          });
    }
    
}); 

let lastScrollY = 0; // Track the last scroll position
const nav = document.getElementById('nav-id'); // Get the navbar element
const scrollThreshold = window.innerHeight * 0.4; // 40vh

window.addEventListener('scroll', () => {
  // Check if we've scrolled past the threshold (40vh)
  if (window.scrollY > scrollThreshold) {
    nav.classList.add('show-nav'); // Show navbar
  } else {
    nav.classList.remove('show-nav'); // Hide navbar
  }

  // Navbar hide/show logic based on scroll direction
  if (window.scrollY > lastScrollY) {
    nav.style.top = "-360px"; // Hide navbar when scrolling down
  } else {
    nav.style.top = "0"; // Show navbar when scrolling up
  }

  lastScrollY = window.scrollY; // Update scroll position
});
