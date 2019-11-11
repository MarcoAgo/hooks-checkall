import React, { useState } from 'react';

const App = () => {

  const listItems = [
    {
      value: 'Item 1',
    },
    {
      value: 'Item 2',
    },
    {
      value: 'Item 3',
    },
    {
      value: 'Item 4',
    },
  ];

  const [children, setChildren] = useState(listItems);
  const [checkAll, setCheckAll] = useState(false);

  const findElem = (el) => {
    return el.checked !== true;
  }

  const handleChange = (e) => {
    // take the name of the target element
    const targetName = e.target.name;

    // create a variable that loop over the list
    let result = children.map((item,i) => {
      if (targetName === 'checkAll') {
        setCheckAll(e.target.checked);
        
        const test = Object.assign({}, {...item, checked: e.target.checked});

        return test;
      } else {
        const test = Object.assign({}, {...item, checked: targetName === item.value ? e.target.checked : item.checked});

        if (!test.checked) {
          setCheckAll(false);
        }

        return test;
      }
    })

     if (result.find(findElem)) {
       setCheckAll(false)
     } else {
       setCheckAll(true)
     }

    console.log(result.find(findElem));

    setChildren(result)
  }

  return (
    <div className="App">
      <div>
        <ul className="checkboxList" style={{ listStyle: 'none' }} >
          <li>
            <input 
              name="checkAll" 
              type="checkbox"
              checked={checkAll}
              onChange={(e) => handleChange(e)}
            />
            <label>Select All</label>
          </li>
          {
            children.map(item => {
              return (
                <li key={item.value}>
                  <input
                   onChange={(e) => handleChange(e)}
                   checked={item.checked}
                   name={item.value}
                   type="checkbox" 
                   />
                  <label>{item.value}</label>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
