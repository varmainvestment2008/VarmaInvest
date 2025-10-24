import Footer from "../Footer";

export default function FooterExample() {
  const address = {
    line1: "Shop number 5, Radhakrishna Vikhe Patil Complex",
    line2: "Chitali Road Rahata",
    city: "Rahata",
    district: "Ahilyanagar",
    pincode: "423107",
  };

  return (
    <Footer
      firmName="Varma Investments"
      tagline="Your Trusted Partner in Wealth Creation"
      phone="9403034505"
      email="varmainvestment2008@gmail.com"
      address={address}
    />
  );
}
