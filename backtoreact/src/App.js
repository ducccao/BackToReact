import logo from "./logo.svg";
import "./App.css";
import Hi from "./components/Hi";
import StateFull from "./components/StateFull";
import HOC from "./components/HOC";
import RaBS from "./components/RaBS";
import VariationsStateLess from "./components/VariationsStateLess";
import TodoList from "./components/todolist/TodoList";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const ExtendedCpn = HOC(Hi);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ffffff",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  status: {},
  root: {
    color: "white",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
