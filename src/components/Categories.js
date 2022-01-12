import React from 'react'

export default function Categories({categories}) {

    console.log(categories)

    return (
        <div className='categories__container'>
                { categories.length > 0 &&  categories.map(categorie => (
                    <label key={categorie.id} className="category__item"> 
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span className="category__name">{categorie.name}</span> 
                    </label>
                ))
                }
        </div>
    )
}
