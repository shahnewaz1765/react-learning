import "./styles/bootstrap.min.css";
import "./styles/App.css";
import Message from "./component/message";
import Comment from "./component/Comment";     
import Click from "./component/Click";
import Data from "./component/Data";
import TextForm from "./hook/TextForm";
import ItemList from "./component/ItemList";
import List from "./component/List";
import TeaGathering from "./component/TeaGathering";
import Gallery from "./hook/Gallery";
import TargetValue from "./hook/TargetValue";
import Time from "./component/Time";

const comment = {
  date: new Date(),
  text: "Are you coming to WATCH next GAME",
  author: {
    name: "Hey YOU"
    
  },
};

function App() {
  return (
    <div >   
      <div className="container mt-5">
      <Time />
        <div className="my-4 text-center"> 
           <Message message="Welcome To Santiago Barnabue!!" />
        </div>
      </div>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
        //this has to change later
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
