import { getRandomCellUpdate } from './contacts-table.fixture'

class ContactsUpdatesService {
  interval: number | null = null

  listenUpdates (callback: (update: ReturnType<typeof getRandomCellUpdate>) => void) {
    this.interval = setInterval(() => {
      callback(getRandomCellUpdate())
    })
  }

  stopListening () {
    if (this.interval === null) return
    clearInterval(this.interval)
  }
}

export const contactsUpdatesService = new ContactsUpdatesService()
