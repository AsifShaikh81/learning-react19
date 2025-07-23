// custom-Hook.jsx
import { useState } from "react";

const useToggle = (defaultVal) => {
    const [value, setValue] = useState(defaultVal);

    function toggleValue(val) {
        console.log(val);
        if (typeof val !== 'boolean') {
            setValue(!value);
        } else {
            setValue(val);
        }
    }

    return [value, toggleValue];  // ✅ Array destructuring works now
};

export default useToggle;
