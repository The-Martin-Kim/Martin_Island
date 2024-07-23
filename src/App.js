/*eslint-disable*/
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import MainPage from "./components/MainPage";
import CustomFooter from "./components/CustomFooter";

function App() {
    return (
        <div className="App">
            <CustomNavbar/>
            <MainPage/>
            <CustomFooter/>
        </div>
    );
}

export default App;
