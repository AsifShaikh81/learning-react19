import useToggle from "./custom-Hook";

export default function Appp() {
    const [toggle, setToggle] = useToggle(true);

    return (
        <div>
            <button onClick={setToggle}>Toggle</button>
            <button onClick={() => setToggle(false)}>Hide</button>
            <button onClick={() => setToggle(true)}>Show</button>

            {toggle ? <h1>Hello World</h1> : null}
        </div>
    );
}
