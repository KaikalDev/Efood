import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import * as Yup from 'yup'

import { Rootreducer } from '../../Store'

import { anterior, end, proximo, start } from '../../Store/reducecrs/SideBar'
import { usePurchaseMutation } from '../../services/api'
import { clear } from '../../Store/reducecrs/Cart'
import { parseToBrl } from '../../Utils'

import { Container } from './styled'
import Button from '../Button'
import Loader from '../Loader'

type Props = {
  totalPrice: number
  show: string
}

const Forms = ({ totalPrice, show }: Props) => {
  const dispatch = useDispatch()
  const [purchase, { isSuccess, isLoading, data }] = usePurchaseMutation()
  const { items } = useSelector((state: Rootreducer) => state.cart)
  const { show: formActive } = useSelector(
    (state: Rootreducer) => state.sideBar
  )

  const form = useFormik({
    initialValues: {
      fullName: '',
      addres: '',
      city: '',
      cep: '',
      addresNumber: '',
      complement: '',

      carDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().when((values, schema) =>
        formActive === 'address'
          ? schema
              .min(4, 'O campo precisa ter pelo menos 4 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      addres: Yup.string().when((values, schema) =>
        formActive === 'address'
          ? schema
              .min(4, 'O campo precisa ter pelo menos 4 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      city: Yup.string().when((values, schema) =>
        formActive === 'address'
          ? schema
              .min(4, 'O campo precisa ter pelo menos 4 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      cep: Yup.string().when((values, schema) =>
        formActive === 'address'
          ? schema
              .required('O campo é obrigatório')
              .min(9, 'Formato inválido')
              .max(9, 'Formato inválido')
          : schema
      ),
      addresNumber: Yup.string().when((values, schema) =>
        formActive === 'address'
          ? schema.required('O campo é obrigatório')
          : schema
      ),
      complement: Yup.string().when((values, schema) =>
        formActive === 'address'
          ? schema.min(4, 'O campo precisa ter pelo menos 4 caracteres')
          : schema
      ),
      carDisplayName: Yup.string().when((values, schema) =>
        formActive === 'card'
          ? schema
              .min(4, 'O campo precisa ter pelo menos 4 caracteres')
              .required('O campo é obrigatório')
          : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        formActive === 'card'
          ? schema
              .required('O campo é obrigatório')
              .max(16, 'Formato inválido')
              .min(16, 'Formato inválido')
          : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        formActive === 'card'
          ? schema
              .min(3, 'Formato inválido')
              .max(3, 'Formato inválido')
              .required('O campo é obrigatório')
          : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        formActive === 'card'
          ? schema.required('O campo é obrigatório')
          : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        formActive === 'card'
          ? schema.required('O campo é obrigatório')
          : schema
      )
    }),
    onSubmit: (values) => {
      if (formActive === 'address') {
        dispatch(proximo())
      } else {
        purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco as number
          })),
          delivery: {
            receiver: values.fullName,
            address: {
              description: values.addres,
              city: values.city,
              cep: values.cep,
              number: values.addresNumber,
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.carDisplayName,
              number: values.cardNumber,
              code: values.cardCode,
              expires: {
                month: values.expiresMonth,
                year: values.expiresYear
              }
            }
          }
        })
      }
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    return isTouched && isInvalid
  }

  const CloseSideBar = () => {
    dispatch(clear())
    dispatch(start())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(end())
    }
  }, [isSuccess, dispatch])

  if (show === 'address') {
    return (
      <Container>
        <h3>Entrega</h3>
        <form onSubmit={form.handleSubmit}>
          <div>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              onChange={form.handleChange}
              value={form.values.fullName}
              className={form.errors.fullName ? 'error' : ''}
            />
            <small>{form.errors.fullName}</small>
          </div>
          <div>
            <label htmlFor="addres">Endereço</label>
            <input
              id="addres"
              type="text"
              name="addres"
              onChange={form.handleChange}
              value={form.values.addres}
              className={form.errors.addres ? 'error' : ''}
            />
          </div>
          <small>{form.errors.addres}</small>
          <div>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              name="city"
              onChange={form.handleChange}
              value={form.values.city}
              className={form.errors.city ? 'error' : ''}
            />
          </div>
          <div className="duo">
            <div>
              <label htmlFor="cep">CEP</label>
              <input
                id="cep"
                type="text"
                name="cep"
                onChange={form.handleChange}
                value={form.values.cep}
                className={form.errors.cep ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="addresNumber">Número</label>
              <input
                id="addresNumber"
                type="text"
                name="addresNumber"
                onChange={form.handleChange}
                value={form.values.addresNumber}
                className={checkInputHasError('addresNumber') ? 'error' : ''}
              />
            </div>
          </div>
          <div>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              type="text"
              name="complement"
              onChange={form.handleChange}
              value={form.values.complement}
              className={checkInputHasError('complement') ? 'error' : ''}
            />
          </div>
          <div className="marginTop">
            <Button
              type="submit"
              variant="secondary"
              title="Clique aqui para continuar com o pedido"
              onClick={form.handleSubmit}
            >
              <>Continuar com o pagamento</>
            </Button>
            <Button
              type="button"
              variant="secondary"
              title="Clique aqui para voltar ao carrinho"
              onClick={() => dispatch(anterior())}
            >
              <>Voltar para o carrinho</>
            </Button>
          </div>
        </form>
      </Container>
    )
  } else if (show === 'card') {
    return (
      <Container>
        <h3>Pagamento - Valor a pagar {parseToBrl(totalPrice)}</h3>
        <form>
          <div>
            <label htmlFor="carDisplayName">Nome no cartão</label>
            <input
              id="carDisplayName"
              type="text"
              name="carDisplayName"
              onChange={form.handleChange}
              value={form.values.carDisplayName}
              className={checkInputHasError('carDisplayName') ? 'error' : ''}
            />
          </div>
          <div className="duo">
            <div className="width">
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                id="cardNumber"
                type="text"
                name="cardNumber"
                onChange={form.handleChange}
                value={form.values.cardNumber}
                className={checkInputHasError('cardNumber') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="cardCode">CVV</label>
              <input
                id="cardCode"
                type="text"
                name="cardCode"
                onChange={form.handleChange}
                value={form.values.cardCode}
                className={checkInputHasError('cardCode') ? 'error' : ''}
              />
            </div>
          </div>
          <div className="duo">
            <div>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input
                id="expiresMonth"
                type="text"
                name="expiresMonth"
                onChange={form.handleChange}
                value={form.values.expiresMonth}
                className={checkInputHasError('expiresMonth') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                id="expiresYear"
                type="text"
                name="expiresYear"
                onChange={form.handleChange}
                value={form.values.expiresYear}
                className={checkInputHasError('expiresYear') ? 'error' : ''}
              />
            </div>
          </div>
          <div className="marginTop">
            <Button
              onClick={form.handleSubmit}
              type="submit"
              variant="secondary"
              title="Clique aqui para finalizar a compra"
              disabled={isLoading}
            >
              <>{isLoading ? <Loader /> : 'Finalizar compra'}</>
            </Button>
            <Button
              type="button"
              variant="secondary"
              title="Clique aqui para voltar ao carrinho"
              onClick={() => dispatch(anterior())}
            >
              <>Voltar para a edição de endereço</>
            </Button>
          </div>
        </form>
      </Container>
    )
  } else if (show === 'success') {
    return (
      <Container>
        <h3>Pedido realizado - {data?.orderId}</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button
          variant="secondary"
          type="button"
          title="Clique aqui para concluir a compra"
          onClick={CloseSideBar}
        >
          <>Concluir</>
        </Button>
      </Container>
    )
  }
  return <></>
}

export default Forms
