const {
    createApp
} = Vue

const $storage = new Storage();

var $app= createApp({
    data() {
        return {
            data_liquid: null
        }
    },

    mounted() {
        this.loadData()
    },
    methods: {
        resetItem: function(){
            $storage.resetLiquid();
            alert("Reset Success !")
            _refresh()
         },
        deleteData: function(data){
            $storage.deleteLiquid(data)
            this.loadData()
        },
        loadData: function () {
            this.data_liquid = $storage.getLiquid()
        },
        openModal: function () {
            document.getElementById('modal_add').checked = true;
        }
    },
}).mount('#app')


createApp({
    data() {
        return {
            nama_liquid: null,
            data_liquid: null
        }
    },
    methods: {
        enterSave: function (e) {
            if (e.keyCode == 13) {
                this.save()
            }
        },
        save: function () {
            if (this.nama_liquid == null || this.nama_liquid === '') {
                this.$refs.nama_liquid.focus()
                return;
            }

            $storage.saveLiquid(this.nama_liquid);

            this.nama_liquid = null;

            $app.loadData()
        }
    },
}).mount('#modal_new')