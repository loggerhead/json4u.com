"use client";

import * as React from "react";
import { useEffect } from "react";
import { Nav } from "@/components/nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { init as jqInit, jq } from "@/lib/jq";
import { cn } from "@/lib/utils";
import {
  ArrowDownNarrowWide,
  Braces,
  ChevronLeft,
  ChevronRight,
  CopyIcon,
  Download,
  FileUp,
  Settings,
  Share2,
  SquareStack,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function SideNav() {
  const t = useTranslations();
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  useEffect(() => {
    jqInit();
  }, []);

  return (
    <div className={cn("flex flex-col", isCollapsed && "transition-all duration-300 ease-in-out")}>
      <div className={cn("flex items-center justify-center pt-2")}>
        <Avatar className={"w-[30px] h-[30px]"}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        btns={[
          { title: t("Import"), icon: FileUp },
          { title: t("Export"), icon: Download },
        ]}
      />
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        btns={[
          { title: t("Auto Format"), icon: Braces, active: true },
          { title: t("Auto Sort"), icon: ArrowDownNarrowWide },
          { title: t("Nest Parse"), icon: SquareStack },
        ]}
      />
      <Nav
        isCollapsed={isCollapsed}
        className={"mt-auto"}
        btns={[
          { title: t("Share"), icon: Share2, popoverContent: <SharePopoverContent /> },
          {
            title: t("Settings"),
            icon: Settings,
            onClick: async () => {
              const r = await jq('{"foo": 1}', ".foo");
              console.log(r);
            },
          },
        ]}
      />
      <Nav
        isCollapsed={isCollapsed}
        btns={[
          {
            title: t(isCollapsed ? "Expand" : "Collapse"),
            icon: isCollapsed ? ChevronRight : ChevronLeft,
            onClick: () => setIsCollapsed(!isCollapsed),
          },
        ]}
      />
    </div>
  );
}

function SharePopoverContent() {
  const t = useTranslations();

  return (
    <div className={"w-[360px]"}>
      <div className="flex flex-col space-y-2 text-center sm:text-left">
        <h3 className="text-lg font-semibold">{t("Share")}</h3>
        <p className="text-sm text-muted-foreground">{t("share_desc")}</p>
      </div>
      <div className="flex items-center space-x-2 pt-4">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
            {t("Link")}
          </Label>
          <Input id="link" defaultValue="https://json4u.com/zh/editor?share=aUuXS" readOnly className="h-9" />
        </div>
        <Button type="submit" size="sm" className="px-3">
          <span className="sr-only">{t("Copy")}</span>
          <CopyIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
