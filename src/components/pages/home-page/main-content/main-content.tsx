import { useTranslations } from "next-intl";
import GradualSpacing from "~/components/magicui/gradual-spacing";
import LetterPullup from "~/components/magicui/letter-pullup";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { personalData } from "~/config/personal-data";

export const MainContent = () => {
    const content = useTranslations("HomePage");
    const mainHeader = content("mainHeader");
    const subHeader = content("subHeader");
    const userImageAlt = content("userImageAlt");

    return (
        <div className="w-full bold flex flex-col align-top ">
            <Avatar className="w-20 md:w-40 h-20 md:h-40 mb-3 md:mb-4">
                <AvatarImage src={personalData.image} alt={userImageAlt} />
                <AvatarFallback className="text-lg">HE</AvatarFallback>
            </Avatar>
            <div className="ml-0 flex justify-start">
                <LetterPullup delay={0.02} className="text-left" words={mainHeader} />
            </div>
            <div className="ml-0 flex">
                <GradualSpacing
                    delayMultiple={0.1}
                    className="text-lg ml-0 text-left text-zinc-400 dark:text-zinc-500"
                    text={subHeader}
                />
            </div>
        </div>
    );
};
