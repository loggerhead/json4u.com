import * as React from "react";
import dynamic from "next/dynamic";
import { Container, ContainerContent, ContainerHeader } from "@/components/Container";
import Graph from "@/components/graph";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@xyflow/react/dist/style.css";
import { Table2, Text, Waypoints } from "lucide-react";
import { useTranslations } from "next-intl";

const Editor = dynamic(() => import(/* webpackChunkName: "monaco-editor" */ "@/components/Editor"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export default function RightPanel() {
  const t = useTranslations();

  return (
    <Tabs asChild defaultValue="text">
      <Container>
        <ContainerHeader>
          <div className="flex items-center">
            <Switch></Switch>
            <Button>{t("Compare")}</Button>
          </div>
          <TabsList className="ml-auto">
            <TabsTrigger value="text" className="text-zinc-600 dark:text-zinc-200">
              <Text className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="graph" className="text-zinc-600 dark:text-zinc-200">
              <Waypoints className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="table" className="text-zinc-600 dark:text-zinc-200">
              <Table2 className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </ContainerHeader>
        <ContainerContent>
          <TabsContent value="text" className="w-full h-full m-0 data-[state=inactive]:hidden" forceMount>
            <Editor />
          </TabsContent>
          {/* fix https://github.com/radix-ui/primitives/issues/1155#issuecomment-2041571341 */}
          <TabsContent value="graph" className="w-full h-full m-0 data-[state=inactive]:hidden" forceMount>
            <Graph />
          </TabsContent>
          <TabsContent value="table" className="w-full h-full m-0 data-[state=inactive]:hidden" forceMount>
            <p>1</p>
          </TabsContent>
        </ContainerContent>
      </Container>
    </Tabs>
  );
}
