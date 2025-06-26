import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { CrudApp } from '../target/types/crud_app'

describe('basic', () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env())

  const program = anchor.workspace.Basic as Program<CrudApp>

  it('should run the program', async () => {
    // Add your test here.
    const tx = await program.account.journalEntryState.all()
    console.log('Your transaction signature', tx)
  })
})
