(function() {var implementors = {
"astar_primitives":[["impl&lt;T: Config&gt; MaxEncodedLen for <a class=\"struct\" href=\"astar_primitives/migrations/contract_v12_fix/struct.CodeInfo.html\" title=\"struct astar_primitives::migrations::contract_v12_fix::CodeInfo\">CodeInfo</a>&lt;T&gt;"],["impl&lt;T: Config&gt; MaxEncodedLen for <a class=\"struct\" href=\"astar_primitives/migrations/contract_v12_fix/struct.Migration.html\" title=\"struct astar_primitives::migrations::contract_v12_fix::Migration\">Migration</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as Config&gt;::Hash&gt;: MaxEncodedLen,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;T&gt;: MaxEncodedLen,</span>"],["impl&lt;T, OldCurrency&gt; MaxEncodedLen for <a class=\"struct\" href=\"astar_primitives/migrations/contract_v14/struct.Migration.html\" title=\"struct astar_primitives::migrations::contract_v14::Migration\">Migration</a>&lt;T, OldCurrency&gt;<span class=\"where fmt-newline\">where\n    T: Config,\n    OldCurrency: ReservableCurrency&lt;&lt;T as Config&gt;::AccountId&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as Config&gt;::Hash&gt;: MaxEncodedLen,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.tuple.html\">(T, OldCurrency)</a>&gt;: MaxEncodedLen,</span>"],["impl&lt;T: Config, OldCurrency&gt; MaxEncodedLen for <a class=\"struct\" href=\"astar_primitives/migrations/contract_v12/struct.Migration.html\" title=\"struct astar_primitives::migrations::contract_v12::Migration\">Migration</a>&lt;T, OldCurrency&gt;<span class=\"where fmt-newline\">where\n    OldCurrency: ReservableCurrency&lt;&lt;T as Config&gt;::AccountId&gt;,\n    OldCurrency::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&lt;&lt;T as Config&gt;::Currency as Inspect&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance&gt;,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as Config&gt;::Hash&gt;: MaxEncodedLen,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.70.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;OldCurrency&gt;: MaxEncodedLen,</span>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"astar_primitives/oracle/enum.CurrencyId.html\" title=\"enum astar_primitives::oracle::CurrencyId\">CurrencyId</a>"],["impl&lt;T: Config, OldCurrency&gt; MaxEncodedLen for <a class=\"struct\" href=\"astar_primitives/migrations/contract_v12/struct.CodeInfo.html\" title=\"struct astar_primitives::migrations::contract_v12::CodeInfo\">CodeInfo</a>&lt;T, OldCurrency&gt;<span class=\"where fmt-newline\">where\n    OldCurrency: ReservableCurrency&lt;&lt;T as Config&gt;::AccountId&gt;,</span>"],["impl&lt;Address&gt; MaxEncodedLen for <a class=\"enum\" href=\"astar_primitives/evm/enum.UnifiedAddress.html\" title=\"enum astar_primitives::evm::UnifiedAddress\">UnifiedAddress</a>&lt;Address&gt;<span class=\"where fmt-newline\">where\n    Address: MaxEncodedLen,</span>"],["impl&lt;AccountId&gt; MaxEncodedLen for <a class=\"enum\" href=\"astar_primitives/dapp_staking/enum.SmartContract.html\" title=\"enum astar_primitives::dapp_staking::SmartContract\">SmartContract</a>&lt;AccountId&gt;<span class=\"where fmt-newline\">where\n    AccountId: MaxEncodedLen,</span>"]],
"astar_runtime":[["impl MaxEncodedLen for <a class=\"enum\" href=\"astar_runtime/enum.RuntimeSlashReason.html\" title=\"enum astar_runtime::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"astar_runtime/enum.ProxyType.html\" title=\"enum astar_runtime::ProxyType\">ProxyType</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"astar_runtime/enum.RuntimeHoldReason.html\" title=\"enum astar_runtime::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"astar_runtime/enum.OriginCaller.html\" title=\"enum astar_runtime::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"astar_runtime/enum.RuntimeFreezeReason.html\" title=\"enum astar_runtime::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"astar_runtime/enum.RuntimeLockId.html\" title=\"enum astar_runtime::RuntimeLockId\">RuntimeLockId</a>"]],
"local_runtime":[["impl MaxEncodedLen for <a class=\"enum\" href=\"local_runtime/enum.RuntimeSlashReason.html\" title=\"enum local_runtime::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"local_runtime/enum.RuntimeHoldReason.html\" title=\"enum local_runtime::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"local_runtime/enum.RuntimeLockId.html\" title=\"enum local_runtime::RuntimeLockId\">RuntimeLockId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"local_runtime/enum.RuntimeFreezeReason.html\" title=\"enum local_runtime::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"local_runtime/enum.OriginCaller.html\" title=\"enum local_runtime::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"local_runtime/enum.ProxyType.html\" title=\"enum local_runtime::ProxyType\">ProxyType</a>"]],
"pallet_block_rewards_hybrid":[["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_block_rewards_hybrid/struct.RewardDistributionConfig.html\" title=\"struct pallet_block_rewards_hybrid::RewardDistributionConfig\">RewardDistributionConfig</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_block_rewards_hybrid/struct.Rewards.html\" title=\"struct pallet_block_rewards_hybrid::Rewards\">Rewards</a>"]],
"pallet_dapp_staking_migration":[["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapp_staking_migration/pallet/enum.MigrationState.html\" title=\"enum pallet_dapp_staking_migration::pallet::MigrationState\">MigrationState</a>"]],
"pallet_dapp_staking_v3":[["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.ForcingType.html\" title=\"enum pallet_dapp_staking_v3::ForcingType\">ForcingType</a>"],["impl&lt;AccountId&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.DAppInfo.html\" title=\"struct pallet_dapp_staking_v3::DAppInfo\">DAppInfo</a>&lt;AccountId&gt;<span class=\"where fmt-newline\">where\n    AccountId: MaxEncodedLen,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.70.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AccountId&gt;: MaxEncodedLen,</span>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.ProtocolState.html\" title=\"struct pallet_dapp_staking_v3::ProtocolState\">ProtocolState</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.UnlockingChunk.html\" title=\"struct pallet_dapp_staking_v3::UnlockingChunk\">UnlockingChunk</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.ContractStakeAmount.html\" title=\"struct pallet_dapp_staking_v3::ContractStakeAmount\">ContractStakeAmount</a>"],["impl&lt;UnlockingLen: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.AccountLedger.html\" title=\"struct pallet_dapp_staking_v3::AccountLedger\">AccountLedger</a>&lt;UnlockingLen&gt;<span class=\"where fmt-newline\">where\n    BoundedVec&lt;<a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.UnlockingChunk.html\" title=\"struct pallet_dapp_staking_v3::UnlockingChunk\">UnlockingChunk</a>, UnlockingLen&gt;: MaxEncodedLen,</span>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.Subperiod.html\" title=\"enum pallet_dapp_staking_v3::Subperiod\">Subperiod</a>"],["impl&lt;NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;, T: TierSlotsFunc&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.TiersConfiguration.html\" title=\"struct pallet_dapp_staking_v3::TiersConfiguration\">TiersConfiguration</a>&lt;NT, T&gt;<span class=\"where fmt-newline\">where\n    BoundedVec&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u16.html\">u16</a>, NT&gt;: MaxEncodedLen,\n    BoundedVec&lt;Permill, NT&gt;: MaxEncodedLen,\n    BoundedVec&lt;<a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.TierThreshold.html\" title=\"enum pallet_dapp_staking_v3::TierThreshold\">TierThreshold</a>, NT&gt;: MaxEncodedLen,</span>"],["impl&lt;SL: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.EraRewardSpan.html\" title=\"struct pallet_dapp_staking_v3::EraRewardSpan\">EraRewardSpan</a>&lt;SL&gt;<span class=\"where fmt-newline\">where\n    BoundedVec&lt;<a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.EraReward.html\" title=\"struct pallet_dapp_staking_v3::EraReward\">EraReward</a>, SL&gt;: MaxEncodedLen,</span>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.SingularStakingInfo.html\" title=\"struct pallet_dapp_staking_v3::SingularStakingInfo\">SingularStakingInfo</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.StakeAmount.html\" title=\"struct pallet_dapp_staking_v3::StakeAmount\">StakeAmount</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.EraInfo.html\" title=\"struct pallet_dapp_staking_v3::EraInfo\">EraInfo</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.EraReward.html\" title=\"struct pallet_dapp_staking_v3::EraReward\">EraReward</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.CleanupMarker.html\" title=\"struct pallet_dapp_staking_v3::CleanupMarker\">CleanupMarker</a>"],["impl&lt;MD: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;, NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.DAppTierRewards.html\" title=\"struct pallet_dapp_staking_v3::DAppTierRewards\">DAppTierRewards</a>&lt;MD, NT&gt;<span class=\"where fmt-newline\">where\n    BoundedBTreeMap&lt;DAppId, TierId, MD&gt;: MaxEncodedLen,\n    BoundedVec&lt;Balance, NT&gt;: MaxEncodedLen,</span>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.TierThreshold.html\" title=\"enum pallet_dapp_staking_v3::TierThreshold\">TierThreshold</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.EraRewardSpanError.html\" title=\"enum pallet_dapp_staking_v3::EraRewardSpanError\">EraRewardSpanError</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapp_staking_v3/pallet/enum.FreezeReason.html\" title=\"enum pallet_dapp_staking_v3::pallet::FreezeReason\">FreezeReason</a>"],["impl&lt;NT: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.TierParameters.html\" title=\"struct pallet_dapp_staking_v3::TierParameters\">TierParameters</a>&lt;NT&gt;<span class=\"where fmt-newline\">where\n    BoundedVec&lt;Permill, NT&gt;: MaxEncodedLen,\n    BoundedVec&lt;<a class=\"enum\" href=\"pallet_dapp_staking_v3/enum.TierThreshold.html\" title=\"enum pallet_dapp_staking_v3::TierThreshold\">TierThreshold</a>, NT&gt;: MaxEncodedLen,</span>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.PeriodEndInfo.html\" title=\"struct pallet_dapp_staking_v3::PeriodEndInfo\">PeriodEndInfo</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapp_staking_v3/struct.PeriodInfo.html\" title=\"struct pallet_dapp_staking_v3::PeriodInfo\">PeriodInfo</a>"]],
"pallet_dapps_staking":[["impl&lt;AccountId&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapps_staking/struct.DAppInfo.html\" title=\"struct pallet_dapps_staking::DAppInfo\">DAppInfo</a>&lt;AccountId&gt;<span class=\"where fmt-newline\">where\n    AccountId: MaxEncodedLen,</span>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapps_staking/struct.RewardInfo.html\" title=\"struct pallet_dapps_staking::RewardInfo\">RewardInfo</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapps_staking/struct.AccountLedger.html\" title=\"struct pallet_dapps_staking::AccountLedger\">AccountLedger</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapps_staking/struct.EraStake.html\" title=\"struct pallet_dapps_staking::EraStake\">EraStake</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapps_staking/struct.UnlockingChunk.html\" title=\"struct pallet_dapps_staking::UnlockingChunk\">UnlockingChunk</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapps_staking/enum.Version.html\" title=\"enum pallet_dapps_staking::Version\">Version</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapps_staking/enum.RewardDestination.html\" title=\"enum pallet_dapps_staking::RewardDestination\">RewardDestination</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapps_staking/enum.Forcing.html\" title=\"enum pallet_dapps_staking::Forcing\">Forcing</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapps_staking/struct.EraInfo.html\" title=\"struct pallet_dapps_staking::EraInfo\">EraInfo</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapps_staking/struct.StakerInfo.html\" title=\"struct pallet_dapps_staking::StakerInfo\">StakerInfo</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapps_staking/struct.ContractStakeInfo.html\" title=\"struct pallet_dapps_staking::ContractStakeInfo\">ContractStakeInfo</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"pallet_dapps_staking/enum.DAppState.html\" title=\"enum pallet_dapps_staking::DAppState\">DAppState</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_dapps_staking/struct.UnbondingInfo.html\" title=\"struct pallet_dapps_staking::UnbondingInfo\">UnbondingInfo</a>"]],
"pallet_ethereum_checked":[["impl&lt;AccountId&gt; MaxEncodedLen for <a class=\"enum\" href=\"pallet_ethereum_checked/enum.RawOrigin.html\" title=\"enum pallet_ethereum_checked::RawOrigin\">RawOrigin</a>&lt;AccountId&gt;<span class=\"where fmt-newline\">where\n    AccountId: MaxEncodedLen,</span>"]],
"pallet_inflation":[["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_inflation/struct.InflationConfiguration.html\" title=\"struct pallet_inflation::InflationConfiguration\">InflationConfiguration</a>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_inflation/struct.InflationParameters.html\" title=\"struct pallet_inflation::InflationParameters\">InflationParameters</a>"]],
"pallet_price_aggregator":[["impl&lt;L: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.70.0/std/primitive.u32.html\">u32</a>&gt;&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_price_aggregator/struct.CircularBuffer.html\" title=\"struct pallet_price_aggregator::CircularBuffer\">CircularBuffer</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    BoundedVec&lt;CurrencyAmount, L&gt;: MaxEncodedLen,</span>"],["impl MaxEncodedLen for <a class=\"struct\" href=\"pallet_price_aggregator/struct.ValueAggregator.html\" title=\"struct pallet_price_aggregator::ValueAggregator\">ValueAggregator</a>"]],
"precompile_utils":[["impl MaxEncodedLen for <a class=\"struct\" href=\"precompile_utils/testing/account/struct.MockAccount.html\" title=\"struct precompile_utils::testing::account::MockAccount\">MockAccount</a>"]],
"shibuya_runtime":[["impl MaxEncodedLen for <a class=\"enum\" href=\"shibuya_runtime/enum.RuntimeHoldReason.html\" title=\"enum shibuya_runtime::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shibuya_runtime/enum.RuntimeFreezeReason.html\" title=\"enum shibuya_runtime::RuntimeFreezeReason\">RuntimeFreezeReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shibuya_runtime/enum.ProxyType.html\" title=\"enum shibuya_runtime::ProxyType\">ProxyType</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shibuya_runtime/enum.RuntimeLockId.html\" title=\"enum shibuya_runtime::RuntimeLockId\">RuntimeLockId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shibuya_runtime/enum.RuntimeSlashReason.html\" title=\"enum shibuya_runtime::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shibuya_runtime/enum.OriginCaller.html\" title=\"enum shibuya_runtime::OriginCaller\">OriginCaller</a>"]],
"shiden_runtime":[["impl MaxEncodedLen for <a class=\"enum\" href=\"shiden_runtime/enum.ProxyType.html\" title=\"enum shiden_runtime::ProxyType\">ProxyType</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shiden_runtime/enum.OriginCaller.html\" title=\"enum shiden_runtime::OriginCaller\">OriginCaller</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shiden_runtime/enum.RuntimeSlashReason.html\" title=\"enum shiden_runtime::RuntimeSlashReason\">RuntimeSlashReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shiden_runtime/enum.RuntimeLockId.html\" title=\"enum shiden_runtime::RuntimeLockId\">RuntimeLockId</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shiden_runtime/enum.RuntimeHoldReason.html\" title=\"enum shiden_runtime::RuntimeHoldReason\">RuntimeHoldReason</a>"],["impl MaxEncodedLen for <a class=\"enum\" href=\"shiden_runtime/enum.RuntimeFreezeReason.html\" title=\"enum shiden_runtime::RuntimeFreezeReason\">RuntimeFreezeReason</a>"]],
"unified_accounts_chain_extension_types":[["impl&lt;T&gt; MaxEncodedLen for <a class=\"enum\" href=\"unified_accounts_chain_extension_types/enum.UnifiedAddress.html\" title=\"enum unified_accounts_chain_extension_types::UnifiedAddress\">UnifiedAddress</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: MaxEncodedLen + Encode + Decode,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()