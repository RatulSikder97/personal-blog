const Category = ({ lists }) => {

  return (
    <div>
      {lists.map(list => (
        <div key={list.id}>
          <span>{list.id}. </span>
          <span>{list.categoryName}</span>
        </div>
      ))}
    </div>
  );

}

export default Category;