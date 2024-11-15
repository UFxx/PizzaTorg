import Subcategory from './Subcategory';

function Category({ host, name, nestedCategories, order, setOrder }) {
  return (
    <>
      <div className="category">
        <div className="category-title">
          <p>{name}</p>
        </div>
        {nestedCategories?.map((category) => {
          return (
            <Subcategory
              key={category.id}
              id={category.id}
              host={host}
              name={category.name}
              order={order}
              setOrder={setOrder}
            />
          );
        })}
      </div>
    </>
  );
}

export default Category;
