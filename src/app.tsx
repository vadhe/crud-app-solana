import Header from './components/crud-app/header'
import { JournalForm } from './components/crud-app/journal-form'
import { WalletConnect } from './components/crud-app/wallet-connect'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <Header />

        {/* Wallet Connection */}
        <div className="mb-8">
          <WalletConnect />
        </div>

        {/* Journal Form */}
        <div className="mb-8">
          <JournalForm />
        </div>

        {/* Journal Entries */}
        {/* <div className="space-y-6">
        {entries.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12 border border-amber-100">
              <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Your journal is empty</h3>
              <p className="text-gray-500">Start by writing your first entry above</p>
            </div>
          </div>
        ) : (
          <JournalList entries={entries} onDeleteEntry={deleteEntry} />
        )}
      </div> */}
      </div>
    </div>
  )
}

export default App
