const Voting = artifacts.require("./contracts/Voting.sol");
const { BN, expectRevert, expectEvent } = require("@openzeppelin/test-helpers");
const { expect, assert } = require("chai");

contract("Voting", (accounts) => {
  const _owner = accounts[0]; //  l'adresse de celui qui deploie le contrat
  const _voter1 = accounts[1];
  const _voter2 = accounts[2];
  const _voter3 = accounts[3];
  const _voter4 = accounts[4];

  const proposal1 = "Tomate";
  const proposal2 = "Peche";


  let VoteInstance;

  describe("test functions principales", function () {
    beforeEach(async function () {

      VoteInstance = await Voting.new({ fromm: _owner });
      await VoteInstance.addVoter(_voter1, { from: _owner });
    });

    it("Should register Voters, get event VoterRegistered ", async () => {
      const findEvent = await VoteInstance.addVoter(_voter2);
      await VoteInstance.addVoter(_voter3);
      expectEvent(findEvent, "VoterRegistered");
    });

    it("Should add voter proposal", async () => {
        
      await VoteInstance.startProposalsRegistering({ from: _owner });
      const findEvent = await VoteInstance.addProposal(proposal1, { from: _voter1 });

      expectEvent(findEvent, "ProposalRegistered");
    });
    it("Should setVote ", async () => {
        await VoteInstance.startProposalsRegistering({ from: _owner });
        await VoteInstance.endProposalsRegistering({ from: _owner });
        await VoteInstance.startVotingSession({ from: _owner });
        const findEvent = await VoteInstance.setVote(0, { from: _voter1, });
        expectEvent(findEvent, "Voted", );
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
