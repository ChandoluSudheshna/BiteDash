const FooterComponent = () => {
    return(
        <div className="footer">
            <div className="footer1">
                <h2>For better experience, download the BiteDash app now</h2>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"/>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"/>
            </div>
            <div className="footer2">
                <div className="footerdiv">
                    <ul className="footercol">
                        <li className="footerheader">BiteDash</li>
                        <li>&copy; 2024 BiteDash.</li>
                        <li>All right Reserved</li>
                    </ul>
                </div>
                <div className="footerdiv">
                    <ul className="footercol">
                        <li className="footerheader">Company</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>BiteDash One</li>
                        <li>BiteDash Instamart</li>
                        <li>BiteDash Genie</li>
                    </ul>
                </div>
                <div className="footerdiv">
                    <ul className="footercol">
                        <li className="footerheader">Contact us</li>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                        <li className="footerheader">Legal</li>
                        <li>Terms & Conditions</li>                        
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
                <div className="footerdiv">
                    <ul className="footercol">
                        <li className="footerheader">We deliver to:</li>
                        <li>Bangalore</li>                        
                        <li>Gurgaon</li>
                        <li>Hyderabad</li>
                        <li>Delhi</li>
                        <li>Mumbai</li>
                        <li>Pune</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;