import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// Import the contract ABI and address
import CalculatorJSON from "GabaCalculator.json";
const contractAddress = "0x10b48fBE7d43eB6057B63725cE243780a63dD6f1"; // Replace with the actual contract address

const CalculatorABI = CalculatorJSON.abi;

function App() {
  const [result, setResult] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerAdd, setOwnerAdd] = useState("");

  // Function to handle connection to MetaMask
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts && accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);

          const _provider = new ethers.providers.Web3Provider(window.ethereum);
          // const _provider = new ethers.providers.JsonRpcProvider();
          await _provider.ready;
          const signer = _provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            CalculatorABI,
            signer
          );
          setContract(contract);

          const ownerName = await contract.ownerName();
          setOwnerName(ownerName);
          const ownerAdd = await contract.ownerAddress();
          setOwnerAdd(ownerAdd);

          const result = await contract.result();
          setResult(result.toString());
        }
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    }
  };

  // Function to handle addition
  const handleAdd = async () => {
    try {
      if (contract && window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const resultTx = await contract.add(num1, num2, {
          value: ethers.utils.parseEther("1"),
        });

        setResult("Transaction sent. Waiting for confirmation...");

        // Wait for the transaction to be mined and get the transaction receipt
        const receipt = await resultTx.wait();

        // Get the return value from the emitted event
        if (receipt && receipt.events && receipt.events[0]) {
          const resultValue = receipt.events[0].args[0];
          setResult(resultValue.toString());
        } else {
          setResult("Transaction failed");
        }
      }
    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };

  // Function to handle subtraction
  const handleSubtract = async () => {
    try {
      if (contract && window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const resultTx = await contract.subtract(num1, num2, {
          value: ethers.utils.parseEther("1"),
        });

        setResult("Transaction sent. Waiting for confirmation...");

        // Wait for the transaction to be mined and get the transaction receipt
        const receipt = await resultTx.wait();

        // Get the return value from the emitted event
        if (receipt && receipt.events && receipt.events[0]) {
          const resultValue = receipt.events[0].args[0];
          setResult(resultValue.toString());
        } else {
          setResult("Transaction failed");
        }
      }
    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };

  // Function to handle multiplication
  const handleMultiply = async () => {
    try {
      if (contract && window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const resultTx = await contract.multiply(num1, num2, {
          value: ethers.utils.parseEther("1"),
        });

        setResult("Transaction sent. Waiting for confirmation...");

        // Wait for the transaction to be mined and get the transaction receipt
        const receipt = await resultTx.wait();

        // Get the return value from the emitted event
        if (receipt && receipt.events && receipt.events[0]) {
          const resultValue = receipt.events[0].args[0];
          setResult(resultValue.toString());
        } else {
          setResult("Transaction failed");
        }
      }
    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };

  // Function to handle division
  const handleDivide = async () => {
    try {
      if (contract && window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const resultTx = await contract.divide(num1, num2, {
          value: ethers.utils.parseEther("1"),
        });

        setResult("Transaction sent. Waiting for confirmation...");

        // Wait for the transaction to be mined and get the transaction receipt
        const receipt = await resultTx.wait();

        // Get the return value from the emitted event
        if (receipt && receipt.events && receipt.events[0]) {
          const resultValue = receipt.events[0].args[0];
          setResult(resultValue.toString());
        } else {
          setResult("Transaction failed");
        }
      }
    } catch (error) {
      console.error(error);
      setResult("Transaction failed");
    }
  };

  // Connect to MetaMask on component mount
  useEffect(() => {
    connectToMetaMask();
  }, []);

  return (
    <div>
      <h1>Calculator App</h1>
      {isConnected ? (
        <div>
          <h2>Owner's Address: {ownerAdd}</h2>
          <h2>Owner's Name: {ownerName}</h2>
          <p>Connected Account: {account}</p>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <br />
          <button onClick={handleAdd}>Add</button>
          <button onClick={handleSubtract}>Subtract</button>
          <button onClick={handleMultiply}>Multiply</button>
          <button onClick={handleDivide}>Divide</button>
          <br />
          <p>Result: {result}</p>
        </div>
      ) : (
        <button onClick={connectToMetaMask}>Connect to MetaMask</button>
      )}
    </div>
  );
}

export default App;
