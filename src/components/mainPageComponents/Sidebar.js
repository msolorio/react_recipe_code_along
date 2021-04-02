function Sidebar(props) {
  const categoriesList = props.categories.map((category) => {
    return (
      <li className="sidebar-card" key={category._id}>
        {category.categoryName}
      </li>
    );
  });

  return (
    <aside className="sidebar">
      <ul>
        {categoriesList}
      </ul>
    </aside>
  );
}

export default Sidebar;
