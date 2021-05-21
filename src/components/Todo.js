import Input from './Input';
import Filter from './Filter';

import useFirestore from '../hooks/useFirestore';

 function Todo() {
    const [items, addItem, updateItem, clearItems] = useFirestore();

   const [filter, setFilter] = React.useState('ALL');

	@@ -19,17 +19,11 @@ import useStorage from '../hooks/useStorage';
   });

   const handleCheck = checked => {
    updateItem(checked);
 };

   const handleAdd = text => {
     addItem({ text, done: false });
  };

  const handleFilterChange = value => setFilter(value);
	@@ -50,7 +44,7 @@ import useStorage from '../hooks/useStorage';
       />
       {displayItems.map(item => (
         <TodoItem 
           key={item.id}
           item={item}
           onCheck={handleCheck}
         />