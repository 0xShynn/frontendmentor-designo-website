import { Button, Flex } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import CustomInput from './utils/CustomInput'

const schema = yup.object().shape({
  name: yup.string().required('A name is required'),
  email: yup.string().email().required('An email is required'),
  phone: yup.number().required('A phone number is required'),
  message: yup.string().required('A message is required'),
})

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) })

  function onSubmit(values) {
    return new Promise((resolve) => {
      console.log(values)
      setTimeout(() => {
        resolve()
        reset()
      }, 1000)
    })
  }

  const MotionButton = motion(Button)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        justify="center"
        align={{ base: 'center', md: 'flex-end' }}
        px={{ base: 12, md: 16 }}
        pt={{ lg: 16 }}
        pb={{ base: 20, lg: 16 }}
        direction="column"
        w={{ base: 'full', lg: '380px' }}
        boxSizing={{ base: 'border-box', lg: 'content-box' }}
      >
        {/* Name */}
        <CustomInput
          id="name"
          placeholder="Name"
          errorName={errors?.name}
          errorMessage={errors?.name?.message}
          register={{
            ...register('name', {
              required: 'This is required',
            }),
          }}
        />

        {/* Email */}
        <CustomInput
          id="email"
          placeholder="Email Address"
          errorName={errors?.email}
          errorMessage={errors?.email?.message}
          type="email"
          register={{
            ...register('email', {
              required: 'This is required',
            }),
          }}
        />

        {/* Phone */}
        <CustomInput
          id="phone"
          placeholder="Phone"
          errorName={errors?.phone}
          errorMessage={errors?.phone?.message}
          type="number"
          register={{
            ...register('phone', {
              required: 'This is required',
            }),
          }}
        />

        {/* Message */}
        <CustomInput
          isTextArea
          id="message"
          placeholder="Message"
          errorName={errors?.message}
          errorMessage={errors?.message?.message}
          register={{
            ...register('message', {
              required: 'This is required',
            }),
          }}
        />

        <MotionButton
          px="12"
          py="7"
          variant="dark"
          type="submit"
          display="flex"
          isLoading={isSubmitting}
          mt="2"
          initial={{ y: 0 }}
          whileTap={{ y: 3 }}
          _hover={{ bg: 'white' }}
        >
          Submit
        </MotionButton>
      </Flex>
    </form>
  )
}

export default ContactForm
