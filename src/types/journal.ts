import { z } from 'zod'

export const journalEntrySchema = z.object({
  title: z.string().min(1, 'Title is required').max(50),
  message: z.string().min(1, 'Message is required').max(10000),
})


export type JournalEntry = z.infer<typeof journalEntrySchema>
