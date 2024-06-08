import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'

type Props = {}

const SelectLevelMarker = (props: Props) => {
  return (
    <Select>
    <SelectTrigger>
      <SelectValue placeholder="Selecione o nível do seu marcador" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Nível do marcador</SelectLabel>
        <SelectItem value="alto">Alto</SelectItem>
        <SelectItem value="medio">Médio</SelectItem>
        <SelectItem value="baixo">Baixo</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default SelectLevelMarker