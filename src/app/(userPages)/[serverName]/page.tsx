import { SearchComponent } from "@/app/(userPages)/[serverName]/components/SearchComponent";

interface Params {
  serverName: string;
}

const Page = ({ params }: { params: Params }) => {
  const serverName = params.serverName;
  const ALLOWED_SERVE_NAME = [
    "test",
    "New_York",
    "Detroit",
    "Chicago",
    "San_Francisco",
    "Atlanta",
    "San_Diego",
    "Los_Angeles",
    "Miami",
    "Las_Vegas",
  ];
  // const router = useRouter()
  // console.log("props", serverName);
  // const {name} = router.query;
  if (!ALLOWED_SERVE_NAME.includes(serverName)) {
    return <p>Недопустимый ID</p>;
  }
  return (
    <>
      <SearchComponent />
    </>
  );
};

export default Page;
