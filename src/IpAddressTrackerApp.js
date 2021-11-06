import AppProvider from "./context/AppProvider";
import Header from './components/Header';
import MapView from './components/MapView';

function IpAddressTrackerApp() {

    return (
        <AppProvider>
            <div className="App">
                <Header />
                <MapView />
            </div>
        </AppProvider>
    );
}

export default IpAddressTrackerApp;
