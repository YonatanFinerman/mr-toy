import { GoogleMap } from "../cmps/google-map"

export function AboutUs() {
    return <section className="about main-layout full">
        <img className="full " src={require(`../assets/img/about.PNG`)}  />
        <div className="about-info-cont">
            <h2 className="about-title">ONE TOY STORE</h2>
            <div className="main-about-info">
            <img className="about-img " src={require(`../assets/img/about2.PNG`)}  />
            <div className="about-txt">
                <h3>About us</h3>
                <p>One Shop Toys is the Pakistan's leading dedicated toy retailer, offering a differentiated shopping experience through its family of brands.For more than 8 years, One Shop Toys has been a favorite destination for kids and grown-ups alike with its impressive assortment of toys, games, learning aids, electronics. One Shop Toys offers a broad selection of unique toys, old favorites and great values under one roof. With toy trained staff members always ready to help customers, One Shop Toys the authority when it comes to finding the perfect toy.</p>
            </div>

            </div>

        </div>
        <  GoogleMap />
    </section>
}

