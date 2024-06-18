"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { Container, ContainerContent, ContainerHeader } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useTranslations } from "next-intl";

const Editor = dynamic(() => import(/* webpackChunkName: "monaco-editor" */ "@/components/Editor"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function LeftPanel() {
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
  const headers = {
    import: <div></div>,
  };

  return (
    <Container>
      <ContainerHeader mode={"import"} modeHeaders={headers}>
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
      <ContainerContent>
        <Editor />
      </ContainerContent>
    </Container>
  );
}
