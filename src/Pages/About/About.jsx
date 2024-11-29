import Section1 from "../../components/02.About/Section1"
import Section2 from "../../components/02.About/Section2"
import Section3 from "../../components/02.About/Section3"
import Section4 from "../../components/02.About/Section4"
import Footer from "../../components/Commen/Footer"
import NavBar from "../../components/Commen/NavBar"

const About = () => {
  return (
    <>
       <NavBar />
       <main>
       <Section1 />
       <Section2 />
       <Section3 />
       <Section4 />
       </main>      
       <Footer />
    </>
  )
}

export default About
