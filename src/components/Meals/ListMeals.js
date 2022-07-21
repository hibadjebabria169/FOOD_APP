import classes from "./ListMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const MEALS = [
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
];

const ListMeals = () => {
  const liste = MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name= {meal.name} price = {meal.price}/>);
  return (
    <section className={classes.meals}>
      <Card>
        {" "}
        <ul>{liste}</ul>{" "}
      </Card>
    </section>
  );
};

export default ListMeals;
