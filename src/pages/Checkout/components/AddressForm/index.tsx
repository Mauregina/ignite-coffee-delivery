import { useFormContext } from 'react-hook-form'
import {
  AddressInfo,
  ComplementContainer,
  Input,
  InputComplement,
} from './styles'

export function AddressForm() {
  const { register, watch } = useFormContext()

  const complement = watch('complement')
  const isComplementEmpty = !complement

  return (
    <AddressInfo>
      <Input
        type="number"
        id="zip"
        placeholder="CEP"
        size="12.5rem"
        {...register('zip')}
      />
      <Input placeholder="Rua" {...register('street')} />
      <div>
        <Input
          id="number"
          placeholder="Número"
          size="12.5rem"
          {...register('number')}
        />
        <ComplementContainer>
          <InputComplement
            id="complement"
            placeholder="Complemento"
            {...register('complement')}
          />
          {isComplementEmpty && <span>Opcional</span>}
        </ComplementContainer>
      </div>
      <div>
        <Input
          id="neighborhood"
          placeholder="Bairro"
          size="12.5rem"
          {...register('neighborhood')}
        />
        <Input id="city" placeholder="Cidade" {...register('city')} />
        <Input
          id="state"
          placeholder="UF"
          size="3.75rem"
          maxLength={2}
          {...register('state')}
        />
      </div>
    </AddressInfo>
  )
}
