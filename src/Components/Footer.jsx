import { brilliantSkinLogo } from "../assets/images";

const footer = () => {
  return (
    <footer className="shadow dark:bg-gray-900">
      <hr className="my-6  sm:mx-auto lg:my-8" />
      <div className="grid grid-cols-4 w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="ml-16">
          <img className="mb-6" src={brilliantSkinLogo} alt="" />
          <p className="mb-6">
            35 J.Sta.Catalina St, Sitio Caingin <br /> 1960 Morong, Philippines
          </p>
          <p className="mb-6">
            (02) 213-6461 <br /> contact@brilliantskinessentials.ph
          </p>
          <p>Working time 8:00AM-5:00PM</p>
        </div>
        <div className="ml-16">
          <h1 className="mt-8 text-pink-700">Information</h1>
          <ul className="space-y-4 mt-4">
            <li>BSE Collaboration</li>
            <li>Seller Locator</li>
            <li>Brilliant K</li>
            <li>Brilliant Colours</li>
            <li>Skinfit</li>
          </ul>
        </div>
        <div className="ml-16">
          <h1 className="mt-8 text-pink-700">Brilliant Offers</h1>
          <ul className="space-y-4 mt-4">
            <li>Be our Distributor</li>
            <li>Be our Franchisee</li>
            <li>Be our Reseller</li>
          </ul>
        </div>
        <div className="ml-16">
          <h1 className="mt-8 text-pink-700">Privacy Policy</h1>
          <ul className="space-y-4 mt-4">
            <li>Website Privacy Policy</li>
            <li>Request for Return</li>
            <li>Legibility and Validity</li>
            <li>Non-Returnable Items</li>
            <li>Transportation Changes</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;
