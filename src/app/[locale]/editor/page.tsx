import { useTranslations } from "next-intl";
import Counter from "./counter";

export default function Index() {
  const t = useTranslations();
  return (
    <div>
      <h1>{t("title")}</h1>
      <Counter></Counter>
    </div>
  );
}
