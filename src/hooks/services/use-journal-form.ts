import { useWallet } from '@solana/wallet-adapter-react'
import { useAnchorProvider } from '@/hooks/use-anchor-provider'
import { useMemo, useState } from 'react'
import { getCrudAppProgram, getCrudAppProgramId } from '@project/anchor'
import { useMutation } from '@tanstack/react-query'
import { journalEntrySchema, type JournalEntry } from '@/types/journal'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

export function useJournalForm() {
  const { publicKey } = useWallet()
  const provider = useAnchorProvider()
  const programId = useMemo(() => getCrudAppProgramId(), [])
  const program = useMemo(() => getCrudAppProgram(provider, programId), [provider, programId])

  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JournalEntry>({
    resolver: zodResolver(journalEntrySchema),
  })
  const { mutate, isPending, isError } = useMutation({
    mutationFn: async ({ title, message }: { title: string; message: string }) => {
      if (!publicKey) return
      return await program.methods
        .createJournalEntry(title, message)
        .accounts({
          owner: publicKey,
        })
        .rpc()
    },
    onSuccess: (signature) => {
      toast.success(`Transaction successful ${signature}`)
      reset()
    },
    onError: (err) => {
      toast.error(`Transaction failed ${err}`)

    },
  })
  const onSubmit = (data: JournalEntry) => {
    mutate(data)
  }
  return { handleSubmit, title, setTitle, message, setMessage, isError, isPending, register, errors, onSubmit, publicKey}
}
