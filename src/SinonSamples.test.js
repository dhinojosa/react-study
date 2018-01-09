import sinon from 'sinon';
import Team from "./Team";
import {assert} from 'chai';

it('takes over a function that when called it has feedback', () => {
    const team = new Team("San Francisco Giants", "Western Division");
    const winsSpy = sinon.spy(team, "addWin");
    team.addWin();
    team.addWin();
    assert.equal(team.wins, 2);
    assert(winsSpy.calledTwice);
    winsSpy.restore();
});

it('a stub takes control of a call', () => {
    const obj = {
        log: ['example', 'test'],
        get latest() {
            if (this.log.length === 0) return undefined;
            return this.log[this.log.length - 1];
        }
    };

    const latestStub = sinon.stub(obj, "latest").get(function () {
        return 3;
    });

    assert.equal(obj.latest, 3);
    assert.equal(obj.latest, 3);
    assert.equal(obj.latest, 3);
    latestStub.restore();
});


it('a mock will take control of a call and rehearse', () => {
    const obj = {
        x: 1,
        y: "2",
        calc: function (x, y) {
            return x + y;
        }
    };

    assert.equal(obj.calc(4, 1), 5);

    const objMock = sinon.mock(obj);
    objMock.expects("calc").exactly(1).returns(100);

    assert.equal(obj.calc(3, 1), 100);

    objMock.verify();
    objMock.restore();
});