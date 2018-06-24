export default function () {
    var heroItems = document.querySelectorAll('.item');

    [].forEach.call(heroItems,function(el){
        el.addEventListener('click', function () {
            if (!(this.classList.contains('js_is-blocked'))) {
                this.classList.add('is-active')
            }
            el.addEventListener('mouseout', function () {
                if (this.classList.contains('is-active')){
                    this.classList.toggle('js_is-active');
                    this.classList.remove('is-active')
                }
            })
        })
    });
}
