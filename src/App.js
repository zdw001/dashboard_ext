import './App.css';
// import Gun from 'gun';
import { useEffect, useState } from 'react'
import GUN from 'gun/gun';
import SEA from 'gun/sea';

const gun = GUN()

// const gun = Gun({
//   peers: ['https://arcane-sierra-12302.herokuapp.com/gun'] // Put the relay node that you want here
// });

let user = gun.user();


// const user = gun.user();

function App() {

  const [txt, setTxt] = useState()

  useEffect(() => {
    user.create("zdw001", "Florida1")
    console.log("user: ")
    console.log(user)

    gun.get('text').once((node) => { // Retrieve the text value on startup
      console.log(node)
      if (node == undefined) {
        gun.get('text').put({ text: "Write the text here" })
      } else {
        console.log("Found Node")
        setTxt(node.text)
      }
    })

    gun.get('text').on((node) => { // Is called whenever text is updated
      console.log("Receiving Update")
      console.log(node)
      setTxt(node.text)
    })
  }, [])

  const updateText = (event) => {
    console.log("Updating Text")
    console.log(event.target.value)
    gun.get('text').put({ text: event.target.value }) // Edit the value in our db
    setTxt(event.target.value)
  }

  return (
    <div className="App">
      <h1>Collaborative Document With GunJS</h1>
      <textarea value={txt} onChange={updateText} />
    </div>

  );
}

export default App;