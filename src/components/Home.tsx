import { useRef } from "react";

const Home = () => {

  const btnRef = useRef<HTMLButtonElement | null>(null);

  const demo = (myName: string, myNum: number) => {
    alert(myName);
    alert(myNum);
  }

  return (
    <div>
      <button ref={btnRef} className="bg-rose-600 text-white px-6 py-2 rounded" onClick={() => demo("abhi", 24)}>
        Check me
      </button>
    </div>
  )
}

export default Home
