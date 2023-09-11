import BlankLayout from "@/components/layouts/BlankLayout";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div className="h-screen flex justify-center items-center container mx-auto px-4 md:px-12">
      <div className="w-full sm:w-1/2 gap-6 flex flex-col">
        <h1 className="text-3xl font-bold text-secondary">Test Interview</h1>
        <Link href="/todo-list">
          <div className="flex justify-between p-6 shadow-md border-2 border-gray rounded-md relative overflow-hidden hover:bg-gray-100 cursor-pointer">
            <h2>Todo List</h2>
          </div>
        </Link>
        <Link href="/problem-solving">
          <div className="flex justify-between p-6 shadow-md border-2 border-gray rounded-md relative overflow-hidden hover:bg-gray-100 cursor-pointer">
            <h2>Problem Solving</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

Index.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default Index;
