"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Button
        variant={"outline"}
        onClick={() => setTheme("dark")}
        className="text-2xl"
      >
        clickMe
      </Button>
      <Button
        variant={"destructive"}
        onClick={() => setTheme("light")}
        className="bg-background"
      >
        clickMe
      </Button>

      <Button
        variant={"destructive"}
        onClick={() => setTheme("system")}
        className="bg-background"
      >
        clickMe
      </Button>
    </>
  );
}

export default ThemeSwitcher;
