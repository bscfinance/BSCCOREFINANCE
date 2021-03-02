// Storage for user data variables
let address;
let web3;
let balance;
let amount;
let totalContributed;
let eventOver = true;
let autoStakeOnZap = true;

let LPbal;
let LPrewards;



// ============= Duplicate =================
const BScAddress = '0xf5128928f85f16bd67c1e02ddd1b47a71d17adf5';
const LPTokenAddress = '0xa643e30c957ca5a1e176da169a1be7afdc1bda16';
const TVaultAddress = '0xd81b3aa8d4a995c8676524568c387f594297a149';
const BScV2Address = '0xd81b3aa8d4a995c8676524568c387f594297a149';
const wethAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const routerAddress = '';
const daiAddress = '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3';
//const bscPoolDaiAddress = '0xb12a30b72ab4a7f00d1e5e66a6d74d621b35c8bc';

var eventEndTime = new Date("Feb 18, 2021 21:55:30").getTime();

connect();

const ABI = {
  BscToken:
    '[{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LPTokenClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LiquidityAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"log","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LPGenerationCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LPperETHUnit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"agreesToTermsOutlinedInLiquidityGenerationParticipationAgreement","type":"bool"}],"name":"addLiquidity","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addLiquidityToUniswapBSCxWETHPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimLPTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createUniswapPairMainnet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyDrain24hAfterLiquidityGenerationEventIsDone","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bnbContributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeDistributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSecondsLeftInLiquidityGenerationEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityGenerationOngoing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityGenerationParticipationAgreement","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeDistributor","type":"address"}],"name":"setFeeDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_transferCheckerAddress","type":"address"}],"name":"setShouldTransferChecker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenUniswapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBNBContributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLPTokensMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferCheckerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapFactory","outputs":[{"internalType":"contract IUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouterV2","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"}]',
  LPToken:
    '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
  BscVault:
    '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"SuperAdminTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_","type":"uint256"}],"name":"addPendingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"averageFeesPerBlockEpoch","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"averageFeesPerBlockSinceStart","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cumulativeRewardsSinceStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"depositFor","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bsc","outputs":[{"internalType":"contract INBUNIERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochCalculationStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract INBUNIERC20","name":"_bsc","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"superAdmin","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"newSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingBsc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"accBscPerShare","type":"uint256"},{"internalType":"bool","name":"withdrawable","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsInThisEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAllowanceForPoolToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_DEV_FEE","type":"uint16"}],"name":"setDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDevFeeReciever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"setPoolWithdrawable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"contractAddress","type":"address"}],"name":"setStrategyContractOrDistributionContractAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startNewEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
  ERC20:
    '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]',
  pair:
    '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
  BscVaultV2:
    '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"SuperAdminTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"contractStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"cumulativeRewardsSinceStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"epochCalculationStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"bsc","outputs":[{"internalType":"contract INBUNIERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"accBscPerShare","type":"uint256"},{"internalType":"bool","name":"withdrawable","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsInThisEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"averageFeesPerBlockSinceStart","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"averageFeesPerBlockEpoch","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startNewEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract INBUNIERC20","name":"_bsc","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"setPoolWithdrawable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_DEV_FEE","type":"uint16"}],"name":"setDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingBsc","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_","type":"uint256"}],"name":"addPendingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"depositAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"depositFor","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAllowanceForPoolToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"contractAddress","type":"address"}],"name":"setStrategyContractOrDistributionContractAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDevFeeReciever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"burnSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"newSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
  router:
    '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback","payable":true},{"inputs":[],"name":"_WETH","outputs":[{"internalType":"contract IWETH","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_feeApprover","outputs":[{"internalType":"contract IFeeApprover","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_BscToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_bscVault","outputs":[{"internalType":"contract IBscVault","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_bscWETHPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hardBSC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"refreshApproval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"bool","name":"autoStake","type":"bool"}],"name":"addLiquidityETHOnly","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"address","name":"feeApprover","type":"address"}],"name":"changeFeeApprover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"bscVault","type":"address"}],"name":"changeKVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ethAmt","type":"uint256"}],"name":"getLPTokenPerEthUnit","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]',
  tPoolDai:
    '[{"inputs":[{"internalType":"address","name":"_controller","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BSC","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BSCMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BSCMin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableBSCYield","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"reserve","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"max","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"min","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onesplit","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onesplitParts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onesplitSlippageMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"onesplitSlippageMin","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_controller","type":"address"}],"name":"setController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"setEnableBSCYield","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_BSCMin","type":"uint256"}],"name":"setBSCBuyMin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"}],"name":"setMin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_onesplit","type":"address"}],"name":"setOneSplit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_onesplitParts","type":"uint256"}],"name":"setOneSplitParts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_onesplitSlippageMin","type":"uint256"}],"name":"setOneSplitSlippageMin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawbscInCaseStuck","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
};

