"use client";

import { useForm } from "react-hook-form";

export default function CreateProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("Form data:", data);
    // Gửi API đến backend NestJS của bạn ở đây
    // const response = await fetch("/api/products", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    // const result = await response.json();
    // console.log("API response:", result);
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Tạo sản phẩm mới</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Tên sản phẩm</label>
          <br />
          <input {...register("name", { required: true })} />
          {errors.name && <p style={{ color: "red" }}>Bắt buộc</p>}
        </div>

        <div>
          <label>SKU</label>
          <br />
          <input {...register("sku")} />
        </div>

        <div>
          <label>Số lượng</label>
          <br />
          <input
            type="number"
            {...register("quantity", { valueAsNumber: true })}
          />
        </div>

        <div>
          <label>Giá</label>
          <br />
          <input
            type="number"
            step="0.01"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && <p style={{ color: "red" }}>Bắt buộc</p>}
        </div>

        <button type="submit">Lưu</button>
      </form>
    </div>
  );
}
