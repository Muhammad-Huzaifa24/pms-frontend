import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';

interface CategoryCheckboxProps {
    label: string;
    defaultChecked?: boolean;
}


const CategoryCheckbox = ({ label, defaultChecked = false }: CategoryCheckboxProps) => {
    const [checked, setChecked] = React.useState(defaultChecked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <p className="flex items-center space-x-2">
            <Checkbox
                checked={checked}
                onChange={handleChange}
                sx={{
                    color: '#9ca3af',
                    '&.Mui-checked': {
                        color: '#9ca3af',
                    },
                }}
                inputProps={{ 'aria-label': `checkbox-${label.toLowerCase()}` }}
            />
            <span className="text-gray-500 f-workSans">{label}</span>
        </p>
    )
}
export default CategoryCheckbox