var x = setInterval(async function () {
  var distance = eventEndTime - Date.now();

  // alert(Date.now());

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML =
    days + ':' + hours + ':' + minutes + ':' + seconds;
  if (distance < 0) {
    eventOver = true;
    clearInterval(x);
    document.getElementById('contribute').style.display = 'none';
    document.getElementById('claim-lp').style.display = 'block';
    document.getElementById('countdown').innerHTML = '00:00:00:00';
  }
  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  if (isMetaMaskInstalled()) {
    loadSummary();
    loadZapper();
    loadLGEData();
    loadTVaultData();
    loadTVaultV2Data();
    loadTPool();
  }
}, 1000);

web3 = new Web3(window.ethereum);
async function web3enable() {
  await window.ethereum.enable();
}
web3enable();

const currentUrl = new URL(window.location.href);
const forwarderOrigin =
  currentUrl.hostname === 'localhost' ? 'http://localhost:9010' : undefined;
const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

//connect with metamask and reach consensus
async function connect() {
  const walletconnect = document.getElementById('walletconnect');
  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  if (!isMetaMaskInstalled()) {
    document.getElementById('warning').innerHTML =
      'MetaMask is not installed, thus you cannot interact with the BSC Vault. Please install MetaMask from <a href="https://metamask.com/download.html/">here</a> and try again.';
    document.getElementById('deposit').disabled = true;
    return;
  }
  const chainId = await ethereum.request({
    method: 'eth_chainId',
  });
  if (chainId != '0x038' && chainId != '0x38') {
    document.getElementById('warning').innerHTML =
      'Your MetaMask is set on the incorrect chain. Please switch to BSC.';
    return;
  }
  const accounts = await ethereum.request({
    method: 'eth_requestAccounts',
  });
  address = accounts[0];
  ethereum.on('accountsChanged', function (accounts) {
    location.reload();
  });
  ethereum.on('chainChanged', function (chain) {
    location.reload();
  });
  loadSummary();
  loadZapper();
  loadLGEData();
  loadTVaultData();
  loadTVaultV2Data();
  loadTPool();
}

// ========================================== Summary ========================================== //

