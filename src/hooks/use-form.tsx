"use client";
import { useState } from "react";

// Define a more flexible type for form elements
type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const useForm = <T extends Record<string, any>>(
    initialValues: T
): [T, (e: React.ChangeEvent<FormElement>) => void, React.Dispatch<React.SetStateAction<T>>] => {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (e: React.ChangeEvent<FormElement>) => {
        const { name, value, type } = e.target;
        
        // Handle different input types
        let finalValue: any = value;
        
        // Handle checkbox inputs
        if (type === 'checkbox') {
            finalValue = (e.target as HTMLInputElement).checked;
        }
        // Handle number inputs
        else if (type === 'number') {
            finalValue = value === '' ? '' : Number(value);
        }
        
        setValues({
            ...values,
            [name]: finalValue,
        });
    };

    return [values, handleChange, setValues];
};