import ConnectWallet from './ConnectWallet';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-4 flex justify-between items-center">
            <h1 className="text-white font-bold text-xl">🎲 Fair Dice Game</h1>
            <ConnectWallet />
        </nav>
    );
};

export default Navbar;