async function loadSummary() {
  var BscTokenInstance = new web3.eth.Contract(
    JSON.parse(ABI.BscToken),
    BScAddress
  );
  var lockedLP = web3.utils.fromWei(
    await BscTokenInstance.methods.balanceOf(LPTokenAddress).call()
  );
  document.getElementById('Bsc-locked').innerHTML = Number(lockedLP).toFixed(
    5
  );

  var BScBalance = web3.utils.fromWei(
    await BscTokenInstance.methods.balanceOf(address).call()
  );
  document.getElementById('BSc-wallet-balance').innerHTML = Number(
    BScBalance
  ).toFixed(5);

  var lpTokenInstance = new web3.eth.Contract(
    JSON.parse(ABI.ERC20),
    LPTokenAddress
  );
  var lpTotalSupply = web3.utils.fromWei(
    await lpTokenInstance.methods.totalSupply().call()
  );
  document.getElementById('lp-total-supply').innerHTML = Number(
    lpTotalSupply
  ).toFixed(5);

  var lpBalance = web3.utils.fromWei(
    await lpTokenInstance.methods.balanceOf(address).call()
  );
  document.getElementById('lp-wallet-balance').innerHTML = Number(
    lpBalance
  ).toFixed(5);

  var vaultV2 = new web3.eth.Contract(
    JSON.parse(ABI.BscVaultV2),
    BScV2Address
  );
  var lpStaked = web3.utils.fromWei(
    (await vaultV2.methods.userInfo('0', address).call()).amount
  );
  document.getElementById('lp-staked').innerHTML = Number(lpStaked).toFixed(5);

  var claimable = web3.utils.fromWei(
    await vaultV2.methods.pendingBsc(0, address).call()
  );
  document.getElementById('BSc-claimable-balance').innerHTML = Number(
    claimable
  ).toFixed(5);
}
setInterval(loadSummary(), 15000);

// ========================================== KZap ========================================== //

async function loadZapper() {
  const userETHBalance = web3.utils.fromWei(await web3.eth.getBalance(address));
  var maxZapableBalance = userETHBalance - 0.1; // for gas
  await getZapEstimate(maxZapableBalance);
  document.getElementById('zap-eth-amount').value = Number(
    maxZapableBalance
  ).toFixed(5);
}
setInterval(loadZapper(), 15000);

async function zapMax() {
  var maxZapableBalance = web3.utils.fromWei(balance) - 0.1; // for gas
  await getZapEstimate(maxZapableBalance);
  document.getElementById('zap-eth-amount').value = Number(
    maxZapableBalance
  ).toFixed(5);
}

async function getZapEstimate(ethAmount) {
  if (ethAmount == 0) {
    document.getElementById('zap-lp-estimate').innerHTML = Number(0).toFixed(5);
  } else {
    var routerInstance = new web3.eth.Contract(
      JSON.parse(ABI.router),
      routerAddress
    );
    var lpEstimate = await routerInstance.methods
      .getLPTokenPerEthUnit(web3.utils.toWei(String(ethAmount), 'ether'))
      .call();
    document.getElementById('zap-lp-estimate').innerHTML = Number(
      web3.utils.fromWei(lpEstimate)
    ).toFixed(5);
  }
}

async function zap() {
  var routerInstance = new web3.eth.Contract(
    JSON.parse(ABI.router),
    routerAddress
  );
  var ethAmount = document.getElementById('zap-eth-amount').value;

  const zap = await new Promise((resolve, reject) => {
    routerInstance.methods.addLiquidityETHOnly(address, autoStakeOnZap).send(
      {
        from: address,
        value: web3.utils.toWei(ethAmount, 'ether'),
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!zap) return;
  document.getElementById('zap-lp').innerText = 'ZAPPING...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(zap);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('zap-lp').innerText = 'ZAP ETH TO LP';
    }
  }, 10 * 1000);
}

// ========================================== BSC-ETH LGE functions ========================================== //

async function deposit() {
  amount = parseFloat(document.getElementById('amount').value);

  if (!amount) {
    document.getElementById('warningDep').innerHTML =
      'Please specify a valid value!';
    setTimeout(function () {
      document.getElementById('warningDep').innerText = '';
    }, 5000);
    return;
  }
  if (amount > balance) {
    document.getElementById('warningDep').innerText =
      'Deposit amount exceeds balance!';
    setTimeout(function () {
      document.getElementById('warningDep').innerText = '';
    }, 15000);
    return;
  }
  amount = amount.toFixed(4);
  amount = web3.utils.toWei(amount, 'ether');
  amount = amount + '';
  const send = await new Promise((resolve, reject) => {
    web3.eth.sendTransaction(
      {
        from: address,
        value: amount,
        to: BScAddress,
        data:
          '0xda620cd70000000000000000000000000000000000000000000000000000000000000001',
      },
      function (error, result) {
        if (result) resolve(result);
        else reject(error);
      }
    );
  });
  document.getElementById('deposit').innerText = 'Depositing';
  let checkTx = setInterval(async function () {
    const tx = await new Promise((resolve, reject) => {
      web3.eth.getTransactionReceipt(send, function (error, result) {
        if (result) resolve(result);
        else reject();
      });
    });
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('depositLGE').innerText = 'Deposit';
      document.getElementById('successLGE').innerText = 'Deposit confirmed!';
      setTimeout(function () {
        document.getElementById('successLGE').innerText = '';
      }, 15000);
    }
  }, 10 * 1000);
}

