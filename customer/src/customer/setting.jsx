import React from 'react';
import bg_6 from './images/bg_6.jpg'
import Footer from './footer';
import NavBar from './navigator'


export default function Setting(){
  const backgroundImage = {
    backgroundImage: `url(${bg_6})`,
  };
  // const [users, setUsers] = useState([]);

  // useEffect(() =>{
  //   axios.get('http://localhost:5005/api/auth')
  //   .then(products => setProducts(products.data)) 
  //   .catch(err => console.log(err))
  // }, [])
        
  return(
    <>
         <div className="goto-here">
            <NavBar />
          </div>
        {/* <!-- END nav --> */}
    
        <div className="hero-wrap hero-bread" style={backgroundImage}>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-9 ftco-animate text-center">
                  <p className="breadcrumbs"><span className="mr-2"><a href="/home">Home</a></span> <span>Settings</span></p>
                <h1 className="mb-0 bread">Settings</h1>
              </div>
            </div>
          </div>
        </div>
    
        <section className="ftco-section settings-section bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="mb-4">Account Settings</h2>
                  <form action="#" className="bg-white p-5 contact-form">
                    {/* <!-- Add various settings options here --> */}
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" id="username" className="form-control" placeholder="Your Username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" className="form-control" placeholder="Your Password" />
                    </div>
               
          
                    <div className="form-group">
                      <input type="submit" value="Save Settings" className="btn btn-primary py-3 px-5" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Log Out" className="btn btn-primary py-4 px-5" />
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer />
    </>
    )
}
