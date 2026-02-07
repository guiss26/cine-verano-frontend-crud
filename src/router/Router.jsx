import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import App from "../App"
import MovieForm from "../components/MovieForm"

const routerMovies = createBrowserRouter ([{
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <App />
        },
        {
            path: "/movie-form-create",
            element: <MovieForm />
        },
        {
            path: "/movie-form-update",
            element: <MovieForm />
        }
    ]
}])

export default routerMovies