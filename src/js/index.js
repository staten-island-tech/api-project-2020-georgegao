////import { genres } from "./genre";

const DOMSelectors = {
  grid: document.querySelector(".game-grid"),
};

///const key = `1fd276ec57b4baedacae00246e5cf4b7`;
const query = `https://www.cheapshark.com/api/1.0/deals?`;

const init = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);
      const searchBar = document.getElementById("searchBar");
      console.log(searchBar);
      searchBar.addEventListener("keyup", function() {
        console.log("a");
    
        //const searchString = e.target.value; //
      });
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        
        
        `<div class="game-card">
      <div class="game-card-front">

      </div>
      <div class="game-card-back">
        <h3 class="game-card-header">${game.title}</h3>
        <div class="deals">
          <p class="best-deal">Best Deal</p>
          <p class="best-deal">${game.salePrice}</p>
        </div>

        <div class="regular-price">
          <p class="normal-price">Normal Price</p>
          <p class="normal-price">${game.normalPrice}</p>
        </div>

        <div class="rating">
          <p class="deal-rating">Deal Rating</p>
          <p class="deal-rating">${game.dealRating}</p>
        
      </div>
    </div>`
    
      );
   
  } catch (error) {
    console.log(error);
  }
};
init();
