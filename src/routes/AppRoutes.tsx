import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import TaskDetailPage from "../pages/TaskDetailPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/detalle/:taskId" element={<TaskDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