async function claim() {
  var token = new web3.eth.Contract(JSON.parse(ABI.BscToken), BScAddress);
  const claim = await new Promise((resolve, reject) => {
    token.methods.claimLPTokens().send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!claim) return;
  document.getElementById('claim').innerText = 'Claiming...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(claim);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('claim').innerText = 'Claim';
      document.getElementById('success').innerText = 'Claim confirmed!';
      setTimeout(function () {
        document.getElementById('success').innerText = '';
      }, 15000);
    }
  }, 10 * 1000);
}

async function loadLGEData() {
  web3.eth.getBalance(address, function (error, result) {
    balance = result;
    document.getElementById('walletconnect').innerText =
      address.slice(0, 6) +
      '..' +
      address.slice(36) +
      ' [' +
      parseFloat(web3.utils.fromWei(balance, 'ether')).toFixed(4) +
      ' BNB]';
  });
  var token = new web3.eth.Contract(JSON.parse(ABI.BscToken), BScAddress);
  const BNBContributed = web3.utils.fromWei(
    await token.methods.bnbContributed(address).call(),
    'ether'
  );
  const totalContributed = web3.utils.fromWei(
    await token.methods.totalBNBContributed().call(),
    'ether'
  );
  var percent = (BNBContributed / totalContributed) * 100;
  percent = percent.toFixed(3);
  if (percent == 0.0) percent = 0;
  document.getElementById('total-deposit').innerHTML = totalContributed;
  document.getElementById('your-deposit').innerHTML = BNBContributed;
  document.getElementById('your-deposit-percent').innerHTML = percent;
}
setInterval(loadLGEData(), 15000);

// ========================================== V1 Vault functions ========================================== //

async function loadTVaultData() {
  if (!address) return;
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.BscVault),
    TVaultAddress
  );
  var pendingBsc = await vault.methods.pendingBsc('0', address).call();

  const pair = new web3.eth.Contract(JSON.parse(ABI.pair), LPTokenAddress);
  const weth = new web3.eth.Contract(JSON.parse(ABI.ERC20), wethAddress);
  const Bsc = new web3.eth.Contract(JSON.parse(ABI.ERC20), BscAddress);
  var totalLP = await pair.methods.totalSupply().call();
  var wethLP = await weth.methods.balanceOf(LPTokenAddress).call();
  var lockedLP = await pair.methods.balanceOf(TVaultAddress).call();
  // document.getElementById('stakedLP').innerHTML = "Total Tokens Locked<br>" + parseFloat(web3.utils.fromWei(lockedLP, 'ether')).toFixed(4)
  var averageRewards = await vault.methods
    .averageFeesPerBlockSinceStart()
    .call();
  var BScLP = await Bsc.methods.balanceOf(LPTokenAddress).call();
  var ethPerLP = wethLP / totalLP;
  ethPerLP = ethPerLP * 2;
  var ethPerBSc = wethLP / BScLP;
  var lockedLPValue = web3.utils.fromWei(lockedLP, 'ether') * ethPerLP;
  var BScPerYear = web3.utils.fromWei(averageRewards, 'ether') * 2103840;
  var ethPerYear = BScPerYear * ethPerBSc;
  var APY = (ethPerYear / lockedLPValue) * 100;
  APY = APY.toFixed(3);
  // document.getElementById('apyLP-v1').innerHTML = APY
  // var price = wethLP / BScLP
  // document.getElementById('priceBsc').innerHTML = "Bsc Price<br>" + price.toFixed(4) + " ETH"

  var amountStaked = (await vault.methods.userInfo('0', address).call()).amount;
  // document.getElementById('stakedLP-v1').innerHTML = Number(
  //   web3.utils.fromWei(amountStaked, 'ether')
  // ).toFixed(5);

  var pendingBsc = web3.utils.fromWei(
    await vault.methods.pendingBsc(0, address).call()
  );
  // document.getElementById('tokens-claimable-v1').innerHTML = Number(
  //   pendingBsc
  // ).toFixed(5);

  // document.getElementById('total-lp-locked-v1').innerHTML = Number(
  //   web3.utils.fromWei(lockedLP)
  // ).toFixed(5);
}
setInterval(loadTVaultData, 15000);

