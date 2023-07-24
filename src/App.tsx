import Game from "./components/Game";
import Pizza from "./components/Pizza";
import Cart from "./components/Cart";
import Expandable from "./components/Expandable";
import Form from "./components/Form";
import FormState from "./components/FormState";
import FormHook from "./components/FormHook";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { useState } from "react";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "beras", amount: 10000, category: "Grocerries" },
  ]);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id != id));
  };
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* <h1>Updating State</h1>
      <h3>Exercise 1</h3>
      <Game />

      <h3>Exercise 2</h3>
      <Pizza />

      <h3>Exercise 3</h3>
      <Cart />
      <hr />
      <h1>Expandable Component</h1>
      <Expandable maxChar={100}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis
        non quo unde, necessitatibus molestiae praesentium aliquid voluptates
        autem hic. Cupiditate tempora voluptatibus officia velit ratione hic,
        dolore laudantium maxime porro nulla tempore placeat asperiores ex amet
        quam ducimus unde omnis. Rerum repellendus asperiores explicabo
        cupiditate unde doloremque rem porro.
      </Expandable> */}
      {/* <Form /> */}
      {/* <FormState /> */}
      {/* <FormHook /> */}
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelected={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => onDelete(id)} />
    </div>
  );
};

export default App;
