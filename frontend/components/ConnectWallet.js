import { useWeb3 } from '../context/Web3Context';

const ConnectWallet = () => {
    const { wallet, connectWallet } = useWeb3();

    return (
        <div className="flex items-center">
            {wallet ? (
                <span className="text-green-500 font-bold">
                    ✅ Connected: {wallet.slice(0, 6)}...{wallet.slice(-4)}
                </span>
            ) : (
                <button
                    onClick={connectWallet}
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    Connect Wallet
                </button>
            )}
        </div>
    );
};

export default ConnectWallet;
