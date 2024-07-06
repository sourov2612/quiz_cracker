import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Main from './Layout/Main';
import Quiz from './Component/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, 
      children: [
        {path:'/home',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home> }, 
        {path:'/about', element: <About></About>},
        {path:`/home/:quizId`, loader: async ({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        }, element: <Quiz></Quiz>}
      ]
    }
  ])

  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
