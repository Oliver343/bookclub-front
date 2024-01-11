<template>
  <div>
    <table>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Image</th>
      </tr>
        <tr v-for="(singleBook, index) in answer" :key="index">
             <td>{{singleBook.Title}}</td>
             <td>{{singleBook.Description}}</td>
             <td>{{singleBook.Image}}</td>
        </tr>
    </table>
  </div>



  <label>Title</label>
  <br />
  <input v-model="title">
  <br />

  <label>Description</label>
  <br />
  <input v-model="description">
  <br />

  <label>Image</label>
  <br />
  <input v-model="image">
  <br />

  <button @click="addEntry">Add Book</button>
  <button @click="delAll">Delete All</button>
</template>

<script>
import axios from "axios";


export default {
  name: "App",
  data() {
    return {
      answer: {},
      title: "",
      description: "",
      image: "",
    };
  },
  methods: {
    async getResponse() {
      const { data } = await axios.get("http://127.0.0.1:8000/");
      this.answer = data;
    },
    async addEntry() {
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:8000/add/",
          {
            Title: this.title,
            Description: this.description,
            Image: this.image,
          }
        );
        this.post = data;
      } catch (error) {
        console.log(error);
      }
    },
    async delAll() {
      try {
        const { data } = await axios.delete(
          "http://127.0.0.1:8000/del/",
          {
            Title: this.title,
            Description: this.description,
            Image: this.image,
          }
        );
        this.post = data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  beforeMount() {
    this.getResponse();
  },
};
</script>