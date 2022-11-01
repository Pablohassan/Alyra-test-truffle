# Alyra-test-truffle


Test Truffle 


Test des fonctions du contract Voting.sol 

Add Voter:  Permet de rajouter une adress dans la whitelist
Add Proposal (ne fonctionne pas)

Test events addVoter

Should register Voters: Permet de recuperer l'event VoterRegistered

Test revert de addVoter

Revert if sender is not the owner
Revert if Voter is Already registered
Revert if WorkflowStatus is not RegisteringVoters


  test addVoter revert
      ✓ Revert if sender is not the owner  (20ms)
      ✓ Revert if Voter is Already registered (44ms, 50220 gas)
      ✓ Revert if WorkflowStatus is not RegisteringVoters (1ms)
      
      
·----------------------------------------|----------------------------|-------------|----------------------------·
|  Solc version: 0.8.17+commit.8df45f5f  ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 6718946 gas  │
·········································|····························|·············|·····························
|  Methods                                                                                                       │
·····················|···················|··············|·············|·············|··············|··············
|  Contract          ·  Method           ·  Min         ·  Max        ·  Avg        ·  # calls     ·  eur (avg)  │
·····················|···················|··············|·············|·············|··············|··············
|  Voting            ·  addVoter         ·           -  ·          -  ·      50220  ·           6  ·          -  │
·····················|···················|··············|·············|·············|··············|··············
|  Deployments                           ·                                          ·  % of limit  ·             │
·········································|··············|·············|·············|··············|··············
|  Voting                                ·           -  ·          -  ·    2077414  ·      30.9 %  ·          -  │
·----------------------------------------|--------------|-------------|-------------|--------------|-------------·
