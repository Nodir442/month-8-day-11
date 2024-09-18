import ShoppingWhite from "../icons/shoppingWhite";
import { Button } from "@/components/ui/button";

export function ProductButton() {
  return (
    <Button className="flex w-full items-center gap-2 py-2 text-sm sm:text-base">
      <ShoppingWhite />
      Savatga
    </Button>
  );
}
