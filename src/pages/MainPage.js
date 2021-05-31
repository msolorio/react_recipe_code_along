import React from 'react';
import Sidebar from '../components/mainPageComponents/Sidebar';
import CategoryDetail from '../components/mainPageComponents/CategoryDetail';
import RecipesList from '../components/mainPageComponents/RecipesList';
import categoryData from '../categoryData';

class MainPage extends React.Component {
  state = {
    categoryIndex: 1
  }

  render() {
    return (
      <div className="main-page">
        <Sidebar categories={categoryData} />
        <main className="category-info">
          <CategoryDetail category={categoryData[this.state.categoryIndex]} />
          <RecipesList recipes={categoryData[this.state.categoryIndex].recipes} />
        </main>
      </div>
    );
  }
}

export default MainPage;
