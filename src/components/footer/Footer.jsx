import restu from "../../assets/images/resturant.png";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-orange-100 w-full px-10 py-7 mt-10">
      <div className="flex flex-wrap px-5 py-5 justify-evenly">
        <div className="flex flex-col max-w-sm gap-5">
          <img src={restu} alt="" width={80} />
          <h3 className="text-red-500 text-xl">Khana Khazana</h3>
          <p className="text-sm max-w-xs">
            Khana Khazana will provide you best resturants near you.
          </p>
        </div>
        <div className="flex flex-col px-3 py-3">
          <h3 className="font-semibold text-xl">Delivery Time</h3>
          <p>9:00am - 10:30pm</p>
          <br />
          <br />
          <p>Tuesday-Sunday</p>
          <p>Open days</p>
        </div>
        <div className="flex flex-col px-3 py-3">
          <h3 className="font-semibold text-xl">Contact</h3>
          <p>Location: Shimla</p>
          <p>Shop Number-07, Sanjauli</p>
          <br />
          <p>Phone: 8839426275</p>
          <p>nishantthakurjune@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 mt-5 lg:mt-2">
          <h2 className="text-xl text-red-500 font-semibold">Newsletter</h2>
          <p>Subscribe our newsletter</p>
          <div className="bg-white flex justify-evenly py-1 border-gray-500">
            <input
              type="email"
              name=""
              id="btn"
              required
              className="px-3 border-gray-500"
            />
            <button
              className="bg-red-500 text-white p-1 rounded-full border-none outline-none m-2"
              id="btn"
            >
              <FaRegPaperPlane className="w-6 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center py-5">
        <div className="text-sm">Copyright - 2024. All Rights Reserved.</div>
        <div className="flex">
          <label className="text-md font-bold">Follow:</label>
          <button>
            <FaFacebook className="text-red-500 text-2xl mx-2" />
          </button>
          <button>
            <FaYoutube className="text-red-600 text-2xl mx-2" />
          </button>
          <button>
            <FaLinkedin className="text-red-600 text-2xl mx-2" />
          </button>
          <button>
            <FaGithub className="text-red-600 text-2xl mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
