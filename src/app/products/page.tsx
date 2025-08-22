// import { storyblokApi } from "@/lib/storyblok";

import { getStoryblokApi } from "@storyblok/react";
// import { PRODUCTS_MOCK } from "./mock";

// export const revalidate = 180; // ISR 3 min

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: { filePath: string; alt?: string };
};

async function getProducts(): Promise<Product[]> {
  const client = getStoryblokApi();
  const { data } = await client.getStories({
    starts_with: "products/",
    version: "published",
  });
  return data.stories.map((story) => {
    const content = story.content;
    return {
      ...content,
      image: story.content.image
        ? {
            filePath: story.content.image.filename,
            alt: story.content.image.alt,
          }
        : undefined,
    } as Product;
  });
}

// async function getMockProducts(): Promise<Product[]> {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(PRODUCTS_MOCK as Product[]);
//     }, 3000);
//   });
// }

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main style={{ padding: 24 }}>
      <section
        style={{
          padding: "24px 0",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <h1>Products (ISR)</h1>
        <p>
          Last Update:{" "}
          {new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
            timeStyle: "long",
          }).format(new Date())}
        </p>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <article
            key={p.name}
            style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}
          >
            {p.image?.filePath && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.image.filePath}
                alt={p.image.alt ?? p.name}
                style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <h3 style={{ marginTop: 12 }}>{p.name}</h3>
              <p style={{ fontWeight: 600 }}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(p.price)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
