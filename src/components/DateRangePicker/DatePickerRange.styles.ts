import { styled } from '@mui/material'
import { StaticDateRangePicker, DateRangePickerDay } from '@mui/x-date-pickers-pro'

const dateRangePrefix = '.MuiDateRangeCalendar'
const calendarContainer = `${dateRangePrefix}-monthContainer`
const watermark = `${dateRangePrefix}-root > div:not(${calendarContainer})`

export const Container = styled(StaticDateRangePicker)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 40,
  filter: 'drop-shadow(0px 10px 70px rgba(0, 0, 0, 0.2))',
  [theme.breakpoints.down('sm')]: {
    minWidth: 'auto',
    '& div': {
      minWidth: 'auto'
    }
  },
  [calendarContainer]: {
    padding: '20px 5px',
    width: '100%',
    '& .MuiDayCalendar-weekDayLabel': { color: theme.palette.grey[100] },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  '& .MuiPickersCalendarHeader-label': {
    color: theme.palette.grey[100],
    lineHeight: 1.25,
    wordSpacing: '100vw',
    '&::first-line': {
      color: theme.palette.common.white,
      fontSize: 26,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  [`& ${watermark}`]: { display: 'none' },
}))

export const PickerDay = styled(DateRangePickerDay)(({ theme }) => ({
  '& .MuiPickersDay-root': {
    color: theme.palette.common.white,
    fontWeight: 600,
    '&.MuiPickersDay-today': {
      borderColor: theme.palette.common.white,
    },
    '&.Mui-selected, &.Mui-selected:focus, &.Mui-selected:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white,
    },
    '&.Mui-disabled': { color: theme.palette.grey[100] },
  },
}))

export const arrowStyles = {
  borderRadius: '17px',
  border: '1px solid',
  color: 'common.white',
  width: 45,
  height: 45,
  '&.Mui-disabled': { color: 'grey.100' },
}
