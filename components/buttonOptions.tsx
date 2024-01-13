import { Button } from "./ui/button";

export default function ButtonOptions() {
  const maths = Math.random();
  return (
    <Button
      variant={"outline"}
      className="h-full px-0 py-0 items-start  flex-col justify-normal"
    >
      <div>
        {" "}
        <div className=" ">place holder</div>
        <div>another placeholder</div>
      </div>
      <div>another thing</div>
    </Button>
  );
}
