# SmartContractManagement_FrontEndFunction

## Project Overview
The "Function Frontend" project aims to demonstrate the interaction between a simple smart contract and a frontend application. The smart contract, named "GabaCalculator," includes several functions for basic mathematical operations. The project focuses on displaying the values of these functions on the frontend of the application.

## Smart Contract - AnasCalculator.sol
The smart contract "GabaCalculator" is a simple Solidity contract that includes the following functions:
1. `constructor`: Initializes the contract and sets the owner's name and address during deployment.
2. `add`: Performs addition of two integers and emits the result using the `AdditionResult` event.
3. `subtract`: Performs subtraction of two integers and emits the result using the `SubtractionResult` event.
4. `multiply`: Performs multiplication of two integers and emits the result using the `MultiplicationResult` event.
5. `divide`: Performs division of two integers, checks for division by zero, and emits the result using the `DivisionResult` event.

## Frontend Application
The frontend application interacts with the deployed "AnasCalculator" smart contract to display the results of the mathematical operations. The application showcases the values returned by the functions on the user interface.

## Project Structure
The project consists of the following files:
- `GabaCalculator.sol`: The Solidity smart contract containing the mathematical operations.
- `index.html`: The HTML file of the frontend application to display the results.
- `app.js`: The JavaScript file to interact with the deployed smart contract and update the UI with the function results.

## How to Run the Project
1. Deploy the "GabaCalculator" smart contract on a local or testnet Ethereum network.
2. Obtain the address of the deployed contract and set it in the `app.js` file.
3. Deploy the frontend application on a web server or open the `index.html` file in a web browser.
4. Interact with the frontend UI to trigger the mathematical functions on the smart contract.
5. The results of the functions will be displayed on the frontend application.

## Conclusion
The "Function Frontend" project successfully demonstrates the interaction between a simple smart contract and a frontend application. By executing mathematical operations on the smart contract and displaying the results on the frontend, the project showcases the capabilities of integrating blockchain functionality with user-friendly interfaces.

## Authors
Vaishnav Arora

## License
[MIT](LICENSE)
