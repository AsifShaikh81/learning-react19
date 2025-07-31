// import ComponentA from "./componentA"
import {lazy, Suspense, useState} from 'react';

const Lazy =  lazy(()=>import('./componentA')); //importing 'ComponentA'
const Lazy2 = lazy(()=>import('./componentB')); // importing 'ComponentB'
function LazyLoading() {
    const [load ,setLoad] = useState(false);
  return (
    <div>
       {
        load?
        <Suspense fallback={<h1>Loading....</h1>}>
            <Lazy/>
        </Suspense>:
        null
       }

    <button onClick={()=>setLoad(true)}>click to load</button>

    {/* --------------------------------------------------------- */}
      <Suspense fallback={<h1>loading compo b....</h1>}>
        <Lazy2/>
      </Suspense>

    </div>
  )
}

export default LazyLoading