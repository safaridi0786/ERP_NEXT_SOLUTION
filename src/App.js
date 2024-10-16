import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <Router>
        <SnackbarProvider
          maxSnack={5}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          classes={{
            containerRoot:
              "bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-100",
          }}
        >
          <AppRoutes />
        </SnackbarProvider>
      </Router>
    </>
  );
}

export default App;
