import BookingForm from "./components/Forms/BookingForm";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OfferSlider from "./components/OfferSlider";

const page = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <Header />
      <BookingForm />
      <OfferSlider />
    </div>
  );
};

export default page;
