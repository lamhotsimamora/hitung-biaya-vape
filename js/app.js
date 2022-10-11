const {
  createApp
} = Vue

const $storage = new Storage();

createApp({
  data(){
    return {

    }
  },
  methods: {
    resetItem: function(){
       $storage.resetItem();
       alert("Reset Success !")
       _refresh()
    },
    openModal: function () {
      document.getElementById('modal_add').checked = true;
    },
    print: function(){
      window.print()
    }
  },
}).mount('#btn')

var $pengeluaran = createApp({
  data(){
    return {
      total_pengeluaran:0
    }
  }
}).mount("#pengeluaran")

var $app = createApp({
  data() {
    return {
      data_item: null
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    deleteData:function(data){
      console.log('delete')
      $storage.deleteItem(data)
      this.loadData();
    },
    loadData: function () {
        this.data_item = $storage.getItem();

        var total = 0;

        if (this.data_item==null){
          return
        }

        this.data_item.forEach(element => {
             var harga = element['harga']
             var jml = element['jml']

             var subtotal = harga*jml;

             total = total+subtotal;
        });

        $pengeluaran.total_pengeluaran = _moneyFormat(total)
    }
  },
}).mount('#app')


createApp({
  data() {
    return {
      data_liquid_coil: null,
      data_item: null,
      harga: null,
      jml: null,
      tgl:null
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    enterSave: function(e){
      if (e.keyCode==13){
        this.save()
      }
    },
    loadData: function () {
      var data_liquid = $storage.getLiquid();
      var data_coil = $storage.getCoil();

      if (data_liquid==null){
        return
      }
    
      var final = data_liquid.concat(data_coil);

      this.data_liquid_coil = final
    },
    openModal: function () {
      document.getElementById('modal_add').checked = true;
    },
    save: function () {
      if (this.data_item == null) {
        alert("Pilih item dulu !")
        return;
      }
      if (this.harga == null || this.harga === '') {
        this.$refs.harga.focus()
        return;
      }
      if (this.jml == null || this.jml === '') {
        this.$refs.jml.focus()
        return;
      }

      if (this.tgl==null){
        return
      }

      var $data = {
          'item' : this.data_item,
          'harga' : this.harga,
          'jml' : this.jml,
          'tanggal' : this.tgl
      }

       $storage.saveItem($data);
       this.harga =null;
       this.jml = null;
       $app.loadData();
    }
  },
}).mount('#modal_new')

