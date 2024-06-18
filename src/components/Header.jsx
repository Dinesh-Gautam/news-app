export function Header() {
  return (
    <header>
      <h1>Latest News</h1>
      <CategoryList />
      <Search />
    </header>
  );
}

function CategoryList() {
  const categories = ["Business", "Sports", "World", "Politics", "Breaking"];
  return (
    <div>
      {categories.map((category) => (
        <button key={category}> {category} </button>
      ))}
    </div>
  );
}

function Search() {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <button>Go</button>
    </div>
  );
}
