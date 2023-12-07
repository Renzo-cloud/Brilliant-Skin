import { brilliantSkinLogo } from "../assets/images";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

const navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Store Partners
        </a>
      ),
    },
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Seller Locator
        </a>
      ),
    },
  ];

  const navItems = [
    { title1: "Home" },
    { title: "Seller Center" },
    { title: "Products" },
    { title: "Collaboration Brands" },
    { title: "Be a Brilliant Family" },
    { title: "About Us" },
    { title2: "Career" },
  ];

  return (
    <div className="hidden w-full md:block md:w-auto">
      <div className="grid-cols-6 border border-pink-600 mx-auto grid w-full">
        <div className="items-center flex justify-between border border-pink-600 px-10 py-2">
          <img src={brilliantSkinLogo} alt="" />
        </div>
        <div className="grid-cols col-span-4 px-12 mx-auto hidden w-full md:block md:w-auto ">
          <ul className="flex text-center items-center justify-center  space-x-10 my-6 font-light cursor-pointer">
            {navItems.map((obj, i) => (
              <>
                <li key={i}>
                  {obj.title1}
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <div>{obj.title}</div>
                    </a>
                  </Dropdown>
                  <div></div>
                  {obj.title2}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="items-center flex justify-between border border-pink-600 px-10 py-2">
          Account
        </div>
      </div>
    </div>
  );
};

export default navbar;
