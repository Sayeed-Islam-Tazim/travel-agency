import BookingForm from "./components/Forms/BookingForm";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const page = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <Header />
      <BookingForm />
    </div>
  );
};

export default page;
