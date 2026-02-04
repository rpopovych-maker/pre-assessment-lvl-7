interface IContactColumn {
  id: string
  label: string
}

interface IContactCell {
  colId: string
  value: string
}

interface IContactRow {
  id: string
  cells: IContactCell[]
}

interface IContactUpdate {
  rowId: string
  colId: string
  value: string
}
