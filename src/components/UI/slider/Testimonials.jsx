import ava01 from "../../../assets/imagesAll/ava-1.jpg";
import ava02 from "../../../assets/imagesAll/ava-2.jpg";
import ava03 from "../../../assets/imagesAll/ava-3.jpg";
import ImageSlider from "./ImageSlider";

function Testimonials() {
  const slides = [
    {
      image: ava01,
      name: "Saurav Kanwar",
      description:
        "They give you fast delivery and good food esay to order it was awesome app and you can order in web also so i love it.",
    },
    {
      image: ava02,
      name: "Gopi Verma",
      description:
        "Fresh and hygienic foods. Really loved it..",
    },
    {
      image: ava03,
      name: "Gaurav Sharma",
      description:
        "We have most wonderful food at Fagu. The food tasted like home made. The portions are big. One dish is ample for two people. The service was excellent. The ambience is good.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-2 py-2">
        <h3 className="text-red-500 text-3xl font-semibold mb-3">Testimonial</h3>
        <p className="text-3xl">What our <span className="font-bold text-red-500">customers</span> are saying</p>
      </div>
      <div className="max-w-lg md:max-w-xl mx-auto mt-10 lg:max-w-2xl">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default Testimonials;
