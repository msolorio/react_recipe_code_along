import Sidebar from '../components/mainPageComponents/Sidebar';
import CategoryDetail from '../components/mainPageComponents/CategoryDetail';
import RecipesList from '../components/mainPageComponents/RecipesList';

function MainPage() {
  return (
    <div className="main-page">
      <Sidebar />
      <main className="category-info">
        <CategoryDetail />
        <RecipesList />
      </main>
    </div>
  );
}

export default MainPage;
