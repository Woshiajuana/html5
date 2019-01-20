import $                from 'jquery'
// import Toast            from 'utils/toast.util'


const Animation = {
    $el: $('.cards'),
    index: -1,
    number: 0,
    library: ['flutter1', 'flutter2', 'flutter3', 'flutter4'],
    libraryIndex: -1,
    libraryNumber: 0,
    init () {
        this.number = this.$el.length;
        this.libraryNumber = this.library.length;
    },
    start () {
        this.init();
        this.run();
    },
    run () {
        this.index++;
        this.libraryIndex++;
        if (this.index >= this.number)
            this.index = 0;
        if (this.libraryIndex >= this.libraryNumber)
            this.libraryIndex = 0;
        this.$el.eq(this.index).removeClass(this.library.join(' '));
        setTimeout(() => {
            this.$el.eq(this.index).addClass(this.library[this.libraryIndex]);
        }, 200);
        // this.$el.eq(this.index).addClass(this.library[this.libraryIndex]);
        // ((index, libraryIndex) => {
        //     setTimeout(() => {
        //         this.$el.eq(index).removeClass(this.library[libraryIndex]);
        //     }, 6000);
        // })(this.index, this.libraryIndex);
        setTimeout(this.run.bind(this), 2000);
    },
};

// 控制器
const Controller = {
    init () {
        this.swiper = new Swiper('#swiper', {
            direction: 'vertical'
        });
        this.getElById('next-button').addEventListener('click', this.handleNextSlide.bind(this));
        Animation.start();
    },
    handleNextSlide () {
        this.swiper.slideNext();
    },
    getElById (id) {
        return document.getElementById(id);
    }
};
Controller.init();

