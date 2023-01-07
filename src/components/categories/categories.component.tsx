import { useState, useEffect } from 'react'
/* import axios from 'axios' */

// Components
import CategoryItem from '../category-item/category-item.component'

// Utilities
import Category from '../../types/category.types'
/* import env from '../../config/env.config' */

// Styles
import './categories.style.css'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      /* const { data } = await axios.get(`${env.apiUrl}/api/category`) */
      // Categories HardCode - Temporary
      const data = [
        {
          id: 'cat01',
          name: 'sneakers',
          imageUrl:
            'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          displayName: 'Tênis'
        },
        {
          id: 'cat02',
          name: 'hats',
          imageUrl:
            'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          displayName: 'Chapéus'
        },
        {
          id: 'cat03',
          name: 'jackets',
          imageUrl:
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          displayName: 'Jaquetas'
        },
        {
          id: 'cat04',
          name: 'female',
          imageUrl:
            'https://images.unsplash.com/photo-1585325796223-d02326506719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlJTIwY2xvdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          displayName: 'Feminio'
        },
        {
          id: 'cat05',
          name: 'male',
          imageUrl:
            'https://images.unsplash.com/photo-1573198721163-e9b0d696456f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBjbG90aHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          displayName: 'Masculino'
        }
      ]
      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  console.log(categories)
  useEffect(() => {
    fetchCategories()
  }, [])
  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
