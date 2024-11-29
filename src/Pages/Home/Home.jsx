import SectionFour from "../../components/01.Home/SectionFour";
import SectionSecond from "../../components/01.Home/SectionSecond";
import SectionThree from "../../components/01.Home/SectionThree";
import SectionTop from "../../components/01.Home/SectionTop";
import NavBar from "../../components/Commen/NavBar";
import CarouselOne from "../../components/01.Home/CarouselOne.json";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SectionFive from "../../components/01.Home/SectionFive";
import SectionSix from "../../components/01.Home/SectionSix";
import Footer from "../../components/Commen/Footer";
import SectionSeven from "../../components/01.Home/SectionSeven";
import CarouselTwo from "../../components/01.Home/CarouselTwo";
import SectionEight from "../../components/01.Home/SectionEight";

const options = {
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

const options1 = {
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};


const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <SectionTop />
        <SectionSecond />
        <SectionThree />
        <section>
          <div className="container d-flex flex-column align-items-center justify-content-center px-5 pt-2    ">
            <p className="fs-3 mb-3 pt-5">Our Fleet</p>
            <div
              style={{
                backgroundColor: "#CC4452",
                height: "2.4px",
                width: "4%",
              }}
            ></div>
            <p
              className=" font-family-Reg text-center pb-4"
              style={{ fontSize: "1.05rem", paddingTop: "1.9rem" }}
            >
              Choose from a wide selection of boats ranging from luxury motor
              yachts to classic sailing yachts, we have every type of <br />
              boat available to meet your needs. We also take custom orders and
              will help you acquire a specific yacht.
            </p>
            <OwlCarousel className="owl-theme owl-1" {...options}  > 
            {CarouselOne.map((item) => {
              return (            
                <div className="item " key={item.id}  >
                  <SectionFour
                    amount={item.amount}
                    brand={item.brand}
                    img={item.img}
                    capacity={item.capacity}
                    bags={item.bags}
                  />
                </div>
              );
            })}
            </OwlCarousel>
          </div>
        </section>
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <section>
          <div className="container d-flex flex-column align-items-center justify-content-center px-5 pt-2">
              <p className="fs-3 mb-3 pt-5" >Our Fleet</p>
              <div className="mb-5" style={{backgroundColor: "#CC4452",
              height: "2.4px",
              width: "4%"}}></div>
              <OwlCarousel className="owl-theme owl-2" {...options1}  > 
            {CarouselTwo.map((item) => {
              return (            
                <div className="item " key={item.id}  >
                  <SectionEight img = {item.img}
                  title = {item.title}
                  date = {item.date}
                  comments = {item.comments}
                  description = {item.description}  />
                </div>
              );
            })}
            </OwlCarousel>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );      
};

export default Home;
