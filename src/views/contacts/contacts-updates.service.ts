import { getRandomCellUpdate } from './contacts-table.fixture'

class ContactsUpdatesService {
  interval: number | null = null

  listenUpdates (callback: (update: IContactUpdate) => void) {
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
