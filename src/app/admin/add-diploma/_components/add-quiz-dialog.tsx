"use client";

import { Plus, CircleArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddQuestion from "./add-question";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AddQuizDialog() {
  return (
    <Dialog>
      <DialogContent className="gap-10 max-w-[752px]">
        <DialogHeader className="flex items-center justify-self-start">
          <DialogTitle className="flex items-center text-2xl font-bold text-brand gap-2">
            <CircleArrowLeft />
            Add Quiz
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-12">
          <div className="flex flex-col flex-1 gap-2">
            <Label className="text-gray-500 font-semibold">Add Photo</Label>
            <div className="flex items-center justify-center w-12 h-10 border-2 rounded-3xl cursor-pointer">
              <Plus className="text-gray-400" />
            </div>
          </div>

          <div className="flex flex-col items-center flex-1 gap-2">
            <Label className="text-gray-500 font-semibold">Time</Label>
            <div className="flex items-center justify-center w-12 h-10 border-2 rounded-3xl cursor-pointer"></div>
          </div>

          <div className="flex flex-col flex-2 gap-2">
            <Label className="text-gray-500 font-semibold">Quiz Name</Label>
            <Input type="text" className="rounded-2xl h-10 w-52 border-2" />
          </div>

          <div className="flex flex-col flex-2 gap-2">
            <Label className="text-gray-500 font-semibold">Description</Label>
            <Input type="text" className="rounded-2xl h-10 w-52 border-2" />
          </div>
        </div>
        <div className="flex gap-12 justify-between">
          <Button className="rounded-[10px] border px-16 border-brand text-brand hover:text-brand-hover w-48 h-8">
            Back
          </Button>
          <Button className="rounded-[10px] border px-16 bg-brand text-white hover:bg-brand-hover w-48 h-8">
            ADD Question
          </Button>
          <AddQuestion />
          <Button className="rounded-[10px] border px-16 bg-brand text-white hover:bg-brand-hover w-48 h-8">
            ADD
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
