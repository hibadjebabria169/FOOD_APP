import classes from "./ListMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
/*const MEALS = [
  {
    id: "m1",
    name: "Sushi",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",

    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    price: 18.99,
  },
];*/

const ListMeals = () => {
  const [Meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://react-http-1e4fd-default-rtdb.firebaseio.com/meals.json"
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error("SMTHG WRONG");
        }
        const loadedMeals = [];
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
          });
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchMeals();
  }, []);
  if (isLoading) {
    return (
      <section>
        <p> Loading...</p>
      </section>
    );
  }

  if (error) {
    throw new Error("SMTHG WRONG");
  }
  const liste = Meals.map((meal) => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} price={meal.price} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{liste}</ul>
      </Card>
    </section>
  );
};

export default ListMeals;
