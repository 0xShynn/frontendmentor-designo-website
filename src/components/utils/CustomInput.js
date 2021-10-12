import { WarningIcon } from '@chakra-ui/icons'
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

        {errorMessage && (
          <FormErrorMessage
            fontSize="12px"
            color="white"
            pb="2"
            right={{ md: 0 }}
            left={{ base: '6px', md: 'unset' }}
            bottom={{ base: '-32px', md: '2px' }}
            pos="absolute"
            fontStyle="italic"
          >
            Can&apos;t be empty
            <WarningIcon w={4} h={4} color="white" ml="2" />
          </FormErrorMessage>
        )}
      </Flex>
    </FormControl>
  )
}

export default CustomInput
