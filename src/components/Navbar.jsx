import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      }
  })
  navTween.fromTo('nav', {backgroundColor: "transparent"}, {
    backgroundColor: "#000000/50", 
    backgroundFilter: "blur(10px)",
    duration: 1, 
    ease: "power1.inOut"
  });
    // navTween.fromTo('nav a', {color: "#fff"}, {color: "#000", duration: 0.5, ease: "power1.inOut"}, "<");
    // navTween.fromTo('nav img', {opacity: 0}, {opacity: 1, duration: 0.5, ease: "power1.inOut"}, "<");
});
  return (
    <nav>
      <div>
        <a href="#hero" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" />
            <p>Velvet Pour</p>
        </a>

        <ul>
            {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
