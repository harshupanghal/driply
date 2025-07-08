'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS';
  const CONTRACT_ABI = []; // Replace with your ABI
  const POLYGON_AMOY_CHAIN_ID = '0x13882';

  const checkWalletConnected = async () => {
  if (!window.ethereum) return false;
  const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  if (accounts.length) {
    await setupProvider(accounts[0]);
    return true;
  }
  return false;
};

  const connectWallet = async () => {
    if (!window.ethereum) {
     toast.error('MetaMask not installed',   { id: 'wallet-error'   });
      return;
    }

    try {
      setLoading(true);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });

      if (chainId !== POLYGON_AMOY_CHAIN_ID) {
        await switchToPolygonAmoy();
      }

      await setupProvider(account);
    } catch (err) {
      toast.error("Connection cancelled or failed");
      resetAuth();
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    resetAuth();
    toast.success('Disconnected',           { id: 'wallet-disconnect' });
  };

  const resetAuth = () => {
    setCurrentAccount(null);
    setProvider(null);
    setSigner(null);
    setContract(null);
    setIsAuthenticated(false);
  };

  const switchToPolygonAmoy = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: POLYGON_AMOY_CHAIN_ID }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: POLYGON_AMOY_CHAIN_ID,
              chainName: 'Amoy',
              nativeCurrency: { name: 'Amoy', symbol: 'POL', decimals: 18 },
              rpcUrls: ['polygon-amoy.g.alchemy.com/v2/6CfdPHoMroOjc8n8YXlOF'],
              blockExplorerUrls: ['amoy.polygonscan.com'],
            }],
          });
        } catch (addError) {
          toast.error("Failed to add Amoy network");
        }
      } else {
        toast.error("Please switch to Polygon Amoy network");
      }
    }
  };

  const setupProvider = async (account) => {
    const tempProvider = new ethers.BrowserProvider(window.ethereum);
    const tempSigner = await tempProvider.getSigner();
    const tempContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, tempSigner);

    setCurrentAccount(account);
    setProvider(tempProvider);
    setSigner(tempSigner);
    setContract(tempContract);
    setIsAuthenticated(true);
    toast.success('Connected successfully', { id: 'wallet-connect' });
  };

  useEffect(() => {
    (async () => {
    const connected = await checkWalletConnected(); // returns true|false
    if (!connected) await connectWallet();          // invokes MetaMask once
  })();

   if (window.ethereum) {
    window.ethereum.on('accountsChanged', a => setupProvider(a[0])); // no reload
    window.ethereum.on('chainChanged', () => window.location.reload());
  }


  
  }, []);

  return (
    <AuthContext.Provider value={{
      currentAccount,
      provider,
      signer,
      contract,
      isAuthenticated,
      connectWallet,
      disconnectWallet,
      loading,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
