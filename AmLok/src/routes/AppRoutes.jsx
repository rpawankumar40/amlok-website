import { Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Solutions from '../pages/Solutions';
import Industries from '../pages/Industries';
import Insights from '../pages/Insights';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import ServiceDetail from '../pages/ServiceDetail';
import SolutionDetail from '../pages/SolutionDetail';
import IndustryDetail from '../pages/IndustryDetail';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        {/* <Route path="/solutions" element={<Solutions />} /> */}
        <Route path="/solutions/:slug" element={<SolutionDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        {/* <Route path="/insights" element={<Insights />} /> */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
