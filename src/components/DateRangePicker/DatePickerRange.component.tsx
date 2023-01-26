import { DateRange, StaticDatePickerSlotsComponentsProps } from '@mui/x-date-pickers-pro'

import { Container, PickerDay, arrowStyles } from './DatePickerRange.styles'
import DateRangeValue from './DatePickerRange.types'

type TestId = keyof StaticDatePickerSlotsComponentsProps<DateRangeValue>

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
      data-testid='date-range'
      slots={{ day: PickerDay }}
      slotProps={{
        day: { ['data-testid'as TestId ]: 'date-range-day' },
        actionBar: { sx: { display: 'none' } },
        toolbar: { hidden: true },
        previousIconButton: { sx: arrowStyles, ['data-testid' as TestId]: 'date-range-previous-icon-button' },
        nextIconButton: { sx: arrowStyles, ['data-testid' as TestId]: 'date-range-next-icon-button' },
      }}
    />
  )
}

export default DatePickerRange