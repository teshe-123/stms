import Theme from "@/components/them";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="min-h-screen bg-background flex items-center flex-col">
      <div className="flex gap-4 items-center justify-end w-full">
        <div className="bg-card text-foreground"> this is it </div>
        <Theme />
      </div>
      <Separator className="my-4 mx-10"></Separator>
    </div>
  );
}
