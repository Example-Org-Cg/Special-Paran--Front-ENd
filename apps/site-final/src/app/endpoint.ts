"use server";

import { revalidateTag } from "next/cache";

export async function postFakeProduct() {
  const productData = {
    name: "Product 500",
    slug: "product-5000",
    status: "Published",
    seoTitle: null,
    seoDescription: null,
    content: null,
    details: [
      {
        text: "Detalhes do Product 1",
      },
    ],
    contentServices: null,
    type: "passeio",
    typeOfPeriod: "Compartilhado",
    saleType: "pre-reserva",
    price: null,
    updated_at: new Date().toISOString(),
    updated_by: "intentus_admin",
    user_Id: 0,
    highlights: null,
    additionalConfiguration: { collect: false },
    Product_MainImage: {
      create: [
        {
          url: "https://picsum.photos/200/300?random",
        },
      ],
    },
  };

  const res = await fetch("http://localhost:4000/example", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  revalidateTag("tours");

  console.log("res", res);
}
