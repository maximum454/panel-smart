panelList()
panelCatalogClick();
panelHeight();

function panelList(){
    const panelList = document.getElementById('panel-list');
    panelList.addEventListener('click', (event) => {
        let target = event.target;
        let parent = target.classList.contains('parent');
        if(parent){
            event.preventDefault();
            let dropdown = target.closest('li').querySelector('.dropdown');
            let prev = dropdown.querySelector('.prev');
            dropdown.classList.add('active');

            prev.addEventListener('click',(event) => {
                let parent = prev.closest('.dropdown');
                parent.classList.remove('active');
                panelList.classList.remove('hide')
            })

        }
    })
}
function panelCatalogClick(){
    const panelCatalogClick = document.querySelector(".js-panel-catalog");

    panelCatalogClick.onclick = function(){
        const panelCatalog = document.getElementById('panel-catalog');
        panelCatalog.classList.toggle("show");
        panelCatalogClick.classList.toggle("active");
        document.body.classList.toggle('lock')
    }
}

function panelHeight(){
    let docHeight = document.documentElement.clientHeight
    let panelCatalog = document.getElementById('panel-catalog');
    let panelSmart = document.getElementById('panel-smart').clientHeight;
    panelCatalog.style.height = docHeight - panelSmart + 'px';

}

window.addEventListener('resize',panelHeight);
window.addEventListener('load',panelHeight);
