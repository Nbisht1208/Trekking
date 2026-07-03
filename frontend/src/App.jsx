import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/layout/ProtectedRoute';
import AdminLayout from './components/layout/AdminLayout';
import AdminPackageForm from './pages/admin/AdminPackagesForm';

// Public pages
import Home from './pages/Home';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPackages from './pages/admin/AdminPackages';
import AdminBookings from './pages/admin/AdminBookings';
import AdminContacts from './pages/admin/AdminContacts';
import AdminGallery from './pages/admin/AdminGallery';
import AdminFAQ from './pages/admin/AdminFAQ';

const App = () => {
  return (
    <Routes>
      {/* Public routes with Navbar + Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:slug" element={<PackageDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Admin login (no layout) */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Protected admin routes, wrapped in sidebar layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/packages" element={<AdminPackages />} />
          <Route path="/admin/packages/new" element={<AdminPackageForm />} />
          <Route path="/admin/packages/edit/:id" element={<AdminPackageForm />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/faq" element={<AdminFAQ />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;