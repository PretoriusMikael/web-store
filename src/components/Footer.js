import React from "react";
import "../styles/Footer.css"; // Import the CSS file for styling the footer
import mailIcon from "../icons/mail.svg" // Import the mail icon SVG
import phoneIcon from "../icons/phone.svg" // Import the phone icon SVG
import instagramIcon from "../icons/instagram.svg" // Import the Instagram icon SVG

export default function Footer() {
    return (
        <div className="footer"> {/* Footer container */}
            <h4>Contact Details:</h4> {/* Footer heading */}
            <ul className="contact-list"> {/* List of contact details */}
                <li>
                    <img src={mailIcon} alt="Email icon" className="contact-icon" /> {/* Mail icon */}
                    Email address: info@sneakershop.com
                </li>
                <li>
                    <img src={phoneIcon} alt="Telephone icon" className="contact-icon" /> {/* Phone icon */}
                    Telephone: +123 456 7890
                </li>
                <li>
                    <img src={instagramIcon} alt="Instagram icon" className="contact-icon" /> {/* Instagram icon */}
                    Instagram: <a target="_blank" href="https://www.instagram.com/mikael_pretorius/" className="contact-links">@sneakershop</a> {/* Instagram link */}
                </li>
            </ul>
            <a target="_blank" href="https://github.com/PretoriusMikael" title="mail icons" className="credits">
                Mock website created by Mikael Pretorius {/* Credits link */}
            </a>
        </div>
    );
}
