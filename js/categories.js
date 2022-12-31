function ftech() {
  fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const aly = data
        .map((item) => {
          console.log(data.item);
          return `
       <div class="categoryy">
       
       <button type="button" class="btn  btn-outline-dark" >${item}</button>

</div>
        `;
        })
        .join("");

      document.querySelector(".categories").innerHTML = aly;
    });
}

ftech();
