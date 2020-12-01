const DOMSelectors = {
  grid: document.querySelector(".game-grid"),
};

const query = `https://www.cheapshark.com/api/1.0/deals?`;

const init = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);
      const searchBar = document.getElementById("searchBar");
      console.log(searchBar);
      searchBar.addEventListener("keyup", function(game) {
        console.log("Yes");
        if (game.key === 'Enter'){
          DOMSelectors.grid.innerHTML = '';
          let val = searchBar.value;
          console.log(val);
          
          let data2 = data.filter(d =>
            d.title.toLowerCase().replace(/\s/g, '').includes(val.toLowerCase().replace(/\s/g, ''))    
          );
          console.log(data2);

          data2.forEach(output => {
            DOMSelectors.grid.insertAdjacentHTML(
              "beforeend", 
      
              `<div class="game-card"> 
                <div class="game-card-front">
                </div>
      
                <div class="game-card-back">
                  <img
                  src= ${output.thumb}
                  alt=""
                  class="poster"
                  />
                  <h3 class="game-card-header">${output.title}</h3>
                  <div class="deals">
                    <p class="best-deal">Best Deal</p>
                    <p class="best-deal">${output.salePrice}</p>
                  </div>
                </div>
      
                <div class="regular-price">
                  <p class="normal-price">Normal Price</p>
                  <p class="normal-price">${output.normalPrice}</p>
                </div>
      
                <div class="rating">
                  <p class="deal-rating">Deal Rating</p>
                  <p class="deal-rating">${output.dealRating}</p>
              
                </div>
              </div>`
             
            
          
            );
          });
          
        }
        const searchString = game.target.value; 
      });

   
  } catch (error) {
    console.log(error);
  }
}
init();
