// import $                from 'jquery'
// import Toast            from 'utils/toast.util'
// 控制器
const Controller = {
    init () {
        let eleApp = document.getElementsByTagName("body")[0];
        eleApp.addEventListener('blur', this.handleBlur, true);

    },
    handleBlur (event) {
        let target = event.target || {};
        if (target.nodeName
            && (target.nodeName.toLocaleUpperCase() === 'INPUT'
            || target.nodeName.toLocaleUpperCase() === 'SELECT'
            || target.nodeName.toLocaleUpperCase() === 'TEXTAREA')) {
            setTimeout(() => {
                const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
                window.scrollTo(0, Math.max(scrollHeight - 1, 0));
            }, 100);
        }
    },
};
Controller.init();
