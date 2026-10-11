import { Component, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import PromoBar from "./components/PromoBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import NoticeStack from "./components/NoticeStack";
import Home from "./pages/Home";
import Boutique from "./pages/Boutique";
import Product from "./pages/Product";
import ComposeBox from "./pages/ComposeBox";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import Account from "./pages/Account";
import Story from "./pages/Story";
import Gifts from "./pages/Gifts";
import ShippingFaq from "./pages/ShippingFaq";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-creme px-6 text-center">
          <h1 className="font-title text-3xl font-semibold text-espresso">
            Oups, il manque une pépite…
          </h1>
          <p className="text-espresso/70">
            Recharge la page pour continuer à croquer.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="grain flex min-h-screen flex-col">
            <PromoBar />
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/boutique/" element={<Boutique />} />
                <Route path="/categorie-produit/:slug/" element={<Boutique />} />
                <Route path="/produit/:slug/" element={<Product />} />
                <Route path="/composer-ma-box/" element={<ComposeBox />} />
                <Route path="/panier/" element={<Cart />} />
                <Route path="/commande/" element={<Checkout />} />
                <Route path="/confirmation-de-commande/" element={<Confirmation />} />
                <Route path="/mon-compte/*" element={<Account />} />
                <Route path="/notre-histoire/" element={<Story />} />
                <Route path="/cadeaux-et-entreprises/" element={<Gifts />} />
                <Route path="/livraison-et-faq/" element={<ShippingFaq />} />
                <Route path="/contact/" element={<Contact />} />
                <Route path="/mentions-legales/" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CartDrawer />
            <NoticeStack />
          </div>
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  );
}
