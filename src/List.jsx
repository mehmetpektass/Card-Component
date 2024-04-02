function List(){
    const vegetables = [{id:1, name:"carrot", calories: 80},
                        {id:2, name:"tomato", calories: 120},
                        {id:3, name:"potato", calories:135},
                        {id:4, name:"cucumber", calories:50},
                        {id:5, name:"broccoli", calories:70}];
    const listItems = vegetables.map(vegetable => <li  key={vegetable.id} className="listItemsLI">{vegetable.name}: &nbsp; {vegetable.calories}</li>)
    return(<ul className="listItemsUL">{listItems}</ul>);
    
}
export default List
