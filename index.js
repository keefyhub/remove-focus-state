export default class RemoveFocusState {
    constructor() {
        window.addEventListener('keydown', this.handleFirstTab);
        window.addEventListener('mousedown', this.handleMouseDownOnce);
    }

    handleFirstTab(e) {
        if (e.keyCode === 9) {
            document.body.classList.add('user-is-tabbing');
            document.body.classList.remove('user-is-clicking');

            window.removeEventListener('keydown', this.handleFirstTab);
            window.addEventListener('mousedown', this.handleMouseDownOnce);
        }
    }

    handleMouseDownOnce(){
        document.body.classList.remove('user-is-tabbing');
        document.body.classList.add('user-is-clicking');

        window.removeEventListener('mousedown', this.handleMouseDownOnce);
        window.addEventListener('keydown', this.handleFirstTab);
    }
}
