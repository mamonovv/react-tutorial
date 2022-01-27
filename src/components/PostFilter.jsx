import React from 'react'
import Myinput from './UI/input/MyInput'
import Myselect from './UI/select/MySelect'

const Postfilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Myinput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <Myselect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  )
}

export default Postfilter
