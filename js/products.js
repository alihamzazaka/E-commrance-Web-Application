function ftech() {
  count = "";
  fetch("https://dummyjson.com/products?limit=100")
    .then((res) => res.json())

    .then((data) => {
      console.log(data);
      const aly = data.products
        .map((item) => {
          console.log(item.id);
          return `
        <div style="float:left; padding: 0; margin-left: 70px;">
              <div class="product-div card shadow  border-0">
         <div style=" margin-top:20px; display:flex">                    
       <p style="padding-left:20px">ID: ${item.id}</p>
         <h6 style="padding-left:90px">
       
       Category: ${item.category}
       </h6>
       </div>
       <hr>
              <div style="display: flex;">
              <div>


              
        <img src=${item.images[0]} alt"img" class="image-div " >

        </div>
        <div>
        <h6 >${item.title}</h6>
        <p style="margin-top:-10px; font-size:13px">${item.brand}</p>
        <div class="overflow">
         <p  class="overflow-auto example">${item.description}</p>
        </div>
       <h5>Price: ${item.price} $</h5>
    
        
        
        
          <table>
    <tr>
      <td>
      <p style="margin-top:-6px;">Ratings: ${item.rating} Stars</p>
    </td>
      <td rowspan="3">
        <button type="button" 
        class="btn btn-outline-warning button-view" 
        onclick="fetchProduct(${item.id})"
        >View More</button>
        
      </td>

    </tr>
    <tr>
      <td>
      <p style="margin-top:-16px;">Discount%: ${item.discountPercentage}</p>

      </td>

    </tr>
    <tr>
       <td>
      <p style="margin-top:-16px;">In stock units: ${item.stock}</p>

      </td>
    </tr>
  </table>
  

        </div>
        </div>

       </div>

       </div>
        `;
        })
        .join("");

      document.querySelector(".product").innerHTML = aly;
    });
}

ftech();

function fetchProduct(i) {
  fetch("https://dummyjson.com/products/${i}")
    .then((res) => res.json())

    .then((item) => {
      console.log(item);
      const alyy = data((item) => {
        console.log(item);
        return `
        <img src=${item.images} >

             `;
      });

      document.querySelector(".product-view").innerHTML = alyy;
      location.replace("../html/productview.html");
    });
}
