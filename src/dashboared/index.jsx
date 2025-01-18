import Header from "@/components/custom/Header";
import React, { useState } from "react";
import AddResume from "./components/AddResume";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Dashboared() {
  const [sure, setSure] = useState(false);
  function handleEditProfile() {
    console.log("edit profile" , sure);
    setSure(true);
  }
  return (
    <div>
      <Header />
      <h2 className="p-8 font-bold text-4xl md:text-3xl lg:text-4xl title-font">
        My Resume
      </h2>
      <p className="px-8 capitalize md:text-xl">
        start creating resumes for your next jobs
      </p>
      <div className="flex md:flex-row flex-col ">
        <AddResume
          sure={sure}
          setSure={setSure}
          handleEditProfile={handleEditProfile}
        />
      </div>

      {sure && (
        <Dialog open={sure} onOpenChange={setSure}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input
                  id="name"
                  // defaultValue="Pedro Duarte"
                  placeholder="ex . Full stack developer"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
