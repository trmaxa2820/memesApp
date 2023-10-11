export class Model {
    constructor( { onMemChange, onMemsChange }) {
        this.mems = [];
        this.textUpper = '';
        this.textDown = '';
        this.currentMem = {
            id: '',
            name: '',
            url: '',
            width: 0,
            height: 0,
            box_count: 0,
            captions: 0
          };
        this.onMemChange = onMemChange;
        this.onMemsChange = onMemsChange;
    }

    setMem(mem) {
        this.currentMem = mem;
        this.onMemChange(mem);
    }

    setMems(mems) {
        this.mems = mems;
        this.onMemsChange(mems);
    }

    getMemById(id) {
        let memById;
        
        for(let i = 0; i < this.mems.length; i++) {
            if(this.mems[i].id === id){
                memById = this.mems[i];
                break;
            }
        }

        return memById;
    }
}