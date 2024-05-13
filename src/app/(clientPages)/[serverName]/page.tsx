import { SearchComponent } from "@/app/(clientPages)/[serverName]/components/SearchComponent";

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
