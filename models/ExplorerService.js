class ExplorerService{

    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        return this.filterByMission(explorers, mission).length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        return this.filterByMission(explorers, mission).map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService;