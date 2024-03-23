import './App.css';
import { ConfigProvider } from 'antd';
import AllRoutes from './routes/AllRoutes';
import "../src/assets/css/style.scss"
import CanvasPage from './pages/CanvasPage.jsx';
import Konva from './pages/Konva.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthContextProvider } from './context/AuthContext.js';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <GoogleOAuthProvider clientId="507594540528-3jehpkured8cgr35vlmssomlqgkq3opm.apps.googleusercontent.com">
          <ConfigProvider
            theme={{
              token: {
                fontFamily: "Poppins",
                colorPrimary: "#F99A1F !important",
                colorTextPlaceholder: "#000",
              },
            }}
          >
            <AllRoutes />
          </ConfigProvider>
        </GoogleOAuthProvider>
      </AuthContextProvider>
      {/* <CanvasPage />  */}
      {/* <Konva /> */}
    </div>
  );
}

export default App;
