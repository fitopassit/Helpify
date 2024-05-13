import AtlantaLogo from "@/app/assets/serversLogo/AtlantaLogo";
import ChicagoLogo from "@/app/assets/serversLogo/ChicagoLogo";
import DetroitLogo from "@/app/assets/serversLogo/DetroitLogo";
import LasVegasLogo from "@/app/assets/serversLogo/LasVegasLogo";
import LosAngelesLogo from "@/app/assets/serversLogo/LosAngelesLogo";
import MiamiLogo from "@/app/assets/serversLogo/MiamiLogo";
import NewYorkLogo from "@/app/assets/serversLogo/NewYorkLogo";
import SanDiegoLogo from "@/app/assets/serversLogo/SanDiegoLogo";
import SanFranciscoLogo from "@/app/assets/serversLogo/SanFranciscoLogo";
import WashingtonLogo from "@/app/assets/serversLogo/WashingtonLogo";

import styles from "@/app/(dashboardPages)/components/servers/ServerLogo.module.css"
//TODO: Уточнить название папок servers, users с большой ли буквы?

type Server =
  | "New York"
  | "Detroit"
  | "Chicago"
  | "San Francisco"
  | "Atlanta"
  | "San Diego"
  | "Los Angeles"
  | "Miami"
  | "Las Vegas"
  | "Washington"
  | string;
//TODO: Поправить типы

const ServersList: Record<Server, JSX.Element> = {
  "New York": <NewYorkLogo />,
  Detroit: <DetroitLogo />,
  Chicago: <ChicagoLogo />,
  "San Francisco": <SanFranciscoLogo />,
  Atlanta: <AtlantaLogo />,
  "San Diego": <SanDiegoLogo />,
  "Los Angeles": <LosAngelesLogo />,
  Miami: <MiamiLogo />,
  "Las Vegas": <LasVegasLogo />,
  Washington: <WashingtonLogo />,
};

const ServerLogo = ({ name }: { name: Server }) => {
  return <div className={styles.logoContainer}>{ServersList[name]}</div>;
};

export default ServerLogo;
