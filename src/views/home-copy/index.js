// import $                from 'jquery'
// import Toast            from 'utils/toast.util'

// 控制器
const Controller = {
    init () {
        this.swiper = new Swiper('#swiper', {
            direction: 'vertical'
        });
        this.getElById('next-button').addEventListener('click', this.handleNextSlide.bind(this))
    },
    handleNextSlide () {
        this.swiper.slideNext();
    },
    getElById (id) {
        return document.getElementById(id);
    }
};
Controller.init();
