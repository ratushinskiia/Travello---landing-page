const onTabClick = function(idContainer, idElement) {
    let dataAttribute = `[data-${idContainer}`;
    for (let item of document.querySelectorAll(`${dataAttribute}-name`)) {
        item.classList.remove('active');
    }
    for (let item of document.querySelectorAll(`${dataAttribute}-tab`)) {
        item.classList.remove('active');
    }
    document.querySelector(`${dataAttribute}-name=${idElement}]`).classList.add('active');
    document.querySelector(`${dataAttribute}-tab=${idElement}]`).classList.add('active');
}
let tabsName = document.querySelectorAll('.tab-name');
tabsName.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        onTabClick(event.target.parentElement.id, event.target.dataset.hotelsCountriesName)
    })
})

module.exports = onTabClick;