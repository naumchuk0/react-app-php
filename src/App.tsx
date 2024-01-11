import React from 'react';
import ContainerDefault from "./containers/default/ContainerDefault.tsx";
import {Route, Routes} from "react-router-dom";
import CategoriesListPage from "./components/categories/list/CategoriesListPage.tsx";
import NoMatch from "./components/pages/NoMatch.tsx";
import CategoryCreatePage from "./components/categories/create/CategoryCreatePage.tsx";
import CategoryDeletePage from './components/categories/delete/CategoryDeletePage.tsx';
import CategoryEditPage from './components/categories/edit/CategoryEditPage.tsx';


const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<ContainerDefault />}>
                <Route index element={<CategoriesListPage />} />
                <Route path={"create"} element={<CategoryCreatePage />} />
                <Route path={"delete"} element={<CategoryDeletePage />} />
                <Route path={"edit"} element={<CategoryEditPage />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
};

export default App;