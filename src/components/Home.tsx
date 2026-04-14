import { useContext, useRef } from "react"
import Context from "../Context.tsx"

const Home = () => {

  const {session, setSession} = useContext(Context)!;
  const inpRef = useRef<HTMLInputElement | null>(null);

  const populateSession = () => {
    const name = inpRef.current?.name;
    const value = inpRef.current?.value;
    setSession({
      [name as string]: value
    });
  }

  return (
    <div>
        <label title="myName">Name</label>
        <input name="myName" placeholder="Enter your name" type="text" ref={inpRef}/>
        <button title="manipulator" onClick={() => populateSession()}>
          Submit
        </button>
        <h1>{session?.myName}</h1>
    </div>
  )
}

export default Home
