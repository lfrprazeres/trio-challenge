import { DateRange } from '@mui/x-date-pickers-pro'

import { Container, PickerDay, arrowStyles } from './DatePickerRange.styles'
import DateRangeValue from './DatePickerRange.types'

interface DatePickerRangeProps {
  value: DateRangeValue,
  onChange: (newValue: DateRangeValue) => void
}

const DatePickerRange = ({ value, onChange }: DatePickerRangeProps) => {
  const handleChange = (newValue: DateRange<unknown>) => {
    onChange(newValue as DateRangeValue)
  }

  return (
    <Container
      value={value}
      onChange={handleChange}
      showDaysOutsideCurrentMonth
      disableAutoMonthSwitching
      dayOfWeekFormatter={(day) => day}
      calendars={1}
      disablePast
      slots={{ day: PickerDay }}
      slotProps={{
        actionBar: { sx: { display: 'none' } },
        toolbar: { hidden: true },
        previousIconButton: { sx: arrowStyles },
        nextIconButton: { sx: arrowStyles },
      }}
    />
  )
}

export default DatePickerRange