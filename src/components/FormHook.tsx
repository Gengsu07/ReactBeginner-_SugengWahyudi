import React, { FormEvent, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nama: z.string().min(5, { message: "Nama Kurang Panjang" }),
  age: z
    .number({ invalid_type_error: "Harus diisi" })
    .min(18, { message: "Umur anda kurang wkwk" }),
});

//biar tidak dobel sama deklarasi interface typescript, maka kita bisa infer dari zod
type FormData = z.infer<typeof schema>;

// interface FormData {
//   nama: string;
//   age: number;
// }

const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="nama" className="form-label">
          Nama
        </label>
        <input
          {...register("nama")}
          type="text"
          id="nama"
          className="form-control"
        />
        {errors.nama && <p className="text-danger">{errors.nama.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormHook;
