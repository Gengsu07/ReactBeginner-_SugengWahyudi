import React from "react";
import categoryList from "../Categories";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "harus diisi minimal 3 karakter" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "harus diisi" })
    .min(99, { message: "Belanja minimal 100 rupiah" }),
  category: z.enum(categoryList, {
    errorMap: () => ({ message: "harus dipilih" }),
  }),
});

type formData = z.infer<typeof schema>;
interface Props {
  onSubmit: (data: formData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          {" "}
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description")}
        />
      </div>
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", { valueAsNumber: true })}
        />
      </div>
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          <option value=""></option>
          {categoryList.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
