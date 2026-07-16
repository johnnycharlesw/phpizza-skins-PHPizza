let userDropdown;



function toggleAccountMenu(){
    if (userDropdown) {
        let classList = userDropdown.classList;
        classList.toggle("open");
    } else {
        userDropdown = document.getElementById("user-dropdown");
        toggleAccountMenu();
    }
}