async function claimLPV1() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.BscVault),
    TVaultAddress
  );
  const claim = await new Promise((resolve, reject) => {
    vault.methods.deposit('0', '0').send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!claim) return;
  document.getElementById('claimLPbutton-v1').innerText = 'Claiming...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(claim);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('claimLPbutton-v1').innerText = 'Claim';
    }
  }, 10 * 1000);
}

async function withdrawAllLPV1() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.BscVault),
    TVaultAddress
  );
  var amountStaked = (await vault.methods.userInfo('0', address).call()).amount;
  const withdraw = await new Promise((resolve, reject) => {
    vault.methods.withdraw('0', amountStaked).send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  document.getElementById('withdrawAllLPbutton-v1').innerText =
    'Withdrawing...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(withdraw);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('withdrawAllLPbutton-v1').innerText = 'Withdraw';
    }
  }, 10 * 1000);
}

// ========================================== V2 Vault functions ========================================== //

async function loadTVaultV2Data() {
  if (!address) return;
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.BscVaultV2),
    BScV2Address
  );
  var pendingBsc = await vault.methods.pendingBsc('0', address).call();

  const pair = new web3.eth.Contract(JSON.parse(ABI.pair), LPTokenAddress);
  const weth = new web3.eth.Contract(JSON.parse(ABI.ERC20), wethAddress);
  const Bsc = new web3.eth.Contract(JSON.parse(ABI.ERC20), BScAddress);
  var totalLP = await pair.methods.totalSupply().call();
  var wethLP = await weth.methods.balanceOf(LPTokenAddress).call();
  var lockedLP = await pair.methods.balanceOf(BScV2Address).call();
  var averageRewards = await vault.methods
    .averageFeesPerBlockSinceStart()
    .call();
  var BScLP = await Bsc.methods.balanceOf(LPTokenAddress).call();
  var ethPerLP = wethLP / totalLP;
  ethPerLP = ethPerLP * 2;
  var ethPerBSc = wethLP / BScLP;
  var lockedLPValue = web3.utils.fromWei(lockedLP, 'ether') * ethPerLP;
  var BScPerYear = web3.utils.fromWei(averageRewards, 'ether') * 2103840;
  var ethPerYear = BScPerYear * ethPerBSc;
  var APY = 0;
  APY = lockedLPValue == 0 ? 0 : (ethPerYear / lockedLPValue) * 100;
  APY = APY.toFixed(3);
  document.getElementById('apyLP-v2').innerHTML = APY;
  // var price = wethLP / BScLP
  // document.getElementById('priceBsc').innerHTML = "Bsc Price<br>" + price.toFixed(4) + " ETH"

  var amountStaked = (await vault.methods.userInfo('0', address).call()).amount;
  document.getElementById('stakedLP-v2').innerHTML = Number(
    web3.utils.fromWei(amountStaked, 'ether')
  ).toFixed(5);

  var pendingBsc = web3.utils.fromWei(
    await vault.methods.pendingBsc(0, address).call()
  );
  document.getElementById('tokens-claimable-v2').innerHTML = Number(
    pendingBsc
  ).toFixed(5);

  var userUnstakedLPBalance = web3.utils.fromWei(
    await pair.methods.balanceOf(address).call()
  );
  document.getElementById('unstakedLP').innerHTML = Number(
    userUnstakedLPBalance
  ).toFixed(5);

  document.getElementById('total-lp-locked-v2').innerHTML = Number(
    web3.utils.fromWei(lockedLP)
  ).toFixed(5);
}
setInterval(loadTVaultV2Data, 15000);

