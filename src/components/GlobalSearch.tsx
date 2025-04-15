
import { useState } from "react";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const searchResults = [
    { title: t('pages.home.title'), href: '/' },
    { title: t('pages.services.title'), href: '/layanan' },
    { title: t('pages.portfolio.title'), href: '/portofolio' },
    { title: t('pages.about.title'), href: '/tentang-kami' },
    { title: t('pages.contact.title'), href: '/kontak' },
  ];

  return (
    <>
      <Button
        variant="outline"
        className="w-9 h-9 p-0"
        onClick={() => setOpen(true)}
        aria-label={t('common.search')}
      >
        <Search className="h-4 w-4" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t('common.searchPlaceholder')} />
        <CommandList>
          <CommandEmpty>{t('common.noResults')}</CommandEmpty>
          <CommandGroup heading={t('common.pages')}>
            {searchResults.map((result) => (
              <CommandItem
                key={result.href}
                onSelect={() => {
                  navigate(result.href);
                  setOpen(false);
                }}
              >
                {result.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
