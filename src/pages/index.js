import { useEvmNativeBalance } from "@moralisweb3/next";

function HomePage() {
    const address = "0x0dFF23B0b03055b8Def2ce158c749f9d9c317078";
    const { data: nativeBalance } = useEvmNativeBalance({
        address,
        chain: "0x5",
    });
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
        </div>
    );
}

export default HomePage;
