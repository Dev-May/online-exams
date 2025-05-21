"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnswerFields, ExamSchema } from "@/lib/schemas/exam.schema";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Steps } from "./steps";
import ExamDuration from "./exam-duration";
import useCheckQuestions from "../_hooks/use-check-questions";
import { ScoreDialog } from "./score-dialog";

type QuestionsFormProps = {
  questions: Question[];
};

export default function QuestionsForm({ questions }: QuestionsFormProps) {
  // State
  const [step, setStep] = useState(0);

  // Store CheckResponse data
  const [results, setResults] = useState<CheckResponse | null>(null);
  // const [answer, setAnswer] = useState("");

  // Mutation
  const { isPending, checkQuestions } = useCheckQuestions();

  // Variables
  const currentQuestion = questions[step];

  // Form
  const form = useForm<AnswerFields>({
    resolver: zodResolver(ExamSchema),
    defaultValues: {
      answers: questions.map((question) => ({
        questionId: question._id,
        correct: "",
      })),
    },
  });

  // Functions
  const onSubmit: SubmitHandler<AnswerFields> = (values) => {
    checkQuestions(values, {
      onSuccess: (data) => {
        data.WrongQuestions.forEach((question) => {
          let questionIndex: number | null = null;

          form.getValues("answers").find((answer, i) => {
            if (answer.questionId === question.QID) {
              questionIndex = i;
              return true;
            } else {
              return false;
            }
          });

          if (questionIndex) {
            form.setError(`answers.${questionIndex}`, {
              message: question.correctAnswer,
            });
          }
        });

        setResults(data);
      },
    });
  };

  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-start">
        <div className="flex justify-between w-full items-center mb-7">
          {/* Question number */}
          <p className="text-sm font-semibold text-brand">
            Question {step + 1} of {questions[0].exam.numberOfQuestions}
          </p>

          {/* Duration */}
          <ExamDuration
            duration={questions[step].exam.duration}
            onTimeChange={(date) => form.setValue("time", date.getMinutes())}
          />
        </div>

        {/* Step */}
        <Steps total={questions.length} active={step} />
      </div>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grow flex flex-col"
        >
          <FormField
            key={currentQuestion._id}
            control={form.control}
            name={`answers.${step}`}
            render={({ field }) => (
              <FormItem>
                {/* Label */}
                <FormLabel className="mb-6 text-2xl">
                  {currentQuestion.question}
                </FormLabel>

                {/* Options */}
                <FormControl>
                  <RadioGroup
                    disabled={isPending}
                    value={field.value?.correct ?? ""}
                    onValueChange={(value) => {
                      field.onChange({
                        questionId: currentQuestion._id,
                        correct: value,
                      });
                    }}
                    name={currentQuestion._id}
                    className="flex flex-col space-y-1 cursor-pointer transition-all duration-200"
                  >
                    {currentQuestion.answers.map((answer) => (
                      <FormItem
                        key={answer.key}
                        className="flex items-center space-x-3 space-y-0 w-full rounded-[10px] py-4 px-2 bg-light-blue hover:bg-[#E6ECF7] border-gray-300"
                      >
                        {/* Radio */}
                        <FormControl className="flex justify-center items-center">
                          <RadioGroupItem value={answer.key} />
                        </FormControl>

                        {/* Label */}
                        <FormLabel className="font-normal grow">
                          {answer.answer}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>

                {/* Feedback */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Footer */}
          <div className="mt-auto pt-4 flex justify-between gap-12">
            {/* Prev */}
            <Button
              type="button"
              disabled={isPending || step === 0}
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
              className="w-1/2 rounded-[20px] border border-brand text-brand bg-white hover:text-white hover:bg-brand"
            >
              Previous
            </Button>

            {/* Next */}
            <Button
              disabled={(() => {
                if (isPending) return true;

                const currentAnswer = form.getValues(`answers.${step}`);

                if (currentAnswer?.correct) return false;

                return true;
              })()}
              type={step < questions.length - 1 ? "button" : "submit"}
              onClick={() => {
                if (step === questions.length - 1) return;

                setStep((prev) => prev + 1);
              }}
              className="w-1/2 rounded-[20px] bg-brand text-white hover:bg-brand-hover disabled:bg-[#1D1B201F] disabled:text-black disabled:cursor-not-allowed"
            >
              {step < questions.length - 1 ? (
                "Next"
              ) : (
                <ScoreDialog results={results} />
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
