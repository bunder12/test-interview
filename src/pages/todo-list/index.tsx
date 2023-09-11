import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { RectangleStackIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const TodoList = () => {
  const [animationParent] = useAutoAnimate();
  const ref: any = useRef<HTMLInputElement>(null);

  const [todoList, setTodoList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingAdd, setIsLoadingAdd] = useState<boolean>(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean | string>(
    false
  );
  const [addTodo, setAddTodo] = useState<string>("");

  const getData = () => {
    axios
      .get(`${process.env.API_KEY}`)
      .then((res) => {
        setTodoList(res.data.data);
        setIsLoading(false);
        setIsLoadingDelete(false);
        setIsLoadingAdd(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddTodo = (e: any) => {
    setIsLoadingAdd(true);
    const data = {
      todoName: addTodo,
      isComplete: false,
    };
    e.preventDefault();
    axios
      .post(`${process.env.API_KEY}`, data)
      .then((res) => {
        console.log(res);
        getData();
        ref.current.value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdateTodo = (id: any, checked: any) => {
    console.log(id, checked);
    const data = {
      isComplete: checked ? true : false,
    };
    console.log(data);

    axios
      .put(`${process.env.API_KEY}/${id}`, data)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteTodo = (id: any) => {
    setIsLoadingDelete(id);
    axios
      .delete(`${process.env.API_KEY}/${id}`)
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-12 h-screen flex flex-col items-center pt-12">
      <h2 className="text-2xl text-secondary font-bold mb-12">Todo List</h2>
      <div className="w-full sm:w-1/2 pb-12">
        <div className="mb-6">
          <ul ref={animationParent} className="flex flex-col gap-6">
            {isLoading && <p>Wait Proggress Get Data...</p>}
            {todoList.map((dataTodo, index) => (
              <li
                key={index}
                className="flex justify-between p-6 shadow-md border-2 border-gray rounded-md relative overflow-hidden hover:bg-gray-100 cursor-pointer"
              >
                <RectangleStackIcon className="w-24 h-24 text-gray absolute right-24 -top-2 opacity-30" />
                <div className="flex gap-6">
                  <input
                    type="checkbox"
                    checked={dataTodo.isComplete}
                    onChange={({ target }) =>
                      handleUpdateTodo(dataTodo._id, target.checked)
                    }
                  />
                  <p className={`${dataTodo.isComplete ? "line-through" : ""}`}>
                    {dataTodo.todoName}
                  </p>
                </div>
                <span
                  onClick={() => handleDeleteTodo(dataTodo._id)}
                  className="cursor-pointer"
                >
                  {isLoadingDelete === dataTodo._id ? (
                    <div className="custom-loader"></div>
                  ) : (
                    <XMarkIcon className="h-6 w-6 text-red" />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={(e) => handleAddTodo(e)} className="flex gap-6">
          <input
            type="text"
            ref={ref}
            placeholder="add todolist"
            onChange={({ target }) => setAddTodo(target.value)}
            className="px-4 border-2 border-gray focus:outline-primary rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-primary text-secondary py-1 px-6 rounded-md"
          >
            {isLoadingAdd ? (
              <span className="flex gap-2">
                <p>Wait..</p>
                <div className="custom-loader" />
              </span>
            ) : (
              <p>add</p>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
