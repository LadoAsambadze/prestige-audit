"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { useLocale } from "next-intl";

import Image from "next/image";
import { locales, usePathname, useRouter } from "./routing";

type Locale = "en" | "ka" | "ru";

const LanguageFlags: Record<Locale, { src: string; alt: string }> = {
  en: { src: "/svg/English.svg", alt: "English" },
  ka: { src: "/svg/Georgian.svg", alt: "Georgian" },
  ru: { src: "/svg/Russian.svg", alt: "Russian" },
};

const languageNames: Record<Locale, string> = {
  en: "English",
  ka: "ქართული",
  ru: "Русский",
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    router.push(pathname, { locale: newLocale });
  };

  const currentFlag = LanguageFlags[currentLocale];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 rounded-full h-9 px-3 py-3 bg-white text-black border border-input hover:bg-gray-50 hover:text-accent-foreground">
          <Image
            src={currentFlag.src}
            alt={currentFlag.alt}
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <ChevronDownIcon className="h-4 w-4 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2">
        <div className="grid gap-1">
          {(locales as unknown as Locale[]).map((locale) => {
            const flag = LanguageFlags[locale];
            return (
              <Button
                key={locale}
                variant="ghost"
                className="justify-start gap-2 w-full"
                onClick={() => handleLocaleChange(locale)}
                disabled={locale === currentLocale}
              >
                <Image
                  src={flag.src}
                  alt={flag.alt}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span>{languageNames[locale]}</span>
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
