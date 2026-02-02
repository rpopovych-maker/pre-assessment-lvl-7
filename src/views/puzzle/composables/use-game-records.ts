export function useGameRecords () {
  const GAME_RECORDS_LS_KEY = 'score'

  const gameRecords = useLocalStorage<IGameRecord[]>(GAME_RECORDS_LS_KEY, [], { deep: true })

  function addGameRecord (record: Omit<IGameRecord, 'date'>) {
    gameRecords.value.push({
      ...record,
      date: new Date().toISOString()
    })
  }

  return { gameRecords: readonly(gameRecords), addGameRecord }
}
