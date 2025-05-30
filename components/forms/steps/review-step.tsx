"use client";

import { UseFormReturn } from "react-hook-form";
import { AddUserFormState } from "@/types/user";
import { Check, Mail, MapPin } from "lucide-react";

interface ReviewStepProps {
  form: UseFormReturn<AddUserFormState>;
}

export function ReviewStep({ form }: ReviewStepProps) {
  const { name, email, address } = form.getValues();

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Review Information</h2>
      <p className="text-sm text-muted-foreground">Please review the information before submitting.</p>

      <div className="space-y-4">
        <div className="grid gap-2">
          <h3 className="font-medium">Basic Information</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Name:</div>
            <div>{name}</div>
            <div className="text-muted-foreground">Email:</div>
            <div>{email}</div>
          </div>
        </div>

        <div className="grid gap-2">
          <h3 className="font-medium">Address Information</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Street:</div>
            <div>{address.street}</div>
            <div className="text-muted-foreground">City:</div>
            <div>{address.city}</div>
            <div className="text-muted-foreground">ZIP Code:</div>
            <div>{address.zipcode}</div>
          </div>
        </div>
      </div>

      <div className="bg-muted/40 p-4 rounded-lg">
        <h3 className="font-medium mb-2 flex items-center gap-2">
          <Check size={16} className="text-primary" />
          Confirmation
        </h3>
        <p className="text-sm text-muted-foreground">
          By clicking "Save User", you confirm that all the information provided is accurate.
        </p>
      </div>
    </div>
  );
}