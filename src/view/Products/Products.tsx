import Iphone from "../../assets/images/iphone.svg";
import Watch from "../../assets/images/watch.svg";
import Camera from "../../assets/images/camera.svg";
import Headset from "../../assets/images/headset.svg";
import { Button, Card } from "antd";
import { appTitle, routerPath } from "../../utils/helper";
import useURLSearchParamConfig from "../../customHooks/useURLSearchParamConfig";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Products: React.FC = () => {
  const cards = [
    {
      name: "Iphone 14 pro max",
      price: "999",
      image: Iphone,
    },
    {
      name: "Black magic camera",
      price: "2999",
      image: Camera,
    },
    {
      name: "Wrist watch",
      price: "399",
      image: Watch,
    },
    {
      name: "Airpods max silver",
      price: "599",
      image: Headset,
    },
    {
      name: "Iphone 14 pro max",
      price: "999",
      image: Iphone,
    },
    {
      name: "Black magic camera",
      price: "2999",
      image: Camera,
    },
    {
      name: "Wrist watch",
      price: "399",
      image: Watch,
    },
    {
      name: "Airpods max silver",
      price: "599",
      image: Headset,
    },
    {
      name: "Iphone 14 pro max",
      price: "999",
      image: Iphone,
    },
    {
      name: "Black magic camera",
      price: "2999",
      image: Camera,
    },
    {
      name: "Wrist watch",
      price: "399",
      image: Watch,
    },
    {
      name: "Airpods max silver",
      price: "599",
      image: Headset,
    },
  ];
  document.title = `All Products ${appTitle}`;
  const navigate = useNavigate();

  const { setSearchParams } = useURLSearchParamConfig();
  const handleBuyNow = useCallback(() => {
    try {
      // const searchParameters = Object.fromEntries(
      //   Object.entries({
      //     name: cards.map((x) => x.name),
      //   }).filter(([, value]) => value)
      // );
      // setSearchParams(searchParameters);
      navigate(routerPath.SingleProduct);
    } catch (error) {
      console.log(error);
    }
  }, [cards, navigate, setSearchParams]);

  return (
    <div>
      <h2 className="text-xl font-semibold">Products</h2>
      <div className="py-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-y-6 sm:grid-cols-2 grid-cols-1 justify-items-center py-6">
          {cards.map((items, index) => {
            return (
              <Card
                className="lg:w-[90%] flex items-center justify-center text-center"
                key={index}
              >
                <img src={items.image} alt="" />
                <h2>{items.name}</h2>
                <h2>${items.price}</h2>
                <div className="pt-2">
                  <Button
                    onClick={handleBuyNow}
                    block
                    className="bg-black text-white"
                  >
                    Buy Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Products;
