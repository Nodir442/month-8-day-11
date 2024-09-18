import { getCategories } from "@/service/query/get-categories";
import CategoryCard from "./_components/categoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getBanners } from "@/service/query/get-banner";
import Shopping from "@/app/icons/shopping";
import { getNotebooks, getSport } from "@/service/query/get-products";
import ProductCard from "./_components/productCard";
import StarGreen from "@/app/icons/starGreen";

export default async function Home() {
  const dataBanner = await getBanners();
  const data = await getCategories();
  const dataNotebook = await getNotebooks();
  const dataSport = await getSport();

  return (
    <>
      <div className="container flex">
        <div className="bg-white p-[25px]">
          <h1 className="text-2xl font-bold">Kategoriyalar</h1>
          {data.map((item) => (
            <CategoryCard
              key={item.id}
              text={item.text}
              id={item.id}
              name={item.name}
            />
          ))}{" "}
        </div>
        <div>
          <div className="ml-6 bg-white p-4">
            <Carousel>
              <CarouselContent>
                {dataBanner.map((item) => (
                  <CarouselItem key={item.id}>
                    <img src={item.img} alt="img" />
                  </CarouselItem>
                ))}{" "}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <div className="my-[30px] ml-6 flex items-center gap-4">
              <Shopping />
              <h3 className="text-[32px] font-bold">Yangi mahsulotlar</h3>
            </div>
            <div className="ml-6 flex flex-wrap gap-3">
              {dataNotebook.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  id={item.id}
                  brand={item.brand}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="my-[30px] ml-6 flex items-center gap-4">
              <StarGreen />
              <h3 className="text-[32px] font-bold">
                Chegirmadagi mahsulotlar
              </h3>
            </div>
            <div className="ml-6 flex flex-wrap gap-3">
              {dataSport.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  brand={item.brand}
                  id={item.id}
                />
              ))}
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
