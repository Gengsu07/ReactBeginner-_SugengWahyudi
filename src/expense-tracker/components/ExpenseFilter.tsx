import React from "react";
import categoryList from "../Categories";

interface Props {
  onSelected: (category: string) => void;
}

const ExpenseFilter = ({ onSelected }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelected(e.target.value)}
    >
      <option value="">All Categories</option>
      {categoryList.map((cat) => (
        <option key={cat}>{cat}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
