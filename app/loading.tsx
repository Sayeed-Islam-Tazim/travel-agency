import { Spinner } from "@/components/ui/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <Spinner className="size-32 text-emerald-400" />
    </div>
  );
};

export default loading;
