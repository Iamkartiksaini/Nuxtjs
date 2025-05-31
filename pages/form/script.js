const fields = [
  {
    label: "First Name",
    options: {
      required: true,
    },
    placeholder: "Enter Your First Name",
  },
  {
    label: "Last Name",
    options: {
      required: true,
    },
    placeholder: "Enter Your Last Name",
  },
  {
    label: "Email",
    options: {
      required: true,
    },
    placeholder: "Enter Your Email",
  },
  {
    label: "Password",
    options: {
      required: true,
    },
    placeholder: "Type Your Password...",
  },
];

const message = ref("Hello, Vue 3!");
const count = ref(0);
const increment = () => {
  count.value++;
};

console.log("count script renders", count.value);

export default { message, count, increment, fields };
