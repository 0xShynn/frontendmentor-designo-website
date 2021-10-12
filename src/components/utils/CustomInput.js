import {
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
} from '@chakra-ui/react'

const CustomInput = (props) => {
  const {
    id,
    placeholder,
    errorName,
    errorMessage,
    register,
    showErrorMessage,
    isTextArea,
    ...otherProps
  } = props

  const sharedProperties = {
    id,
    placeholder,
    _placeholder: { color: 'white', opacity: '0.6', fontWeight: '400' },
    color: 'white',
    px: 2,
    fontSize: 'md',
    fontWeight: '600',
    variant: 'flushed',
    borderBottomColor: 'white',
    ...register,
    ...otherProps,
  }

  return (
    <FormControl isInvalid={errorName} id={id} mb="8">
      <Flex direction="column" pos="relative" maxW={{ lg: '380px' }} mx="auto">
        {!isTextArea ? (
          <Input {...sharedProperties} />
        ) : (
          <Textarea {...sharedProperties} />
        )}

        {showErrorMessage && (
          <FormErrorMessage fontSize="11px" pos="absolute" bottom="-22px">
            {errorName && errorMessage}
          </FormErrorMessage>
        )}
      </Flex>
    </FormControl>
  )
}

export default CustomInput
