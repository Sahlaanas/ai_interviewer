import React from 'react'
import { Controller } from 'react-hook-form'
import { FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const FormField = ({ control, name, label, placeholder, type = "text" }) => {
  return (
    <Controller 
      name={name} 
      control={control} 
      render={({ field }) => (
        <FormItem>
          <FormLabel className="label">{label}</FormLabel>
          <FormControl>
            <Input 
            className="input"
              type={type}
              placeholder={placeholder} 
              {...field} 
            />
          </FormControl>
   
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormField;