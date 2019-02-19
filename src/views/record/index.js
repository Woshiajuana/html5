// 控制器
const Controller = {
    init () {
        this.$elInner = this.getElByClassName('inner');
        this.$elNavItem = this.getElByClassName('nav-item');
        document.getElementsByClassName('nav')[0].addEventListener('click', this.handleEvent.bind(this));
    },
    handleEvent (event) {
        let target = event.target || '';
        if (target.className.indexOf('nav-item') > -1){
            return this.handleSwitch(target);
        }
        if (target.parentNode && target.parentNode.className.indexOf('nav-item') > -1) {
            return this.handleSwitch(target.parentNode);
        }
    },
    handleSwitch (target) {
        this.$elNavItem.forEach((item, index) => {
            let type = item === target;
            item.className = type ? 'nav-item active' : 'nav-item';
            this.$elInner[index].className = type ? 'inner' : 'inner hidden';
        })
    },
    getElByClassName (className) {
        let el = document.getElementsByClassName(className);
        return Array.prototype.slice.apply(el);
    }
};
Controller.init();
