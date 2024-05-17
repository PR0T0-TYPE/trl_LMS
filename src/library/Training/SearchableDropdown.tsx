import { Autocomplete, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

SearchableDropdown.propTypes = {
  ItemList: PropTypes.array,
  onclick: PropTypes.func,
  label: PropTypes.string
};

function SearchableDropdown({ ItemList, onChange, label, defaultValue = '',
  mandatory = false, sx = null, size = "medium", DisableClearable = false }) {
  const location = useLocation();
  const pathname = location.pathname;
  const pageName = pathname.replace('/extended-sidebar/Student/', '');

  return (
    <Autocomplete
      value={ItemList.find((item) => item.Value === defaultValue) || null}
      onChange={(e, newValue) => onChange(newValue ? newValue.Value : '')}
      options={ItemList}
      disableClearable={DisableClearable}
      getOptionLabel={(option) => option.Name}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          sx={sx || {
            minWidth: '130px',
            pl: '10px'
          }}
          label={label ? <>
            <span>{label} {mandatory && <span style={{ color: 'red' }}>*</span>}</span>
          </> : ''}
        />
      )}

    />
  );
}

export default SearchableDropdown;