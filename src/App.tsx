import { Footer, Header } from "compositions";
import { AllProviders } from "data";
import { Demo } from "./examples/Demo";
import { FAQs } from "./examples/FAQs";
import { PanelSections } from "./examples/PanelSections";
import { PricingGrid } from "./examples/PricingGrid";
import { ProductDetails } from "./examples/ProductDetails";
import { ProductGrid } from "./examples/ProductGrid";
import { SignIn } from "./examples/SignIn";
import { WelcomeHero } from "./examples/WelcomeHero";

function App() {
  const isSignInPage = typeof window !== "undefined" && window.location.hash.startsWith("#signin");

  if (isSignInPage) {
    return (
      <AllProviders>
        <SignIn />
      </AllProviders>
    );
  }

  return (
    <AllProviders>
      <Header />
      <Demo />
      <WelcomeHero />
      <PanelSections />
      <PricingGrid />
      <FAQs />
      <ProductDetails />
      <ProductGrid />
      <Footer />
    </AllProviders>
  );
}

export default App;
