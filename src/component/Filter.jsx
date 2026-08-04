import { useState } from "react";
import Button from "./Button";

export default function Filter () {
    const [isOpen, setIsOpen] = useState(false)
    function btnFilter () {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return(
        <div>
            <Button variant="primary" onClick={btnFilter}>Filter</Button>
            {
                isOpen && (
                    <div>
                        <p>testing</p>
                    </div>
                )
            }
        </div>
    )
}