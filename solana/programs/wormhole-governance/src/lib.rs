use anchor_lang::prelude::*;

declare_id!("wgsxzHU7iyP6QwfHw6ZkKYt8dxfRGowQCDxDR2La2sw");

pub mod error;
pub mod instructions;

use instructions::*;

#[program]
pub mod wormhole_governance {
    use super::*;

    pub fn governance<'info>(ctx: Context<'_, '_, '_, 'info, Governance<'info>>) -> Result<()> {
        instructions::governance(ctx)
    }
}
