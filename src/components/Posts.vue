<template>
  <div class="posts">
    <!--<table class="table table-striped mt-4">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">User Id</th>
        <th scope="col">Title</th>
        <th scope="col">Body</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{post.id}}</td>
        <td>{{post.userId}}</td>
        <td>{{post.title}}</td>
        <td>{{post.body}}</td>
      </tr>
      </tbody>
    </table>-->
    <!--    <button class="btn btn-primary">Click Me</button>-->
    <div id='sampleForm' style="width: 400px; height: auto;">
      <!--      <jqxForm></jqxForm>-->
      <!--<input type="button" value="Button" id='jqxbutton' />-->
    </div>

    <!--<form action="submitForm">
      <div>
        <Input    ref="input" @open="onOpen()"
                  :width="200" :height="25"
                  :source="countries" :minLength="1"
                  :placeHolder="'Enter a Country'">Country Name
        </Input>
      </div>
    </form>-->
    <div>
      <input type="button" role="button" value="Export to CSV"
             style="width: 90px; height: 30px;"
             @click="exportingGrid">
      <input type="button" role="button" value="Export To JSON"
             style="width: 90px; height: 30px;"
             @click="exportingGridJson">
    </div>
    <div id="grid">
      <Grid ref="myGrid"
            :width="width"
            :source="dataAdapter"
            :columns="columns"
            :columnsresize="true"
            :pageable="true"
            :autoloadstate="true"
            :editable="true"
            :pagesizeoptions="['10', '20', '50', '100','200','500']">
      </Grid>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Grid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
  /*import Input from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";*/
  import jqxForm from "jqwidgets-scripts/jqwidgets-vue/vue_jqxform"
  import Export from "jqwidgets-scripts/jqwidgets/jqxgrid.export"
  import jqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons"

  export default {
    name: "Posts",
    props: {
      autoCreate: {
        default: true,
        type: Boolean
      }
    },
    components: {
      Grid,
      /*Input,*/
      jqxForm,
      Export,
      jqxButton
    },
    data: function () {
      return {
        id: 'jqxGrid',
        gridLength: 0,
        countries: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola"],
        message: {},
        posts: [],
        width: '99%',
        dataAdapter: new jqx.dataAdapter(this.source),
        columns: [
          {text: 'address', datafield: 'address', width: 280},
          {text: 'city', datafield: 'city', width: 280},
          {text: 'companyName', datafield: 'companyName', width: 280},
          {text: 'contactName', datafield: 'contactName', width: 300},
          {text: 'contactTitle', datafield: 'contactTitle', width: 300},
          {text: 'country', datafield: 'country', width: 300}
        ]
      }
    },
    beforeCreate: function () {
      this.source = {
        datatype: 'json',
        paging: true,
        datafields: [
          {name: 'address', type: 'string'},
          {name: 'city', type: 'string'},
          {name: 'companyName', type: 'string'},
          {name: 'contactName', type: 'string'},
          {name: 'contactTitle', type: 'string'},
          {name: 'country', type: 'string'}
        ],
        // 'https://jsonplaceholder.typicode.com/posts',
        url: 'http://localhost:8005/currecy-exchange/getItems',
        root: 'data'
      };
    },
    created() {
      debugger
      this.id = 'jqxGrid';
      this.componentSelector = '#' + this.id;
    },
    mounted() {
      /*if (this.autoCreate) this.__createComponent__();*/
      console.log("Connected!!!");
      this.getAllData();
      $(document).ready(function () {

        let template = [
          {
            bind: 'firstName',
            type: 'text',
            label: 'First name',
            required: true,
            labelWidth: '80px',
            width: '250px',
            info: 'Enter first name',
            infoPosition: 'right'
          },
          {
            bind: 'lastName',
            type: 'text',
            label: 'Last name',
            required: true,
            labelWidth: '80px',
            width: '250px',
            info: 'Enter last name'
          },
          {
            bind: 'company',
            type: 'text',
            label: 'Company',
            required: false,
            labelWidth: '80px',
            width: '250px'
          },
          {
            bind: 'address',
            type: 'text',
            label: 'Address',
            required: true,
            labelWidth: '80px',
            width: '250px'
          },
          {
            bind: 'city',
            type: 'text',
            label: 'City',
            required: true,
            labelWidth: '80px',
            width: '250px'
          },
          {
            bind: 'state',
            type: 'option',
            label: 'State',
            required: true,
            labelWidth: '80px',
            width: '250px',
            component: 'jqxDropDownList',
            options: [
              {value: 'California'},
              {value: 'New York'},
              {value: 'Oregon'},
              {value: 'Illinois'},
              {value: 'Texas'}
            ]
          },
          {
            bind: 'zip',
            type: 'text',
            label: 'Zip code',
            required: true,
            labelWidth: '80px',
            width: '250px'
          },
          {
            type: 'blank',
            rowHeight: '10px'
          },
          {
            columns: [
              {
                type: 'button',
                text: 'Sign up',
                width: '90px',
                height: '30px',
                rowHeight: '40px',
                columnWidth: '50%',
                align: 'right'
              },
              {
                type: 'button',
                text: 'Cancel',
                width: '90px',
                height: '30px',
                rowHeight: '40px',
                columnWidth: '50%'
              }
            ]
          }
        ];
        let sampleValue = {
          firstName: 'John',
          lastName: 'Scott',
          address: '1st Ave SW',
          company: 'Huawei',
          city: 'San Antonio',
          state: 'Texas',
          zip: '560037'
        };
        $('#sampleForm').jqxForm({
          template: template,
          value: sampleValue,
          padding: {left: 10, top: 10, right: 10, bottom: 10}
        });
      });
    },
    methods: {
      setOptions: function (options) {
        JQXLite(this.componentSelector).jqxGrid(options);
      },
      getAllData: function () {
        /*axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          res.data.forEach((datas) => {
            this.message = datas;
            console.log(this.message)
            this.posts.push(datas)
          })
        })*/
        /*const xhr = new XMLHttpRequest();
        let vm = this;
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
        xhr.onload = function () {
          if (this.status == 200) {
            const customer = JSON.parse(xhr.responseText);
            console.log(customer)
            customer.forEach(function (data) {
              console.log(data);
              vm.posts.push(data);
            })
          }
        }
        xhr.send();*/
      },
      onOpen: function () {
        // Do something...
        //this.$refs.input.selectAll();
      },
      exportingGrid: function () {
        debugger
        this.$refs.myGrid.exportdata('xlsx', 'PostDataExport', 'true');
      },
      exportingGridJson: function () {
        debugger
        this.$refs.myGrid.exportdata('json', 'PostsJsonExport');
      }
    }
  }
</script>

<style scoped>

</style>
