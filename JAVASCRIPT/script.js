AOS.init();

// Obtém o botão de alternância
const toggleButton = document.getElementById('toggle-dark-mode');

// Verifica se o modo escuro foi previamente ativado
const currentMode = localStorage.getItem('mode') || 'light';  // Adicionando fallback para 'light'
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.innerHTML = '🌞';  // Altera o ícone do botão para "sol"
} else {
    toggleButton.innerHTML = '🌙';  // Altera o ícone para "lua" se o modo claro estiver ativo
}

// Adiciona o evento de clique para alternar os modos
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        toggleButton.innerHTML = '🌞';  // Altera o ícone para "sol"
    } else {
        localStorage.setItem('mode', 'light');
        toggleButton.innerHTML = '🌙';  // Altera o ícone para "lua"
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

let radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 4){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}
