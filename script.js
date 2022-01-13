document.querySelector('.toggle-btn').addEventListener('click',function (){
    document.querySelector('header ul').classList.toggle('active')
    document.querySelector('body').classList.toggle('active')
    this.classList.toggle('active')
})
document.querySelectorAll('header li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('body').classList.toggle('active')
    });
})
const tabs = document.querySelector(".nav-tab");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-pane");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}

console.log('Score: 100 / 100\n' +
    'Верстка валидная +10\n' +
    'Вёрстка семантическая +20\n' +
    'Вёрстка соответствует макету +48\n' +
    'Требования к css + 12\n' +
    'Интерактивность, реализуемая через css +20')