function Team(name, division) {
    this._name = name;
    this._division = division;
    this._wins = 0;
    this._losses = 0;
}

Team.prototype = {
    get wins() {
        return this._wins;
    },
    get losses() {
        return this._losses
    },
    get division() {
        return this._division;
    },
    get record() {
        return "" + this._wins + "-" + this._losses;
    }
};

Team.prototype.addWin = function() {
    this._wins += 1;
};

Team.prototype.addLoss = function() {
    this._losses += 1;
};

module.exports = Team;