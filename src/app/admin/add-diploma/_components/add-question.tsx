"use client";

import { CircleArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AddQuestion() {
  return (
    <Dialog>
      <DialogContent className="gap-10 max-w-[721px]">
        <DialogHeader className="flex items-center justify-self-start">
          <DialogTitle className="flex items-center text-2xl font-bold text-brand gap-2">
            <CircleArrowLeft />
            Add Question
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-500 font-semibold">
                Add Question
              </Label>
              <Input type="text" className="rounded-2xl h-10 border-2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-500 font-semibold">
                Add Answer 1
              </Label>
              <Input type="text" className="rounded-2xl h-10 border-2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-500 font-semibold">
                Add Answer 2
              </Label>
              <Input type="text" className="rounded-2xl h-10 border-2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-500 font-semibold">
                Add Answer 3
              </Label>
              <Input type="text" className="rounded-2xl h-10 border-2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-500 font-semibold">
                Add Answer 4
              </Label>
              <Input type="text" className="rounded-2xl h-10 border-2" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Button className="rounded-[10px] border px-16 border-brand text-brand hover:text-brand-hover w-48 h-8">
            Back
          </Button>
          <Button className="rounded-[10px] border px-16 bg-brand text-white hover:bg-brand-hover w-48 h-8">
            Add Another Question
          </Button>
          <Button className="rounded-[10px] border px-16 bg-brand text-white hover:bg-brand-hover w-48 h-8">
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
