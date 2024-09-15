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

export default async function Home() {
  const dataBanner = await getBanners();
  const data = await getCategories();

  return (
    <div className="container flex  ">
      <div className="bg-white pl-[50px] pt-[30px] pr-[20px]">
        <h1 className="text-2xl font-bold">Kategoriyalar</h1>
        {data.map((item) => (
          <CategoryCard key={item.id} text={item.text} />
        ))}{" "}
      </div>
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
      </div>{" "}
    </div>
  );
}
