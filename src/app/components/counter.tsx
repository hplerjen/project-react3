import { ReactNode } from "react"

type CounterProps = {
	setCounter: React.Dispatch<React.SetStateAction<number>>,
	children: ReactNode,
}

const Counter  = ({setCounter, children}: CounterProps) => {
	return (
		<>
			<h1>{children} </h1>
		    <button onClick={() => setCounter(prev => prev + 1)}>++</button>
			<button onClick={() => setCounter(prev => prev - 1)}>--</button>
		</>
		);
}
export default Counter