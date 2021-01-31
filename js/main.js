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
    const response = await axios.post(
      "http://contact-form-back.herokuapp.com/form",
      data
    );
    console.log(response.data);

    if (response.status === 200) {
      alert("votre message a bien été envoyé");
    } else {
      alert("erreur");
    }
  });
});
