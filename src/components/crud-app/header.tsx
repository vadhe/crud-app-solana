import { BookOpen, PenTool } from 'lucide-react'

function Header() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-3 bg-white rounded-full shadow-lg">
          <BookOpen className="w-8 h-8 text-amber-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">My Journal</h1>
        <div className="p-3 bg-white rounded-full shadow-lg">
          <PenTool className="w-8 h-8 text-amber-600" />
        </div>
      </div>
      <p className="text-gray-600 text-lg">Capture your thoughts, preserve your memories</p>
    </div>
  )
}

export default Header