async function approveLPV2() {
  var LPToken = new web3.eth.Contract(JSON.parse(ABI.LPToken), LPTokenAddress);
  const approve = await new Promise((resolve, reject) => {
    LPToken.methods
      .approve(
        BScV2Address,
        '9999999999999999999999999999999999999999999999999999999999'
      )
      .send(
        {
          from: address,
        },
        function (error, transactionHash) {
          if (transactionHash) resolve(transactionHash);
          else reject();
        }
      );
  });
}

async function stakeLPV2() {
  // approve first if not approved
  var LPToken = new web3.eth.Contract(JSON.parse(ABI.LPToken), LPTokenAddress);
  const allowance = await LPToken.methods
    .allowance(address, BScV2Address)
    .call();
  if (allowance < 99999999999999999999999999999999999999) {
    await approveLPV2();
  }

  var vault = new web3.eth.Contract(
    JSON.parse(ABI.BscVaultV2),
    BScV2Address
  );
  var amount = document.getElementById('LPamount-v2').value;
  if (!amount) return;
  const deposit = await new Promise((resolve, reject) => {
    vault.methods.deposit('0', web3.utils.toWei(amount, 'ether')).send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!deposit) return;
  document.getElementById('stakeLPbutton-v2').innerText = 'Staking...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(deposit);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('stakeLPbutton-v2').innerText = 'Stake';
    }
  }, 10 * 1000);
}

async function stakeAllLPV2() {
  // approve first if not approved
  var LPToken = new web3.eth.Contract(JSON.parse(ABI.LPToken), LPTokenAddress);
  const allowance = await LPToken.methods
    .allowance(address, BScV2Address)
    .call();
  if (allowance < 99999999999999999999999999999999999999) {
    await approveLPV2();
  }

  var vault = new web3.eth.Contract(
    JSON.parse(ABI.BscVaultV2),
    BScV2Address
  );
  const deposit = await new Promise((resolve, reject) => {
    vault.methods.depositAll('0').send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!deposit) return;
  document.getElementById('stakeAllLPbutton-v2').innerText = 'Staking...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(deposit);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('stakeAllLPbutton-v2').innerText = 'Stake';
    }
  }, 10 * 1000);
}

async function withdrawLPV2() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.BscVaultV2),
    BScV2Address
  );
  const withdraw = await new Promise((resolve, reject) => {
    vault.methods
      .withdraw(
        '0',
        web3.utils.toWei(document.getElementById('LPamount-v2').value, 'ether')
      )
      .send(
        {
          from: address,
        },
        function (error, transactionHash) {
          if (transactionHash) resolve(transactionHash);
          else reject();
        }
      );
  });
  document.getElementById('withdrawLPbutton-v2').innerText = 'Withdrawing...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(withdraw);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('withdrawLPbutton-v2').innerText = 'Withdraw';
    }
  }, 10 * 1000);
}

async function withdrawAllLPV2() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.BscVaultV2),
    BScV2Address
  );
  const withdraw = await new Promise((resolve, reject) => {
    vault.methods.withdrawAll('0').send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  document.getElementById('withdrawAllLPbutton-v2').innerText =
    'Withdrawing...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(withdraw);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('withdrawAllLPbutton-v2').innerText = 'Withdraw';
    }
  }, 10 * 1000);
}

