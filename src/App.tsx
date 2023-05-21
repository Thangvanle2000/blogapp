/** @format */

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import NotificationPage from './pages/notificationPage';
import ProtectedRoutes from './common/protectedRoute';
const HomePage = React.lazy(() => import('./pages/homePage'));
const StoriesForm = React.lazy(() => import('./components/storiesForm'));
const EditArticles = React.lazy(() => import('./components/editArticles'));
const LikePostUser = React.lazy(() => import('./components/likePostUser'));
const StoriesUser = React.lazy(() => import('./components/savePost'));
const IntroPage = React.lazy(() => import('./pages/introPage'));
const ListPage = React.lazy(() => import('./pages/listsPage'));
const LoginPage = React.lazy(() => import('./pages/loginPage'));
const PostUser = React.lazy(() => import('./pages/postUser'));
const ProfilePage = React.lazy(() => import('./pages/profilePage'));
const ProfileUserPost = React.lazy(() => import('./pages/profileUserPost'));
const StoriesPage = React.lazy(() => import('./pages/storiesPage'));
const TagPage = React.lazy(() => import('./pages/tagArticlesPage'));
const RegisterPage = React.lazy(() => import('./pages/registerPage'));

function App() {
  return (
    <div>
      <React.Suspense fallback={'Loading...'}>        
        <ToastContainer />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<HomePage />} />
         
          <Route path="/profileUserPost" element={<ProfileUserPost />} />
          <Route path="/list" element={<ListPage />}>
            <Route path="likePost" element={<LikePostUser />} />
            <Route path="savePost" element={<StoriesUser />} />
          </Route>
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/newPost" element={<StoriesForm />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post" element={<PostUser />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/tag" element={<TagPage />} />
          <Route path="/editArticle" element={<EditArticles />} />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
