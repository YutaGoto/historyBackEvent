!function() {

    let fc = document.getElementsByClassName("modal-close");

    var OpenModal = function () {
        var fm = document.getElementById('modal');
        var fmc = document.getElementById('modal-close');
        fm.classList.add('show');
        fm.classList.add('modal-open');
        fmc.classList.add('modal-overLay');
        fm.classList.remove('hide');
        fm.style.display = '';
    };

    var CloseModal = function () {
        var fm = document.getElementById('modal');
        var fmc = document.getElementById('modal-close');
        fm.classList.remove('show');
        fm.classList.add('hide');
        fm.classList.remove('modal-open');
        fmc.classList.remove('modal-overLay');
        fm.style.display = 'none';
    };

    function pushHistory() {
        var hashToAppend = '#anything';
        history.pushState(null, null, hashToAppend);
    }


    function addEvents() {
        // If back button is pressed (use the 'popstate' event)
        window.addEventListener('popstate', function (e) {
            history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
            e.preventDefault();
            OpenModal();
            return false;
        }, false);
    }

    function main() {
        for(let i = 0; i < fc.length; i++){
            fc[i].addEventListener("click", CloseModal, false);
        }
        pushHistory();
        addEvents();
    }

    main();
}();
