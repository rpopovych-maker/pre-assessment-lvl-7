import { EContactsWorkerCommandToWorker, EContactsWorkerEventFromWorker } from '@/views/contacts/contacts.enums'

export function useContactsWorker () {
  const contactsStore = useContactsStore()
  const contactsWorker = new Worker(new URL('../contacts.worker.ts', import.meta.url), { type: 'module' })

  contactsWorker.onmessage = (event) => {
    switch (event.data.type) {
      case EContactsWorkerEventFromWorker.UPDATE:
        event.data.payload.forEach(contactsStore.patchRow)
        break
    }
  }

  onMounted(() => {
    contactsWorker.postMessage({ type: EContactsWorkerCommandToWorker.START })
  })

  onBeforeUnmount(() => {
    contactsWorker.postMessage({ type: EContactsWorkerCommandToWorker.STOP })
    contactsWorker.terminate()
  })

  return { contactsWorker }
}
