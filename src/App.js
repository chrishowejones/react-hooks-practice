import "./App.css";
import Counter from "./component/UseStatePractice.js/Counter";
import Counter2 from "./component/UseStatePractice.js/Counter2";
import Counter3 from "./component/UseStatePractice.js/Counter3";
import HookStateArray from "./component/UseStatePractice.js/HookStateArray";
import EffectExample1 from "./component/UseEffectPractice/EffectExample1";
import EffectExample2 from "./component/UseEffectPractice/EffectExample2";
import EffectExample3 from "./component/UseEffectPractice/EffectExample3";
import MouseContainer from "./component/UseEffectPractice/MouseContainer";
import FetchMultiplePosts from "./component/FetchMultiplePosts";

function App() {
  return (
    <div className="App">
      {/*<Counter />
                         <Counter2 /> //
                         <Counter3 />
             <HookStateArray />
       */}
      {/* */}
      <FetchMultiplePosts />
    </div>
  );
}

export default App;
