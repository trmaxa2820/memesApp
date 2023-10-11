export class View {
    constructor( { onTextChange, onMemSelect, onTextColorChange } ) {

        this.onTextChange = onTextChange;
        this.onMemSelect = onMemSelect;
        this.onTextColorChange = onTextColorChange;

        this.memSelectNode = document.querySelector('#mem_select');
        this.memSelectNode.addEventListener('change', () => this.onMemSelect(this.memSelectNode.value))
        
        this.textUpperInputNode = document.querySelector('#text__upper-input');
        this.textUpperInputNode.addEventListener('change', () => this._changeText());

        this.textDownInputNode = document.querySelector('#text__down-input');
        this.textDownInputNode.addEventListener('change', () => this._changeText());
        
        this.colorTextNode = document.querySelector('#text__color-input');
        this.colorTextNode.addEventListener('input', () => this._changeTextColor());

        this.imageTextUpperNode = document.querySelector('#image__text_upper');
        this.imageTextDownNode = document.querySelector('#image__text_down');

        this.imgNode = document.querySelector('#mem__Img');
    }

    _changeText() {
        const upperText = this.textUpperInputNode.value;
        const downText = this.textDownInputNode.value;
        this.onTextChange(upperText,downText);
    }

    renderUpperText(text) {
        this.imageTextUpperNode.innerText = text;
    }

    renderDownText(text) {
        this.imageTextDownNode.innerText = text;
    }

    _changeTextColor() {
        const textColor = this.colorTextNode.value;
        this.onTextColorChange(textColor);
    }

    renderTextColor(textColor) {
        this.imageTextDownNode.style.color = textColor;
        this.imageTextUpperNode.style.color = textColor;
    }
    renderMem( { url, width, height } ) {
        this.imgNode.style.width = `${width}px`;
        this.imgNode.style.height = `${height}px`;
        this.imgNode.style.backgroundImage = `url(${url})`;
    }

    remderMems(mems) {
        this.memSelectNode.innerHTML = '<option value="">Выберите мем:</option>';

        mems.forEach(mem => {
            this.memSelectNode.innerHTML += `<option value="${mem.id}">${mem.name}</option>`;
        });
    }
}