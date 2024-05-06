import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseDetails from "./components/CourseDetails.js";
import CourseListing from "./components/CourseListing";
import StudentDashboard from "./components/StudentDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CourseListing />,
  },
  {
    path: "/course/:id",
    element: <CourseDetails />,
  },
  {
    path: "/dashboard",
    element: <StudentDashboard />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
