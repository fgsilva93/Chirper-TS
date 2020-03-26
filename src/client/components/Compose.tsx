import * as React from 'react'; 
import { useState } from 'react';
import { useHistory } from 'react-router';

const Compose: React.FC<ComposeProps> = () => {

    const history = useHistory();

    const [ username, setUsername ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value); 
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({username, message}); // shorthand when the key and value are the some (ex: username: username)
        let res = await fetch('/api/chirps', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, message})
        });
        if(res.ok) {
            history.push('/'); //to go back to the homepage
        }
        else {
            console.log('Something went wrong?')
        }
        // setUsername(''); //vlear the usrname bar when sumbitting it 
        // setMessage(''); //clear the message bar when sumbittin it
        
    }

    return (
        <main className="container">
            <section className="row my-2 justify-content-center">
                <div className="col md-8">
                    <form className="form-group p-3 shadow border rounded">
                        <label htmlFor="username">Username</label>
                        <input value={username} 
                        onChange={handleUsernameChange} 
                        id= "username" 
                        type="text" 
                        placeholder="who is chirping?" 
                        className="form-control"/>
                        <label htmlFor="message">Message</label>
                        <textarea 
                        value={message} 
                        onChange={handleMessageChange} 
                        rows={7} 
                        className="form-control" 
                        placeholder="what you want to chirp?" 
                        name="message" 
                        id="message"/>
                        <button onClick={submitChirp} className="btn btn-outline-primary btn-block mt-3 w-75 mx-auto shadow">Chirp it!</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

interface ComposeProps {}

export default Compose; 