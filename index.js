class RemoveFocusState {
    constructor() {
        window.addEventListener('keydown', this.handleFirstTab);
        window.addEventListener('mousedown', this.handleFirstMouseDown);
    }

    handleFirstTab(e) {
        const charCode = e.which || e.keyCode;
        if (charCode === 9) {
            document.body.classList.add('user-is-tabbing');
            document.body.classList.remove('user-is-clicking');

            window.removeEventListener('keydown', this.handleFirstTab);
            window.addEventListener('mousedown', this.handleFirstMouseDown);
        }
    }

    handleFirstMouseDown(){
        document.body.classList.remove('user-is-tabbing');
        document.body.classList.add('user-is-clicking');

        window.removeEventListener('mousedown', this.handleFirstMouseDown);
        window.addEventListener('keydown', this.handleFirstTab);
    }
}

module.exports = RemoveFocusState;
