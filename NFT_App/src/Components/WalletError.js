import React from 'react';

const WalletError = ({ onConnectWallet }) => {
	return (
		<div
			className='
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  '
		>
			<div className='px-40 py-20 bg-white rounded-md shadow-xl'>
				<div className='flex flex-col items-center'>
					<h1 className='font-bold text-blue-600 text-5xl'>
						There could be following issues:
					</h1>
					<ul className='list-disc items-left py-10'>
						<li className='text-red-500 text-xl'>
							You do not have Metamask wallet installed.
						</li>
						<li className='text-red-500 text-xl'>
							You are not on Polygon Mumbai Testnet.
						</li>
						<li className='text-red-500 text-xl'>
							Your wallet is not connected to current website.
						</li>
					</ul>

					<button
						href='#'
						className='px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100'
						onClick={onConnectWallet}
					>
						{' '}
						Connect Wallet
					</button>
				</div>
			</div>
		</div>
	);
};

export default WalletError;
