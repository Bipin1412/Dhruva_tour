import React from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Home from '@/pages/Home';
// Stubs for the rest, we will write them next
import Fleet from '@/pages/Fleet';
import Services from '@/pages/Services';
import Packages from '@/pages/Packages';
import PackageDetail from '@/pages/PackageDetail';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/fleet" component={Fleet} />
          <Route path="/services" component={Services} />
          <Route path="/packages" component={Packages} />
          <Route path="/packages/:slug" component={PackageDetail} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </WouterRouter>
  );
}

export default App;