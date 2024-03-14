const fetchDataStore = async (params) => {
  const { category, subcategory } = params;
  const data = await fetch(
    `https://api.tienda.com/products?category=${category}&subcategory=${subcategory}`
  );
  const items = await data.json();
  return items;
};

const SlugStore = async ({ params }) => {
  const itemsToRender = await fetchDataStore(params);
  return (
    <div>
      {itemsToRender.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SlugStore;
