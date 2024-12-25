import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainPage from './components/MainPage';

export default function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <MainPage />
      </div>
    </div>
  )
}

