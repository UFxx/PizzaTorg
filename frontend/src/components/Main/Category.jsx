import Subcategory from './Subcategory';

function Category({protocol, host, port, name, nestedCategories, order, setOrder }) {
  const title = document.title;
  const linearGradient = `linear-gradient(180deg, rgba(${getColor()},1) 0%, rgba(235, 235, 235, 1) 60%)`;

  function getColor() {
    switch (title) {
      case 'МосПироги':
        return '136, 221, 85';
      case 'МосПекарня':
        return '246, 200, 20';
      case 'ПиццаРядом':
        return '255, 255, 255';
      case 'ПиццаШок':
        return '186, 187, 223';
    }
  }

  return (
    <>
      <div className="category">
        <div className="category-title" style={{ background: linearGradient }}>
          <h2>{name}</h2>
        </div>
        {nestedCategories?.map((category) => {
          return (
            <Subcategory
              key={category.id}
              id={category.id}
              protocol={protocol}
              host={host}
              port={port}
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
