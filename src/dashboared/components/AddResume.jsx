import { React, useState } from "react";
import { PlusSquare } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function AddResume({ sure, setSure, handleEditProfile }) {
  const [openDialog, setOpenDialog] = useState(false);
  const handleAddResume = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <div
        onClick={handleAddResume}
        className="mt-12 mx-8 flex items-center justify-center w-[200px] h-[220px] bg-secondary rounded-md cursor-pointer p-8  hover:scale-95 hover:shadow-md transition-all  overflow-x-auto"
      >
        <PlusSquare />
      </div>
      {openDialog && (
        <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  setOpenDialog(false); // Close the AlertDialog
                  handleEditProfile?.(); // Open the Edit Profile dialog
                }}
              >Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
