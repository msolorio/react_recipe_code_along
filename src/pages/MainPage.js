import Sidebar from '../components/mainPageComponents/Sidebar';
import CategoryDetail from '../components/mainPageComponents/CategoryDetail';
import Recipes from '../components/mainPageComponents/Recipes';

function MainPage() {
  return (
    <div className="main-page">
      <Sidebar />
      <main className="category-info">
        <CategoryDetail />
        <Recipes />
      </main>
    </div>
  );
}

export default MainPage;
