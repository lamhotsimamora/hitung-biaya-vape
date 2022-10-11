const {
    createApp
} = Vue

const $storage = new Storage();

var $app= createApp({
    data() {
        return {
            data_coil: null
        }
    },

    mounted() {
        this.loadData()
    },
    methods: {
        resetItem: function(){
            $storage.resetCoil();
            alert("Reset Success !")
            _refresh()
         },
        deleteData: function(data){
            $storage.deleteCoil(data)
            this.loadData()
        },
        loadData: function () {
            this.data_coil = $storage.getCoil()
        },
        openModal: function () {
            document.getElementById('modal_add').checked = true;
        }
    },
}).mount('#app')


createApp({
    data() {
        return {
            nama_coil: null,
            data_coil: null
        }
    },
    methods: {
        enterSave: function (e) {
            if (e.keyCode == 13) {
                this.save()
            }
        },
        save: function () {
            if (this.nama_coil == null || this.nama_coil === '') {
                this.$refs.nama_coil.focus()
                return;
            }

            $storage.saveCoil(this.nama_coil);

            this.nama_coil = null;

            $app.loadData()
        }
    },
}).mount('#modal_new')