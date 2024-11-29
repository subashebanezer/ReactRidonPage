import poster from '../../assets/Home/img-7.jpg';
import video from '../../assets/Home/video.mp4';
import ComButton from '../Commen/ComButton';

    const stylePad = {
      padding: "1rem 2rem",
    };

const SectionSix = () => {
  return (
    <>
       {/* <!-- Section-6 --> */}
        <section>
            <div className="container pt-3 py-4 p-5 p-lg-2">
                <div className="row py-md-5 px-3 px-md-5">
                    <div className="col-lg-6 px-0 p-4">
                        <p className="fs-4">About Us</p>
                        <div className="rounded " style={{backgroundColor: "#CC4452",
                        height: "2.4px",
                        width: "9%",
                        marginBottom: "1.7rem" }}></div>
                        <p className="mb-4" style={{fontSize: "1.05rem"}}>Donec rutrum purus in magna commodo, et dapibus est feugiat donec tincidunt massa elit consequat sollicitudin donec tincidunt nulla vulputate fermentum Nulla blandit nisi vel mi tincidunt, id lacinia magna bibendum.</p>
                        <p style={{fontSize: "1.05rem"}}>Sagittis leo a bibendum. Etiam et suscipit est. Vivamus vestibulum mauris quis faucibus accumsan. Integer ac leo vel eros auctor dignissim a eget nisi nunc non tempus orci. Phasellus congue vestibulum tempus duis consequat ex ac.</p>

                        {/* Props */}
                        <ComButton padding={stylePad} content="Learn more >"/>
                    </div>
                    <div className="col-lg-6 d-lg-flex align-items-center">
                        <video controls poster={poster} className="w-100 ">
                            <source src={video} type="video/mp4" />        
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SectionSix
