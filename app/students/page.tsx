import { Separator } from "@/components/ui/separator";
import { DropdownMenuDemo } from "@/components/dorpdownmenu";
import ButtonOptions from "@/components/buttonOptions";
import userNameQuery from "@/actions/userActions";

export default async function StudentsPage() {
  const userName = await userNameQuery();
  console.log(userName);
  return (
    <div className="min-h-screen grid grid-cols-[20%_1fr] grid-rows-[auto_1fr]">
      <div className=" row-start-1 row-end-3 flex justify-between">
        {" "}
        <div className="grow">space holder</div>
        <Separator orientation="vertical" className=""></Separator>
      </div>
      <div className=" flex flex-col">
        <div className="grow py-2 flex justify-between px-4 items-center">
          <div className="border-b">the first item</div>
          <div className="flex items-center">
            <div className="pr-3">{userName[0].name}</div>
            <DropdownMenuDemo></DropdownMenuDemo>
          </div>{" "}
        </div>
        <div className="border border-border w-full"></div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 m-4">
        <ButtonOptions></ButtonOptions>
        <ButtonOptions></ButtonOptions>
        <ButtonOptions></ButtonOptions>
        <ButtonOptions></ButtonOptions>
      </div>
    </div>
  );
}
