const Voting = artifacts.require("./contracts/Voting.sol");
const { BN, expectRevert, expectEvent } = require("@openzeppelin/test-helpers");
const { expect, assert } = require("chai");

//const { beforeEach } = require('eth-gas-reporter/node_modules/mocha');
//const { describe } = require('eth-gas-reporter/node_modules/mocha');

contract("Voting", (accounts) => {
  const _owner = accounts[0];
  const _voter1 = accounts[1];
  const _voter2 = accounts[2];
  const _voter3 = accounts[3];
  const _voter4 = accounts[4];

  const proposal1 = "Tomate";
  const proposal2 = "Peche";
  const proposal3 = "Pasteque";

  const vote1 = new BN(1);
  const vote2 = new BN(2);
  const vote3 = new BN(3);

  const RegisteringVoters = 0;
  const ProposalsRegistrationStarted = 1;
  const ProposalsRegistrationEnded = 2;
  const VotingSessionStarted = 3;
  const VotingSessionEnded = 4;
  const VotesTallied = 5;

  let VoteInstance;

  describe("test functions principales", function () {
    beforeEach(async function () {
      VoteInstance = await Voting.new({ fromm: _owner });
      await VoteInstance.addVoter(_voter1, {from:_owner});
  
    });

    it("Should register Voters, get event VoterRegistered ", async () => {
      const findEvent = await VoteInstance.addVoter(_voter2);
      await VoteInstance.addVoter(_voter3);
      expectEvent(findEvent, "VoterRegistered");
    });

    it("Should add voter proposal", async () => {
    
    
      const findEvent = await VoteInstance.addProposal(
        (proposal1, { from: _voter1 }));

      await VoteInstance.addProposal (proposal1, { from: _voter1 });
      expectEvent(findEvent, "ProposalRegistered");
    });
  });

  describe("test addVoter revert", function () {
    beforeEach(async function () {
      VoteInstance = await Voting.new({ fromm: _owner });
    });

    it("Revert if sender is not the owner ", async () => {
      await expectRevert(
        VoteInstance.addVoter(_voter1, { from: _voter2 }),
        "Ownable: caller is not the owner"
      );
    });
    it("Revert if Voter is Already registered", async () => {
      await VoteInstance.addVoter(_voter4, { from: _owner });
      await expectRevert(
        VoteInstance.addVoter(_voter4, { from: _owner }),
        "Already registered"
      );
    });
    it("Revert if WorkflowStatus is not RegisteringVoters", async () => {
      await VoteInstance.RegisteringVoters;
      expect(
        VoteInstance.addVoter(_voter1, { from: _owner }),
        "Voters registration is not open yet"
      );
    });
  });
});

// describe("test Voting", function () {

//     beforeEach(async function () {
//         VoteInstance = await Voting.new({ fromm: owner });
//         await VoteInstance.addVoter(Voter1);
//         await VoteInstance.addVoter(Voter2);
//         VoteInstance = VoteInstance.workflowStatus = 1;
//         await VoteInstance.addProposal("test", {from:Voter1})
//         VoteInstance = VoteInstance.workflowStatus = 2;
//         VoteInstance = VoteInstance.workflowStatus = 3;
//       });

//       it("should vote, get event Voted "), async () => {
//         await VoteInstance.setVote(0, { from: Voter1 });
//          await VoteInstance.voters[Voter1].hasVoted;
//             expect(VoteInstance.voters[Voter1].hasVoted.to.equal(true));
//         };

// })

//   describe("test events workflow status", function () {
//     beforeEach(async function () {
//       VoteInstance = await Voting.new({ fromm: owner });
//       await VoteInstance.addVoter(Voter1);
//       await VoteInstance.addVoter(Voter2);
//     });

//     it("should check if proposal time is begun", async function () {
//       await VoteInstance.workflowStatus;
//       expect((VoteInstance.workflowStatus = 1));

//     });
//   });
// });

//     contract('Votin.ProposalsRegistrationEnded admin',
//     function(accounts){
//         it("Should autohrise admin to end the proposal session only after it has started",
//          async function() {

// let VoteInstance = await Voting.deployed();
// let admin = owner

// try { await VoteInstance.ProposalRegistrantionEnded(
// {from: Voter});
// assert.isTrue(false)

// }
// catch(e) {
//      assert.isTrue(admin != Voter);
//      assert.equal(e, "Error: the caller of this function  must be the administrator");
//            }
//          });
//       });

//       contract('SimpleVoting.ProposalRegistrationEnded - successful',
//       function(accounts) {
//        it("An account that is not the voting administrator must not be able to end the proposal registration session",
//          async function() {
//          //arrange
//          let VoteInstance = await SimpleVoting.deployed();
//          let votingAdministrator = await VoteInstance.administrator();

//          await VoteInstance.startProposalsRegistration(
//             {from: votingAdministrator});
//          let workflowStatus = await VoteInstance.getWorkflowStatus();
//          let expectedWorkflowStatus = 1;

//          assert.equal(workflowStatus.valueOf(), expectedWorkflowStatus,
//             "The current workflow status does not correspond to proposal registration proposal started");

//          //act
//          await VoteInstance.endProposalsRegistration(
//            {from: votingAdministrator});
//          let newWorkflowStatus = await VoteInstance
//            .getWorkflowStatus();
//          let newExpectedWorkflowStatus = 2;

//          //assert
//          assert.equal(newWorkflowStatus.valueOf(), newExpectedWorkflowStatus,
//            "The current workflow status does not correspond  to proposal registration session ended");

//          });
//        });
//   });
