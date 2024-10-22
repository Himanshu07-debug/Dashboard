import './App.css';
import Dashboard from './Dashboard';
import DashboardLayoutBasic from './DashboardLayoutBasic';

function App() {
  return (

    <div className='main'>
      <DashboardLayoutBasic className='drawer' />

      <Dashboard className='dashboard' />

    </div>

  );
}

export default App;
