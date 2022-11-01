# Alyra-test-truffle


Test Truffle 


#Tests des fonctions de base du contract Voting.sol

 # AddVoter() : Permet de rajouter une address dans la whitelist Add Proposal (ne fonctionne pas)
    addProposal()  : Permet d'jouter une proposition  aux votants enregistrés
    setVote() : Prends en compte un vote et une proposition

# Test events addVoter

    Should register Voters: Permet de recuperer l'event VoterRegistered
    Should register Proposal: Premet de recuperer l'event ProposalRegistered

# Test revert de addVoter 
     Should Revert if sender is not the owner: On s' assure que seul le owner peut ajouter un Votant
    Should Revert if Already registered: Permet de verifier si le voter a été enregistré par le owner
    Should Revert if WorkflowStatus is not RegisteringVoters : Permet de s'assurer de la bonne phase du vote 




Contract: Voting
   # Test functions principales
    ✓ Should register Voters, get event VoterRegistered  (62ms, 100440 gas)
     ✓ Should add voter proposal (78ms, 154264 gas)
     ✓ Should setVote  (123ms, 214286 gas)
     test addVoter revert
      ✓ Revert if sender is not the owner  (283ms)
      ✓ Revert if Voter is Already registered (37ms, 50220 gas)
      ✓ Revert if WorkflowStatus is not RegisteringVoters (2ms)


     

                                                      
|   Solc version: 0.8.17+commit.8df45f5f   |  Optimizer enabled: false  | Runs: 200   | Block limit: 6718946 gas   │
| ---------------------------------------- | -------------------------- | ----------- | -------------------------- |
|  Methods   |                             |              |             |             |              |             │
|  Contract  |  Method                     |  Min         |  Max        |  Avg        |   calls      |  eur (avg)  │
|  Voting    |  addProposal                |              |          -  |      59232  |           2  |          -  │
|  Voting    |  addVoter                   |              |          -  |      50220  |           8  |          -  │
|  Voting    |  endProposalsRegistering    |              |          -  |      30599  |           1  |          -  │
|  Voting    |  setVote                    |              |          -  |      58101  |           2  |          -  │
|  Voting    |  startProposalsRegistering  |              |          -  |      95032  |           2  |          -  │
|  Voting    |  startVotingSession         |              |          -  |      30554  |           1  |          -  │
|  Deployments                             |              |             |             | % of limit   |          -  │
|  Voting                                  |              |          -  |    2077414  |      30.9 %  |          -  │
 
      

