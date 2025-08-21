// import { storyblokApi } from "@/lib/storyblok";

// export const revalidate = 180; // ISR 3 min

type Product = {
  id: number;
  name: string;
  price: number;
  image?: { filename: string; alt?: string };
};

// async function getProducts(): Promise<Product[]> {
//   const sb = storyblokApi();
//   const { data } = await sb.get("cdn/stories", {
//     version: "published",
//     content_type: "product",
//     per_page: 100,
//     sort_by: "first_published_at:desc",
//   });
//   return (data.stories || []).map((s: any) => ({
//     id: s.id,
//     name: s.content?.name ?? s.name,
//     price: Number(s.content?.price ?? 0),
//     image: s.content?.image,
//   }));
// }

async function getMockProducts(): Promise<Product[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          name: "Produto 1",
          price: 100,
          image: {
            filename: "/images/placeholder-image.jpg",
            alt: "Produto 1",
          },
        },
        {
          id: 2,
          name: "Produto 2",
          price: 200,
          image: {
            filename: "/images/placeholder-image.jpg",
            alt: "Produto 2",
          },
        },
      ]);
    }, 3000);
  });
}
export default async function ProductsPage() {
  const products = await getMockProducts();

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
            key={p.id}
            style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}
          >
            {p.image?.filename && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.image.filename}
                alt={p.image.alt ?? p.name}
                style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            )}
            <h3 style={{ marginTop: 12 }}>{p.name}</h3>
            <p style={{ fontWeight: 600 }}>R$ {p.price.toFixed(2)}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
