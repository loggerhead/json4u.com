import * as React from "react";
import { Container, ContainerContent, ContainerHeader } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function LeftContainer() {
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return (
    <Container>
      <ContainerHeader>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
              {t("Search Command")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput className="h-9" />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map(framework => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={currentValue => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="flex items-center ml-auto">
          <Button>{t("Format")}</Button>
          <Button>{t("Minify")}</Button>
          <Button>{t("Escape")}</Button>
          <Button>{t("Unescape")}</Button>
        </div>
      </ContainerHeader>
      <Separator />
      <ContainerContent></ContainerContent>
    </Container>
  );
}
