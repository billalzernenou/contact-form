const $ = document;
$.addEventListener("DOMContentLoaded", () => {
  $.querySelector("#submit").addEventListener("click", async (event) => {
    event.preventDefault();

    const data = {
      firstName: $.querySelector("#first-name").value,
      lastName: $.querySelector("#last-name").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    const response = await axios.post("http://localhost:3000/form", data);
    console.log(response.data);

    if (response.status === 200) {
      alert("votre message a bien été envoyé");
    } else {
      alert("erreur");
    }
  });
});
