const reader = require('./models/Reader');
const ExplorerService = require('./models/ExplorerService');
const FizzBuzzService = require('./models/FizzBuzzService');
const express = require('express');

const explorersFile = reader.readJsonFile('explorers.json');

const explorers = explorersFile.map(explorer=> FizzBuzzService.appliValidationInExplorer(explorer));

const app = express();

const port = 4000;

app.use(express.json());

const router = express.Router();

router.get('/mission/:mission',((req,res)=>{
    const mission = req.params.mission;
    const explorersByMission = ExplorerService.filterByMission(explorers, mission);

    res.status(200).json({explorersByMission});
}));

router.get('/amount/:mission', ((req, res) => {
    
    const mission = req.params.mission;
    const amountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    res.status(200).json({amountOfExplorersByMission});    
}));

router.get('/usernames/:mission',((req,res)=>{
    const mission = req.params.mission;
    const usernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    res.status(200).json({usernamesByMission});
}))

app.use('/v1/explorers', router);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
