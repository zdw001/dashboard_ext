import { useEffect, useState } from 'react';
import {
    user,
    gun
} from '../utils/gun';

const Dashboard = () => {
    const [txt, setTxt] = useState();

    useEffect(() => {
        console.log("DASHBOARD user.is: ")
        console.log(user.is)

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
    }, []);

    const updateText = (event) => {
        console.log("Updating Text")
        console.log(event.target.value)
        gun.get('text').put({ text: event.target.value }) // Edit the value in our db
        setTxt(event.target.value)
    }

    const ask_is = () => {
        console.log('DASHBOARD: user.is:')
        console.log(user.is)
    };

    return (
        <div className="dashboard">
            dashboard

            <h1>Collaborative Document With GunJS</h1>
            <textarea value={txt} onChange={updateText} />

            <div onClick={ask_is}>is?</div>
        </div>
    );
}

export default Dashboard;