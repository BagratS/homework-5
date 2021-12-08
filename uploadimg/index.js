const selectedImage = document.querySelector("#image .myfile");
selectedImage.addEventListener("input", () => {
    const objectURL = window.URL.createObjectURL(selectedImage.files[0]);
    const preview = document.querySelector("#img-prv");
    preview.setAttribute("src", objectURL);
})