async function claimLPV2() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.BscVaultV2),
    BScV2Address
  );
  const claim = await new Promise((resolve, reject) => {
    vault.methods.deposit('0', '0').send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!claim) return;
  document.getElementById('claimLPbutton-v2').innerText = 'Claiming...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(claim);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('claimLPbutton-v2').innerText = 'Claim';
    }
  }, 10 * 1000);
}

// =========================== T POOL DAI LOAD =========================

async function getBlockNumberFromTimestamp(timestamp) {
  const res = await $.ajax({
    url: `https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=XRFWK1IDBR545CXNJ6NQSYAVINUQB7IDV1`,
    type: 'GET',
  });

  return res.result;
}

function toFixed(num, fixed) {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
  const arr = num.toString().match(re);
  if (arr && arr.length > 0) {
    return arr[0];
  } else {
    return '0';
  }
}

async function lookUpPrices(id_array) {
  let ids = id_array.join('%2C');
  return $.ajax({
    url:
      'https://api.coingecko.com/api/v3/simple/price?ids=' +
      ids +
      '&vs_currencies=usd',
    type: 'GET',
  });
}

async function loadTPool() {
  if (!address) return;
  const tPoolDaiInstance = new web3.eth.Contract(
    JSON.parse(ABI.tPoolDai),
    tPoolDaiAddress
  );

  const daiInstance = new web3.eth.Contract(JSON.parse(ABI.ERC20), daiAddress);
  // // dai balance
  const userDaiBalance = await daiInstance.methods.balanceOf(address).call();
  document.getElementById('dai-balance').innerHTML = Number(
    web3.utils.fromWei(userDaiBalance, 'ether')
  ).toFixed(5);

  // tvl
  const tvl = await tPoolDaiInstance.methods.balance().call();
  document.getElementById('dai-pool-tvl').innerHTML = Number(
    web3.utils.fromWei(tvl, 'ether')
  ).toFixed(5);
  // user stake
  const currentPricePerFullShare = await tPoolDaiInstance.methods
    .getPricePerFullShare()
    .call();

  const decimal = 10 ** (await tPoolDaiInstance.methods.decimals().call());
  const yourShares =
    (await tPoolDaiInstance.methods.balanceOf(address).call()) / decimal;
  const yourShareUnderlyingAmount =
    (yourShares * currentPricePerFullShare) / 1e18;
  document.getElementById('dai-pool-your-staked').innerHTML = Number(
    yourShareUnderlyingAmount
  ).toFixed(5);
  // BSC Estimate
  const bsc = new web3.eth.Contract(JSON.parse(ABI.ERC20), BScAddress);
  const weth = new web3.eth.Contract(JSON.parse(ABI.ERC20), wethAddress);
  const wethLP = await weth.methods.balanceOf(LPTokenAddress).call();
  const bscLP = await bsc.methods.balanceOf(LPTokenAddress).call();
  const prices = await lookUpPrices(['ethereum']);
  const bscPrice = (wethLP / bscLP) * prices['ethereum'].usd;

  // take deposit amount, multiple by 0.5%, and mul by korePrice
  const estimateKoreRewards =
    (yourShareUnderlyingAmount * 5) / 1000 / bscPrice;
  document.getElementById('est-bsc-rewards').innerHTML = toFixed(
    estimateKoreRewards,
    5
  );
  // APY
  const now = Math.round(Date.now() / 1000);
  const oneDayAgoBlockNumber = parseInt(
    await getBlockNumberFromTimestamp(now - 60 * 60 * 24)
  );
  const oneDayAgoPricePerFullShare = await tPoolDaiInstance.methods
    .getPricePerFullShare()
    .call({}, oneDayAgoBlockNumber);
  const apyDaily =
    (currentPricePerFullShare / oneDayAgoPricePerFullShare - 1) * 100;
  document.getElementById('dai-pool-apy-daily').innerHTML = toFixed(
    ((1 + apyDaily / 100) ** 365 - 1) * 100,
    3
  );
}
setInterval(loadTPool, 15000);

