panelList()
panelCatalogClick();
panelHeight();
panelInput();

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

function panelInput(){
    const panelCatalogInput = document.getElementById('panel-catalog-input');
    let close = document.querySelector('.panel-catalog__close');
    let clear = document.querySelector('.panel-catalog__clear');
    let result = document.querySelector('.panel-catalog__result');
    let panelList = document.getElementById('panel-list');
    panelCatalogInput.addEventListener('focus', ()=>{
        close.classList.add('active');
        result.classList.add('active');
        panelList.style.display = 'none';

    })
    panelCatalogInput.addEventListener('keyup',  () => {
        clear.classList.add('active');
    })
    close.addEventListener('click', ()=>{
        close.classList.remove('active')
        panelList.style.display = 'block';
    })
    clear.addEventListener('click', ()=>{
        panelCatalogInput.value = '';
        clear.classList.remove('active');
    })
}

window.addEventListener('resize',panelHeight);
window.addEventListener('load',panelHeight);

