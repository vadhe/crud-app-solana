
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Sparkles } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

// interface JournalFormProps {
//   onAddEntry: (message: string) => void;
// }

export const JournalForm = () => {
  const [message, setMessage] = useState('');
//   const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
    //   toast({
    //     title: "Empty Entry",
    //     description: "Please write something before saving your journal entry.",
    //     variant: "destructive",
    //   });
      return;
    }

    // onAddEntry(message.trim());
    setMessage('');
    // toast({
    //   title: "Entry Saved",
    //   description: "Your journal entry has been saved successfully!",
    // });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-amber-500" />
        <h2 className="text-2xl font-semibold text-gray-800">New Entry</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind today? Share your thoughts, experiences, or reflections..."
            className="min-h-[150px] text-lg leading-relaxed border-amber-200 focus:border-amber-400 focus:ring-amber-400/20 resize-none"
            style={{ fontFamily: 'Georgia, serif' }}
          />
        </div>
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
          >
            <PlusCircle className="w-5 h-5" />
            Save Entry
          </Button>
        </div>
      </form>
    </div>
  );
};