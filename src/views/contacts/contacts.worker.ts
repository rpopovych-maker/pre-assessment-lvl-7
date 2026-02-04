/// <reference lib="webworker" />

import { contactsUpdatesService } from '@/views/contacts/contacts-updates.service'
import { EContactsWorkerEventFromWorker, EContactsWorkerCommandToWorker } from '@/views/contacts/contacts.enums'

const MAX_BATCH_SIZE = 100
const PING_INTERVAL = 500

const queue: IContactUpdate[] = []
let intervalId: number | null = null
let isRunning = false

function flushQueue () {
  if (!queue.length) return
  const batch = queue.splice(0, MAX_BATCH_SIZE)
  postMessage({ type: EContactsWorkerEventFromWorker.UPDATE, payload: batch })
}

function startWorker () {
  if (isRunning) return
  isRunning = true
  contactsUpdatesService.listenUpdates(update => queue.push(update))
  intervalId = setInterval(flushQueue, PING_INTERVAL)
}

function stopWorker () {
  if (!isRunning) return
  isRunning = false
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
  contactsUpdatesService.stopListening()
  queue.length = 0
}

self.onmessage = (event) => {
  switch (event.data.type) {
    case EContactsWorkerCommandToWorker.START:
      startWorker()
      break
    case EContactsWorkerCommandToWorker.STOP:
      stopWorker()
      break
  }
}
