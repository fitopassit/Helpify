import classNames from "classnames";

import { TransformCodexComponent } from "@/app/(dashboardPages)/TransformCodexComponent";
import { PATH_PAGES } from "@/app/utils/contants";

import styles from "./page.module.css";

export default function Home() {
  // props из пропсов берем инфу о сервере и отпраляем запрос в бд

  // const [activePath, setActivePath] = useState(() => location.pathname);
  const activePath = "./";

  return (
    <>
      <section
        className={classNames(styles.container, {
          [styles.wideContainer!]: activePath === PATH_PAGES.ALL_CODEXES,
        })}
      >
        <TransformCodexComponent />
      </section>
    </>
  );
}
