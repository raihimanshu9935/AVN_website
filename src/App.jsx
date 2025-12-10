import React from "react";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import TopBar from "./components/TopBar.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Academics from "./components/Academics.jsx";
import Admissions from "./components/Admissions.jsx";
import CampusLife from "./components/CampusLife.jsx";
import Gallery from "./components/Gallery.jsx";
import FAQ from "./components/FAQ.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import AuthModal from "./components/AuthModal.jsx";
import Dashboard from "./components/Dashboard.jsx"; // 🔹 NEW import

function App() {
  const [authOpen, setAuthOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);

  // First load: check localStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("sps_auth_user");
      if (saved) {
        setCurrentUser(JSON.parse(saved));
        setAuthOpen(false);
      } else {
        // pehli baar aaye ho to login popup dikhao
        setAuthOpen(true);
      }
    } catch (err) {
      console.error("Error reading auth from localStorage", err);
      setAuthOpen(true);
    }
  }, []);

  function handleAuthSuccess(user) {
    // user = { role, name, email, classOrSubject, loggedInAt }
    setCurrentUser(user);
    try {
      localStorage.setItem("sps_auth_user", JSON.stringify(user));
    } catch (err) {
      console.error("Error saving auth to localStorage", err);
    }
    setAuthOpen(false);
  }

  function handleLogout() {
    setCurrentUser(null);
    try {
      localStorage.removeItem("sps_auth_user");
    } catch (err) {
      console.error("Error removing auth from localStorage", err);
    }
    // logout ke baad login popup dubara dikha sakte ho
    setAuthOpen(true);
  }

  return (
    <div className="min-h-screen text-slate-100">
      <AnimatedBackground />

      <div className="relative min-h-screen flex flex-col">
        <TopBar />
        <Navbar
          onLoginClick={() => setAuthOpen(true)}
          currentUser={currentUser}
          onLogout={handleLogout}
        />

        <main className="flex-1 pt-2 pb-12">
          <Hero />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
            {/* 🔹 Dashboard sirf jab user login ho */}
            {currentUser && (
              <Dashboard currentUser={currentUser} onLogout={handleLogout} />
            )}

            <WhyChooseUs />
            <Academics />
            <Admissions />
            <CampusLife />
            <Gallery />
            <FAQ />
            <Testimonials />
            <Contact />
          </div>
        </main>

        <Footer />
        <BackToTop />

        {/* Auth Modal */}
        <AuthModal
          isOpen={authOpen}
          onClose={() => setAuthOpen(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      </div>
    </div>
  );
}

export default App;




