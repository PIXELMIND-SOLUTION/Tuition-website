import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <Courses />
            <Testimonials />
            <Pricing />
            <About />
            <Contact />
            <Footer />
        </>
    )
}
export default HomePage;