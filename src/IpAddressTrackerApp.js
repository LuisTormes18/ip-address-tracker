import AppProvider from "./context/AppProvider";
import Header from './components/Header';

function IpAddressTrackerApp() {

    return (
        <AppProvider>
            <div className="App">
                <Header />
            </div>
        </AppProvider>
    );
}

export default IpAddressTrackerApp;
