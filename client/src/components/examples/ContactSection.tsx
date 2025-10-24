import ContactSection from "../ContactSection";

export default function ContactSectionExample() {
  const address = {
    line1: "Shop number 5, Radhakrishna Vikhe Patil Complex",
    line2: "Chitali Road Rahata",
    city: "Rahata",
    district: "Ahilyanagar",
    pincode: "423107",
    mapUrl:
      "https://www.google.com/maps/embed?pb=1!1m18!1m12!1m3!1d3753.123!2d74.4789!3d19.7123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQyJzQ0LjMiTiA3NMKwMjgnNDQuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  };

  return (
    <ContactSection
      firmName="Varma Investments"
      phone="9403034505"
      email="varmainvestment2008@gmail.com"
      address={address}
    />
  );
}
