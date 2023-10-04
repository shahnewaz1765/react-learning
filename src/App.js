import logo from "./logo.svg";
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
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

function App() {
  return (
    <div >
      <Message message="Welcome" name="neymar" />
      <Message message="Welcome" name="benzema" />
      <Message message="Welcome" name="modric" />
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
      <Time />
      <TeaGathering/>
      <Gallery/>
      <TargetValue/>
     
  </div>
 
  );
}

export default App;
