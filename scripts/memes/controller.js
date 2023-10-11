import { Model } from "./model.js";
import { View } from "./view.js";
import { MemsApi } from "./memsApi.js"

export class Controller {
    constructor() {
        this.view = new View( { 
            onTextChange: this.onTextChange, 
            onMemSelect: this.onMemSelect, 
            onTextColorChange: this.onTextColorChange 
        } );
        this.model = new Model( { 
            onMemChange:this.renderMem, 
            onMemsChange:this.renderMems 
        });
        this.memsApi = new MemsApi();
    }

    init() {
        this.memsApi.getMems().then(result => {
            this.model.setMems(result.data.memes);
        });
    }

    renderMem = (mem) => {
        this.view.renderMem(mem);
    };

    renderMems = (mems) => {
        this.view.remderMems(mems);
    };

    onTextChange = (upperText, downText) => {
        this.view.renderUpperText(upperText);
        this.view.renderDownText(downText);
    }

    onMemSelect = (id) => {
        const mem = this.model.getMemById(id);
        this.model.setMem(mem);
    }

    onTextColorChange = (textColor) => {
        this.view.renderTextColor(textColor);
    }
}