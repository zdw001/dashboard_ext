import { useEffect, useState } from 'react';

const Dashboard = ({ user, gun }) => {
    const [txt, setTxt] = useState();

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
    }, []);

    const updateText = (event) => {
        console.log("Updating Text")
        console.log(event.target.value)
        gun.get('text').put({ text: event.target.value }) // Edit the value in our db
        setTxt(event.target.value)
    }

    return (
        <div className="dashboard">
            dashboard

            <h1>Collaborative Document With GunJS</h1>
            <textarea value={txt} onChange={updateText} />
        </div>
    );
}

export default Dashboard;