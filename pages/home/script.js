import "./style.css";
import { ref } from "vue";
const posts = ref([]);

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    posts.value = await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export { posts, fetchPosts };
