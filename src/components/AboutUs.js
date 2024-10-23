import Button from 'react-bootstrap/Button';

export default function AboutUs(){
    return(
        <>

        <div className="container-fluid about_us_background_img aboutus_container-fluid new-Comp-top-margin">
            <div className="aboutus_container">
        <h1><center>About Us</center></h1>
        <hr></hr>
        <h3><u>About The Company</u></h3><br></br>
        <h5>Intense Group now constitutes a full service dependent specialist Technical service solution providers committed to meeting the need of its customers for protection from fire and to keep them safe.</h5>
        <br></br>

        <h3><u>Our Mission </u></h3><br></br>
        <h5>Is to expand and continually improve utilizing quality practices. We maintain our superior level of integrity in interactions with business partners and associates. We appreciate our achieved success and we conduct our business as model corporate citizens.</h5>
        <br></br>

        <h3><u>Our Vision</u></h3><br></br>
        <h5>Our Vision is simply to be “industries' premier Technical Solution provider company”. Being the premier company does not mean being the biggest but it does mean being the best in terms of consumer value, customer service and predictable growth.</h5>
        <br></br>

        <h3><u>Why Us?</u></h3><br></br>
        <h5>We owe several factors, which contribute to our tremendous success. Some of them are as under:</h5>
        <div>
            <ul>
                <li>Timely delivery</li>
                <li>Extensive range</li>
                <li>Economical prices</li>
                <li>Premium quality</li>
                <li>Excellent service backup</li>
            </ul>

            <Button variant="outline-danger">Read More</Button>
        </div>
        <br></br>
        </div>

        
        </div>
        </>
    )
}