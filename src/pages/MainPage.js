import Sidebar from '../components/mainPageComponents/Sidebar';
import CategoryDetail from '../components/mainPageComponents/CategoryDetail';
import RecipesList from '../components/mainPageComponents/RecipesList';
import categoryData from '../categoryData';

function MainPage() {
  return (
    <div className="main-page">
      <Sidebar categories={categoryData} />
      <main className="category-info">
        <CategoryDetail category={categoryData[0]} />
        <RecipesList recipes={categoryData[0].recipes} />
      </main>
    </div>
  );
}

export default MainPage;
