'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MultiSelectDropdown, {
  Option1
} from '../components/Dropdown/MoodDropdown'
import TODDropdown, { Option } from '../components/Dropdown/TimeDropdown'
import toast from 'react-hot-toast'
import { addFood } from '../action/action'


interface Meals {
  image: string
  name: string
  description: string
  mood: string
  selectedTime: Option[]
  selectedMood: Option1[]
}

const MealForm = () => {
  const [image, setImage] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<Option[]>([])
  const [selectedMood, setSelectedMood] = useState<Option1[]>([])

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case 'image':
        setImage(e.target.value)
        break
      case 'name':
        setName(e.target.value)
        break
      case 'description':
        setDescription(e.target.value)
        break
        
      default:
        break
    }
  }
  const handleSubmit =  (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
       addFood(formData);
      toast.success('Food added!');
      event.target.reset();
    } catch (error) {
      toast.error('Failed to add food.');
    }
  };
  

  return (
    <div className='flex h-screen w-full items-center justify-center'>
     
      <form
        onSubmit={handleSubmit}
        className='flex  flex-col  justify-center gap-5  border p-10'
      >
        <div className='flex flex-col  '>
          <label htmlFor='image'>Image Url</label>
          <input
            className='h-[40px] border'
            value={image}
            type='text'
            id='image'
            name='image'
            onChange={handleChange('image')}
          />
        </div>
        <div className='flex flex-col '>
          <label htmlFor='name'>Name</label>
          <input
            className='h-[40px] border '
            value={name}
            type='text'
            id='name'
            name='name'
            onChange={handleChange('name')}
          />
        </div>
        <div className='flex flex-col '>
          <label htmlFor='description'>Description</label>
          <input
            className='h-[40px] border '
            value={description}
            type='text'
            id='description'
            name='description'
            onChange={handleChange('description')}
          />
        </div>
        <div className='flex flex-col '>
          <TODDropdown selectedTime={selectedTime} onChange={setSelectedTime} />
        </div>
        <div className='flex flex-col '>
          <MultiSelectDropdown selectedMood={selectedMood} onChange={setSelectedMood} />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default MealForm
