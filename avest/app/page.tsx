import Topmenu from "./components/Topmenu/Topmenu";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-grow">
        <Topmenu />

        <Main />
      </div>
    </div>
  );
}
