import "./Card.css";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";

function Card(props) {
  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState("");
  const [showPopup, isShowPopup] = useState(false);
  const [currentPizza, isCurrentPizza] = useState("");
  const [currentPizzaID, isCurrentPizzaID] = useState(0);
  const [currentPizzaTopping, isCurrentPizzaTopping] = useState(true);
  const [currentPizzaSize, setCurrentPizzaSize] = useState("regular");
  const [pizzasToBuy, setPizzasToBuy] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);

  function filterHandler(e) {
    setFilter(e.target.name);
    console.log(filter);
  }

  function sortingHandler(e) {
    setSorting(e.target.name);
    console.log(sorting);
  }

  const allPizzas = props.pizzas;
  let filteredPizzas = allPizzas;
  let sortedPizzas = filteredPizzas;

  if (filter === "") {
    filteredPizzas = allPizzas;
  }
  if (filter === "ov") {
    filteredPizzas = allPizzas.filter((currentPizza) => {
      return currentPizza.isVeg === true;
    });
  }
  if (filter === "onv") {
    filteredPizzas = allPizzas.filter((currentPizza) => {
      return currentPizza.isVeg === false;
    });
  }
  if (sorting === "") {
    sortedPizzas = filteredPizzas;
  }
  if (sorting === "rhtl") {
    sortedPizzas = filteredPizzas.sort((first, second) => {
      return second.rating - first.rating;
    });
  }
  if (sorting === "rlth") {
    sortedPizzas = filteredPizzas.sort((first, second) => {
      return first.rating - second.rating;
    });
  }
  if (sorting === "phtl") {
    sortedPizzas = filteredPizzas.sort((first, second) => {
      return second.price - first.price;
    });
  }
  if (sorting === "plth") {
    sortedPizzas = filteredPizzas.sort((first, second) => {
      return first.price - second.price;
    });
  }
  console.log(currentPizzaSize);
  function toppingSelectHandler(e) {
    setSelectedToppings([...selectedToppings, e.target.value]);
    console.log(selectedToppings);
  }

  function finalAdd() {
    const tempPizza = {
      id: { currentPizzaID },
      size: { currentPizzaSize },
      toppings: { selectedToppings },
    };
    setPizzasToBuy([...pizzasToBuy,tempPizza]);
    isShowPopup(false);
    isCurrentPizza('');
    isCurrentPizzaID(0);
    isCurrentPizzaTopping(true);
    setCurrentPizzaSize('regular');
    setSelectedToppings([]);
    console.log(pizzasToBuy);
  }

  function closePopup() {
    isShowPopup(false);
    isCurrentPizza('');
    isCurrentPizzaID(0);
    isCurrentPizzaTopping(true);
    setCurrentPizzaSize('regular');
    setSelectedToppings([]);
  }
  return (
   <div>
     <div className="orderPage">
      <div className="stayOnTop">
        <div className="menu">
          <button className="menuButton" name="plth" onClick={sortingHandler}>
            Price : Low to High
          </button>
          <button className="menuButton" name="phtl" onClick={sortingHandler}>
            Price : High to Low
          </button>
          <button className="menuButton" name="rlth" onClick={sortingHandler}>
            Rating : Low to High
          </button>
          <button className="menuButton" name="rhtl" onClick={sortingHandler}>
            Rating : High to Low
          </button>
          <button className="menuButton" name="ov" onClick={filterHandler}>
            Only Veg
          </button>
          <button className="menuButton" name="onv" onClick={filterHandler}>
            Only Non-Veg
          </button>
          <button className="menuButton" name="" onClick={filterHandler}>
            All Pizzas
          </button>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="selectedPizza">
              <h2 className="selectedPizzaName">{currentPizza}</h2>
              <button className="popupControls" onClick={finalAdd}>
                Add it
              </button>

              <button className="popupControls" onClick={closePopup}>
                Cancel
              </button>
            </div>
            <div className="customizations">
              <div className="selectSize">
                <p>
                  <b>Select size:</b>
                </p>
                <div className="sizeOption">
                  <input
                    type="radio"
                    id="regular"
                    name="size"
                    value="regular"
                    onChange={(e) => setCurrentPizzaSize(e.target.value)}
                  />
                  <label for="regular">Regular</label>
                </div>
                <div className="sizeOption">
                  <input
                    type="radio"
                    id="medium"
                    name="size"
                    value="medium"
                    onChange={(e) => setCurrentPizzaSize(e.target.value)}
                  />
                  <label for="medium">Medium</label>
                </div>
                <div className="sizeOption">
                  <input
                    type="radio"
                    id="large"
                    name="size"
                    value="large"
                    onChange={(e) => setCurrentPizzaSize(e.target.value)}
                  />
                  <label for="large">Large</label>
                </div>
              </div>
              <div className="chooseToppings">
                <p>
                  <b>Choose Topping(s):</b>
                </p>
                <div className="toppingOption">
                  <input
                    type="checkbox"
                    id="redPepper"
                    name="redPepper"
                    value="redPepper"
                    onChange={toppingSelectHandler}
                  />
                  <label for="redPepper">Red Pepper</label>
                </div>
                <div className="toppingOption">
                  <input
                    type="checkbox"
                    id="onion"
                    name="onion"
                    value="onion"
                    onChange={toppingSelectHandler}
                  />
                  <label for="onion">Onion</label>
                </div>
                <div className="toppingOption">
                  <input
                    type="checkbox"
                    id="grilledMushroom"
                    name="grilledMushroom"
                    value="grilledMushroom"
                    onChange={toppingSelectHandler}
                  />
                  <label for="grilledMushroom">Grilled Mushroom</label>
                </div>
                <div className="toppingOption">
                  <input
                    type="checkbox"
                    id="extraCheese"
                    name="extraCheese"
                    value="extraCheese"
                    onChange={toppingSelectHandler}
                  />
                  <label for="extraCheese">Extra Cheese</label>
                </div>
                <div className="toppingOption">
                  <input
                    type="checkbox"
                    id="blackOlive"
                    name="blackOlive"
                    value="blackOlive"
                    onChange={toppingSelectHandler}
                  />
                  <label for="blackOlive">Black Olive</label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {sortedPizzas.map((currentPizza) => {
        const { id, name, description, isVeg, rating, price, img_url } =
          currentPizza;
        const toppingVariety = currentPizza.toppings[0].isRadio;
        let descriptionBreak;
        for (let i = 0; i < description.length; i++) {
          if (description.charAt(i) === " " && i > 35) {
            descriptionBreak = i + 1;
            break;
          }
        }

        function addButtonHandler() {
          if (toppingVariety === true) {
            alert(
              "This Pizza Has Only Single-Topping Option. The First Topping You Choose Will Be Added To Your Order. In Case Of Any Confusion, You May Cancel The Pop-Up and Select Again"
            );
          }
          isShowPopup(true);
          isCurrentPizza(name);
          isCurrentPizzaID(id);
          isCurrentPizzaTopping(toppingVariety);
        }
        return (
          <div className={`fullCard ${isVeg ? "veg" : "nonVeg"}`}>
            <div className="allDetails">
              <div className="name detail">{name}</div>
              <div className="price detail">{price}</div>
              <div className="rating detail">{rating}</div>
              <div className="description detail">
                {description.substring(0, descriptionBreak)}
                <br></br>
                {description.substring(descriptionBreak)}
              </div>
              <div className="addOption detail">
                <div className="addWidget" onClick={addButtonHandler}>
                  ADD
                </div>
              </div>
            </div>
            <img className="image" src={img_url}></img>
          </div>
        );
      })}
    </div>
    <Footer pizzasToBuy={pizzasToBuy}></Footer>
   </div>
    
  );
}

export default Card;
