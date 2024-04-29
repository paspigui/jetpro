import React from "react";
import { Button } from "@/components/Button";
import { deletePlace } from "@/db/crud";

const PopUp = ({ isVisible }) => {
  const handleDelete = async () => {
    await deletePlace();
  };
  if (!isVisible) return null;
  return (
    <div className=" fixed inset-0 backdrop-blur-sm flex justify-center items-center">
      <div className=" w-[600px]">
        <div className="bg-white rounded">Attention</div>
        <Button className=" text-red-500 text-end">X</Button>
        <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
        <div className="flex justify-end gap-4">
          <Button className="bg-red-500 text-white" onClick={handleDelete}>
            Oui
          </Button>
          <Button className="bg-gray-500 text-white">Non</Button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
