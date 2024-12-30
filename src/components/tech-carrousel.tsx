import { useTranslations } from "next-intl";
import Image from "next/image";
import { technologies } from "~/config/technologies";
import { Card, CardContent } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
export const TechCaroussel = () => {
    const content = useTranslations("HomePage");
    const technologyHeader = content("technHeader");

    return (
        <div className="block md:hidden">
            <h2 className="text-2xl mb-2 text-left font-bold">{technologyHeader}</h2>
            <Carousel className="w-full max-w-[90%] relative py-0 mx-auto">
                <CarouselContent>
                    {technologies?.map((tech) => (
                        <CarouselItem key={tech.name}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center">
                                        <Image
                                            className="rounded-lg"
                                            src={tech.img}
                                            alt={tech.name}
                                            width={tech.img.width}
                                            height={tech.img.height}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-8" />
                <CarouselNext className="absolute -right-8" />
            </Carousel>
        </div>
    );
};
