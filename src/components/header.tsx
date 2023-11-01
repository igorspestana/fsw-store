import {MenuIcon, ShoppingCartIcon} from "lucide-react"
import { Button } from "./ui/button";
import { Card } from "./ui/card";

function Header () {
    return (
      <Card className="flex justify-between p-[1.875rem]">
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Hyper </span>
          Store
        </h1>

        <Button size="icon" variant="outline">
          <ShoppingCartIcon />
        </Button>
      </Card>
    );
}
 
export default Header;