import { Button, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import CustomInput from './utils/CustomInput'

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      console.log(values)
      setTimeout(() => {
        resolve()
        reset()
      }, 1000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        justify="center"
        align={{ base: 'center', md: 'flex-end' }}
        px={{ base: 12, md: 16 }}
        py={{ lg: 12 }}
        pb="12"
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

        <Button
          variant="dark"
          type="submit"
          display="flex"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </Flex>
    </form>
  )
}

export default ContactForm
