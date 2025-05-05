"use client";

import { postFakeProduct } from "./endpoint";

export default function Page() {
  return (
    <div>
      <p>Enviar produto</p>
      <button onClick={() => postFakeProduct()}>Enviar</button>
    </div>
  );
}
