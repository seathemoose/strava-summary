import { Data } from "@/pages/api/hello";
import { useEffect, useState } from "react"
import { Button } from "./ui/button";

type Props = {
    label: string
}

export default function FormWithButton(props: Props) {
    const [data, setData] = useState();
    const [text, setText] = useState<string>('')
    const handleChange = (e: any) => {
        setText(e.target.value as string)
    }
    const handleClick = async () => {
        const res: Data = await (await fetch('/api/hello')).json()
        console.log(res)
    }
    return (
        <div className="flex flex-col justify-center">
            <input onChange={handleChange} value={text}></input>
            <Button onClick={handleClick} className={`w-[100vw] my-5 ${text.length === 0 ? "bg-red-500" : "bg-emerald-600"}`}>Go</Button>
            {text.length !== 0 && <p>{props.label}</p>}
        </div>
    )
}