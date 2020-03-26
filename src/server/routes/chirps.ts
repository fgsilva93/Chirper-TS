import { Router } from 'express';
import ChirpStore from '../utils/chirpsstore';

const router = Router();

//GET /api/chirps
router.get('/', (req, res) => {
    const data = ChirpStore.GetChirps();
    const chirps = Object.keys(data).map(key => { //use map for the keys to create an new array
        return {
            id: key,
            username: data[key].username, // to get username 
            message: data[key].message
        }
    }); //"object.keys" returns an array of the keys of an object(the props)
    chirps.pop()
    res.json(chirps);
});

//GET /api/chirps/:chirpid
router.get('/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid; // pass as a varible 
    const chirp = ChirpStore.GetChirp(chirpid); // use chirpid as arg
    res.json({ id: chirpid, ...chirp });
});

//POST /api/chrips
router.post('/', (req, res) => {
    const chirp = req.body; 
    ChirpStore.CreateChirp(chirp);
    res.status(201).json('chirp created')
});

//PUT /api/chirps/: chirpid
router.put('/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid;
    const chirp = req.body;
    ChirpStore.UpdateChirp(chirpid, chirp); //updatwchrip requres two arg: chirpid is what is getting updated and chrips is the new ojbect that is send
    res.status(200).json(`Chirp ${chirpid} Updated`);
})
 
//DELETE /api/chirps/:chirpid
router.delete('/:chirpid', (req, res) => {
    const chirpid = req.params.chirpid;
    ChirpStore.DeleteChirp(chirpid);
    res.status(200).json(`Chirp ${chirpid} Deleted`);
})

export default router; 