import { ChangeEvent } from 'react';

interface FormFieldProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    placeholder?: string;
    as?: string;
    options?: { label: string; value: string }[];
}

const FormField = ({
    id, 
    label, 
    type = "text", 
    value, 
    onChange, 
    placeholder, 
    as = "input", 
    options = []
}: FormFieldProps) => {

    return (
        <div className="form-field">
            <label htmlFor={id} className="field-label">{label}</label>
            {as === 'textarea' ? (
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : as === 'select' ? (
                <select
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                >
                    {options.map(({ label, value }) => (
                        <option
                            key={value}
                            value={value}
                        >
                            {label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default FormField;