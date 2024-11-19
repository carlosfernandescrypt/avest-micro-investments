import {
  Home,
  Mail,
  Coins,
  Grid2x2,
  Gitlab,
  Tickets,
  Grid,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-20 bg-gray-800 text-white flex-shrink-0">
      <div className="m-6">
        <Gitlab className="" />
      </div>
      <div className="m-6">
        <Home className="mb-6" />
        <Mail className="mb-6" />
        <Coins className="mb-6" />
        <Grid2x2 className="mb-6" />
        <Tickets className="mb-6" />
        <Grid className="mb-6" />
      </div>
    </aside>
  );
}
