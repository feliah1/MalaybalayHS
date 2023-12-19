import React from "react"
import bg_6 from './images/bg_6.jpg';
import Footer from './footer';
import NavBar from './navigator'

export default function About (){
    const backgroundImage = {
        backgroundImage: `url(${bg_6})`,
      };
      return(
    <>
        <div className="goto-here">
                
        <NavBar />
        {/* <!-- END nav --> */}

        <div className="hero-wrap hero-bread" style={backgroundImage}>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <p className="breadcrumbs"><span className="mr-2"><a href="/home">Home</a></span> <span>About</span></p>
                <h1 className="mb-0 bread">About Us</h1>
            </div>
            </div>
        </div>
        </div>

        <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">

                        <div className="col-md-7 py-md-5 wrap-about pb-md-5 ftco-animate">
                <div className="heading-section-bold mb-4 mt-md-5">
                    <div className="ml-md-0">
                        <h2 className="mb-4">Established Sinced 2003</h2>
                    </div>
                </div>
                <div className="pb-md-5 pb-4">
                                <p>It started when a mother from the mountain’s knocked on the door of the business owner, Ms. Perla Rubio. The mother is selling a hand-woven fabric so her family could have some food on the table. Even without any use of it, Ms. Perla started buying the fabrics just so she could help her feed the families in the mountain. Eventually, an idea came to her to make something out of the materials so she could provide a livelihood for the community. The idea of helping build the Malaybalay’s Choice Handicrafts and with the help of DOST project who supported the production of abaca-based choice handicraft called “Pinaksoy”, a binukid term that means “clothing, the business expand became the thriving social enterprise that showcases various products and accessories from abaca such as mats, slippers, wallets and bags.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
</>
)
}