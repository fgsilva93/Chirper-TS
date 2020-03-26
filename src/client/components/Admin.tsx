import * as React from 'react'; 
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';


const Admin: React.FC<AdminProps> = () => {

    const { id } = useParams();
    const history = useHistory();

    const [ username, setUsername ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value); 
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            console.log(chirp);
            //two code line is to preset the bar value.
            setUsername(chirp.username);
            setMessage(chirp.message);
        })();
    }, [id])

    const submitEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let res = await fetch(`/api/chirps/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, message})
        });
        if(res.ok) {
            history.push(`/details/${id}`); //to go back to the homepage
        }
        else {
            console.log('Something went wrong?')
        }
    }

    const deleteChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let res = await fetch(`/api/chirps/${id}`, {
            method: 'DELETE',
        });
        if(res.ok) {
            history.push('/'); //to go back to the homepage
        }
        else {
            console.log('Something went wrong?')
        }
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
                        <button onClick={submitEdit} className="btn btn-outline-primary btn-block mt-3 w-75 mx-auto shadow">Save it!</button>
                        <button onClick={deleteChirp} className="btn btn-outline-danger btn-block mt-3 w-75 mx-auto shadow">Delete it!</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

interface AdminProps {}

export default Admin; 