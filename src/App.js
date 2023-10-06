import "./css/bootstrap.min.css";
import "./App.css";
import Message from "./message";
import Comment from "./Comment";     
import Click from "./Click";
import Data from "./Data";
import TextForm from "./TextForm";
import ItemList from "./ItemList";
import List from "./List";
import TeaGathering from "./TeaGathering";
import Gallery from "./Gallery";
import TargetValue from "./TargetValue";
import Time from "./Time";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty"
    
  },
};

function App() {
  return (
    <div >   
      <div className="container mt-5">
      <Time />
        <div className="my-4 text-center"> {/* Add margin and center-align */}
           <Message message="Welcome To Santiago Barnabue!!" />
        </div>
      </div>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Click/>
      <Data/>
      <div className="container mt-5" >
        <TextForm heading="Make Your Word to Uppercase"/>
        
      </div>
      <ItemList/>
      <List/>
      
      <TeaGathering/>
      <Gallery/>
      <TargetValue/>
     
  </div>
 
  );
}

export default App;
