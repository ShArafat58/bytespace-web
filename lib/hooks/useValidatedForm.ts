"use client";

import { useState } from "react";
import type { Validator } from "@/lib/validation";

type FieldMap<TField extends string, TValue> = Record<TField, TValue>;

function createEmptyValues<TField extends string>(
  fields: TField[],
): FieldMap<TField, string> {
  return fields.reduce(
    (values, field) => ({ ...values, [field]: "" }),
    {} as FieldMap<TField, string>,
  );
}

/** Keeps field values and errors for a small form with per field validators */
export function useValidatedForm<TField extends string>(
  validators: FieldMap<TField, Validator>,
) {
  const fields = Object.keys(validators) as TField[];
  const [values, setValues] = useState(() => createEmptyValues(fields));
  const [errors, setErrors] = useState<Partial<FieldMap<TField, string>>>({});

  function setValue(field: TField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: validators[field](value),
      }));
    }
  }

  function validateField(field: TField) {
    setErrors((current) => ({
      ...current,
      [field]: validators[field](values[field]),
    }));
  }

  function validateAll(): boolean {
    const nextErrors: Partial<FieldMap<TField, string>> = {};
    for (const field of fields) {
      const error = validators[field](values[field]);
      if (error) nextErrors[field] = error;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function reset() {
    setValues(createEmptyValues(fields));
    setErrors({});
  }

  return { values, errors, setValue, validateField, validateAll, reset };
}
