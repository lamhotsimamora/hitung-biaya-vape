class Storage{
    constructor(){
        this.liquid_data = 'data_liquid';
        this.coil_data = 'data_coil';
        this.item_data = 'data_item';
    }

    saveLiquid(value){
        var old_data = this.getLiquid();
        var toArr = [value];

        if (old_data==null){
            localStorage.setItem(this.liquid_data, JSON.stringify(toArr));
        }else{
            var final = old_data;
            final.push(value);
            localStorage.setItem(this.liquid_data, JSON.stringify(final));
        }
    }

    saveCoil(value){
        var old_data = this.getCoil();
        var toArr = [value];

        if (old_data==null){
            localStorage.setItem(this.coil_data, JSON.stringify(toArr));
        }else{
            var final = old_data;
            final.push(value);
            localStorage.setItem(this.coil_data, JSON.stringify(final));
        }
    }

    getLiquid(){
        var final = localStorage.getItem(this.liquid_data) ? localStorage.getItem(this.liquid_data) : null;
        return (final==null) ? null : JSON.parse(final);
    }

    getCoil(){
        var final= localStorage.getItem(this.coil_data) ? localStorage.getItem(this.coil_data) : null;
        return (final==null) ? null : JSON.parse(final);
    }

    getItem(){
        var final= localStorage.getItem(this.item_data) ? localStorage.getItem(this.item_data) : null;
        return (final==null) ? null : JSON.parse(final);
    }

    deleteLiquid(key){
        var tmp = []

        var todo_list = this.getLiquid();

        todo_list.forEach(element => {
             if (element===key){

             }else{
                tmp.push(element)
             }
        });
        localStorage.setItem(this.liquid_data, JSON.stringify(tmp));
    }

    deleteCoil(key){
        var tmp = []

        var todo_list = this.getCoil();

        todo_list.forEach(element => {
             if (element===key){

             }else{
                tmp.push(element)
             }
        });
        localStorage.setItem(this.coil_data, JSON.stringify(tmp));
    }

    deleteItem(key){
        var tmp = []

        var todo_list = this.getItem();

        todo_list.forEach(element => {
        
             if (element['item']===key){

             }else{
                tmp.push(element)
             }
        });
        
        localStorage.setItem(this.item_coil, JSON.stringify(tmp));
    }

    saveItem(value){
        var old_data = this.getItem();
        var toArr = [value];

        if (old_data==null){
            localStorage.setItem(this.item_data, JSON.stringify(toArr));
        }else{
            var final = old_data;
            final.push(value);
            localStorage.setItem(this.item_data, JSON.stringify(final));
        }
    }

    resetItem(){
        localStorage.removeItem(this.item_data); 
    }

    resetCoil(){
        localStorage.removeItem(this.coil_data); 
    }

    resetLiquid(){
        localStorage.removeItem(this.liquid_data); 
    }

}