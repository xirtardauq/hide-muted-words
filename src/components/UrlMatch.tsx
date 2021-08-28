import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import NativeSelect from '@material-ui/core/NativeSelect'
import Select from '@material-ui/core/Select'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import type { IUrlMatch, TargetType, TargetCondition } from '../store/types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		text: {
      position: 'relative',
      backgroundColor: 'transparent',
      padding: '8px 2px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
		},
    textInput: {
      fontSize: '0.8125rem'
    },
    type: {
      width: '5.5rem',
      fontSize: '0.8125rem'
    },
    condition: {
      width: '10rem',
      fontSize: '0.8125rem'
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
)

interface IProps {
  match: IUrlMatch
  onChange: (match: IUrlMatch) => void
}

const UrlMatch = ({ match, onChange }: IProps) => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<FormControl className={classes.margin}>
        <Select
          value={match.type}
          className={classes.type}
          onChange={(e) => onChange && onChange({...match, type: e.target.value as TargetType})}
        >
          <MenuItem value={'Domain'}>Domain</MenuItem>
          <MenuItem value={'URL'}>URL</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <NativeSelect
          value={match.condition}
          className={classes.condition}
          onChange={(e) => onChange && onChange({...match, condition: e.target.value as TargetCondition})}
        >
          <option value={'Equals'}>is equal to</option>
          <option value={'NotEqual'}>is not equal to</option>
          <option value={'StartsWith'}>starts with</option>
          <option value={'NotStartWith'}>does not start with</option>
        </NativeSelect>
      </FormControl>
			<FormControl>
			<TextField
        className={classes.text}
        value={match.value}
        onChange={(e) => onChange && onChange({...match, value: e.target.value as string})}
        InputProps={{
          classes: { input: classes.textInput }
        }}
      />
			</FormControl>
		</div>
	)
}

export default UrlMatch