// ================== Dai Pool Staking ==================

async function approveDaiToBScPool() {
  var dai = new web3.eth.Contract(JSON.parse(ABI.ERC20), daiAddress);
  const approve = await new Promise((resolve, reject) => {
    dai.methods
      .approve(
        tPoolDaiAddress,
        '9999999999999999999999999999999999999999999999999999999999'
      )
      .send(
        {
          from: address,
        },
        function (error, transactionHash) {
          if (transactionHash) resolve(transactionHash);
          else reject();
        }
      );
  });
}

async function daiPoolStake() {
  // approve first if not approved
  var dai = new web3.eth.Contract(JSON.parse(ABI.ERC20), daiAddress);
  const allowance = await dai.methods
    .allowance(address, tPoolDaiAddress)
    .call();
  if (allowance < 99999999999999999999999999999999999999) {
    await approveDaiToBScPool();
  }

  const tPoolDaiInstance = new web3.eth.Contract(
    JSON.parse(ABI.tPoolDai),
    tPoolDaiAddress
  );

  const daiToDeposit = web3.utils.toWei(
    document.getElementById('dai-amount').value,
    'ether'
  );

  const stake = await new Promise((resolve, reject) => {
    tPoolDaiInstance.methods.deposit(daiToDeposit).send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });

  document.getElementById('dai-pool-stake').innerText = 'Staking...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(stake);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('dai-pool-stake').innerText = 'Stake';
    }
  }, 10 * 1000);
}

async function daiPoolWithdraw() {
  const tPoolDaiInstance = new web3.eth.Contract(
    JSON.parse(ABI.tPoolDai),
    tPoolDaiAddress
  );

  const currentPricePerFullShare = await tPoolDaiInstance.methods
    .getPricePerFullShare()
    .call();

  const daiToWithdraw = web3.utils.toWei(
    document.getElementById('dai-amount').value,
    'ether'
  );

  const sharesToWithdraw = daiToWithdraw / currentPricePerFullShare;

  const withdraw = await new Promise((resolve, reject) => {
    tPoolDaiInstance.methods
      .withdraw(web3.utils.toWei(String(sharesToWithdraw), 'ether'))
      .send(
        {
          from: address,
        },
        function (error, transactionHash) {
          if (transactionHash) resolve(transactionHash);
          else reject();
        }
      );
  });
  document.getElementById('dai-pool-withdraw').innerText = 'Withdrawing...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(withdraw);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('dai-pool-withdraw').innerText = 'Withdraw';
    }
  }, 10 * 1000);
}

async function daiPoolStakeAll() {
  // approve first if not approved
  var dai = new web3.eth.Contract(JSON.parse(ABI.ERC20), daiAddress);
  const allowance = await dai.methods
    .allowance(address, tPoolDaiAddress)
    .call();
  if (allowance < 99999999999999999999999999999999999999) {
    await approveDaiToBScPool();
  }

  const tPoolDaiInstance = new web3.eth.Contract(
    JSON.parse(ABI.tPoolDai),
    tPoolDaiAddress
  );

  const stake = await new Promise((resolve, reject) => {
    tPoolDaiInstance.methods.depositAll().send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  document.getElementById('dai-pool-stake-all').innerText = 'Staking...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(stake);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('dai-pool-stake').innerText = 'Stake';
    }
  }, 10 * 1000);
}

async function daiPoolWithdrawAll() {
  const tPoolDaiInstance = new web3.eth.Contract(
    JSON.parse(ABI.tPoolDai),
    tPoolDaiAddress
  );

  const withdraw = await new Promise((resolve, reject) => {
    tPoolDaiInstance.methods.withdrawAll().send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  document.getElementById('dai-pool-withdraw-all').innerText = 'Withdrawing...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(withdraw);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('dai-pool-withdraw-all').innerText = 'Withdraw';
    }
  }, 10 * 1000);
}
