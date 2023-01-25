import { Container, PickerDay, arrowStyles } from './DatePickerRange.styles';

const DatePickerRange = () => (
  <Container
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

export default DatePickerRange