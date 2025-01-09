import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { BottomNav } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Create } from './pages/Create';
import { Packages } from './pages/Packages';
import { Vehicles } from './pages/Vehicles';
import { Wallet } from './pages/Wallet';
import { Settings } from './pages/Settings';

import LoginPage from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import BookingsPage from './pages/BookingsPage';
import HelpCenterPage from './pages/HelpCenterPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import RewardsPage from './pages/RewardsPage';
import OffersPage from './pages/OffersPage';
import PartnerPage from './pages/PartnerPage';
import EditProfilePage from './pages/EditProfilePage';
import Footer from './components/layout/Footer';
// new
import PackageItinerary from './pages/PackageItinerary';
import Booking from './pages/Booking';
import RegistrationPage from './pages/RegistrationPage';
import { Notifications } from './pages/Notifications';
import Dashboard from './agent_pages/Dashboard';
import Orders from './agent_pages/orders/Orders';
import Earnings from './agent_pages/earnings/Earnings';
import PackageStats from './agent_pages/stats/PackageStats';
import AgentPackages from './agent_pages/packages/AgentPackages';
import { AgentNotifications } from './agent_pages/AgentNotifications';
import OrderDetails from './agent_pages/orders/OrderDetails';
//agentprofile
import AgentProfile from './agent_pages/AgentProfile';
import AgentEditProfile from './agent_components/AgentProfile/AgentEditProfile';
import AgentHelpCenter from './agent_components/AgentProfile/AgentHelpCenter';
import AgentRewards from './agent_components/AgentProfile/AgentRewards';
import AgentOffers from './agent_components/AgentProfile/AgentOffers';


import AddPackage from './agent_pages/packages/AddPackage';
import AgentNavbar from './agent_components/layout/AgentNavbar';
import AgentBottomNav from './agent_components/layout/AgentBottomNav';
import UserLogin from './pages/UserLogin';

// Helper Component for Navbar Selection
function ConditionalNavbar() {
  const location = useLocation();

  // Routes starting with "/agent" will show the agent navbar
  const isAgentRoute = location.pathname.startsWith('/agent');

  return isAgentRoute ? <AgentNavbar /> : <Navbar />;
}

// Helper Component for BottomNav Selection
function ConditionalBottomNav() {
  const location = useLocation();

  // Routes starting with "/agent" will show the agent bottom navigation
  const isAgentRoute = location.pathname.startsWith('/agent');

  return isAgentRoute ? <AgentBottomNav /> : <BottomNav />;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        {/* Conditional Navbar */}
        <ConditionalNavbar />

        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/accountsettings" element={<AccountSettingsPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/PackageItinerary" element={<PackageItinerary />} />
          <Route path="/package-itinerary/:pkgId" element={<PackageItinerary />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/signup" element={<RegistrationPage />} />

          {/* Agent Routes */}
          <Route path="/agent/dashboard" element={<Dashboard />} />
          <Route path="/agent/addpackage" element={<AddPackage />} />
          <Route path="/agent/agentpackages" element={<AgentPackages />} />
         
          <Route path="/agent/orders" element={<Orders />} />
          <Route path="/agent/orders/:id" element={<OrderDetails />} />{/* Dynamic route for OrderDetails */}
      
          <Route path="/agent/earnings" element={<Earnings />} />
          <Route path="/agentstats/packages" element={<PackageStats />} />
          <Route path="/agent/notifications" element={<AgentNotifications />} />

          {/* agentprofile */}
           <Route path="/agent/agentprofile" element={<AgentProfile />} />
                    <Route path="/agent/agent-edit-profile" element={<AgentEditProfile />} />
                    <Route path="/agent/agent-help-center" element={<AgentHelpCenter />} />
                    <Route path="/agent/agent-rewards" element={<AgentRewards />} />
                    <Route path="/agent/agent-offers" element={<AgentOffers />} />

          {/* authentication and stuff */}
          <Route path="/signup" element={<RegistrationPage/>}/>
          <Route path="/signin" element={<UserLogin/>}/>
        </Routes>

        {/* Conditional Bottom Navigation */}
        <ConditionalBottomNav />
      </div>
    </Router>
  );
}

export default App;
