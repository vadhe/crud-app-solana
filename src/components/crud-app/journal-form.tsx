import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { PlusCircle, Sparkles } from 'lucide-react'
import { useJournalForm } from '@/hooks/services/use-journal-form'

export const JournalForm = () => {
  const { title, setTitle, message, setMessage, handleSubmit, isPending, errors, onSubmit, register, publicKey } =
    useJournalForm()

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-amber-500" />
        <h2 className="text-2xl font-semibold text-gray-800">New Entry</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <Input
            id="title"
            value={title}
            {...register('title')}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title for your journal entry..."
            className="text-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400/20"
            maxLength={50}
            disabled={isPending}
          />
          {errors.title && <span className="text-xs text-red-600">{errors.title.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <Textarea
            id="message"
            {...register('message')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind today? Share your thoughts, experiences, or reflections..."
            className="min-h-[150px] text-lg leading-relaxed border-amber-200 focus:border-amber-400 focus:ring-amber-400/20 resize-none"
            style={{ fontFamily: 'Georgia, serif' }}
            maxLength={10000}
            disabled={isPending}
          />
          {errors.message && <span className="text-xs text-red-600">{errors.message.message}</span>}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isPending || !publicKey}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PlusCircle className="w-5 h-5" />
            {isPending ? 'Saving...' : 'Save Entry'}
          </Button>
        </div>
      </form>
    </div>
  )
}
