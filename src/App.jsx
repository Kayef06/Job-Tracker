import { BrowserRouter,Route,Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ApplicationsPage from "./pages/ApplicationsPage";
import ApplicationDetailsPage from "./pages/ApplicationDetailsPage";
import Setting from "./pages/Setting";
import {Dashboard} from "./pages/Dashboard";


export default function App() {
  
  return (
    // <main className="dashboard">
    //   <Header />

    //   
    //   
    // </main>

    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}
        >
        <Route path= "/" element={<Dashboard/>}
        />
        <Route path="/application" element={<ApplicationsPage/>}
        />
        <Route path="/application/:id" element={<ApplicationDetailsPage/>}
        />
        <Route path="/setting" element={<Setting/>}
        />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




// npx json-server db.json --port 3000